import { Schema, model, Document, Types } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface CustomerDocument extends Document<Types.ObjectId> {
  name: string;
  email: string;
  passwordHash: string;
  phone?: string;
  role: 'customer' | 'admin';
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidate: string): Promise<boolean>;
}

const customerSchema = new Schema<CustomerDocument>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, index: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true, select: false },
    phone: { type: String },
    role: { type: String, enum: ['customer', 'admin'], default: 'customer' }
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

customerSchema.methods.comparePassword = function (candidate: string) {
  return bcrypt.compare(candidate, this.passwordHash);
};

export const Customer = model<CustomerDocument>('Customer', customerSchema);
