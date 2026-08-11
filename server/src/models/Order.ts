import { Schema, model, Document, Types } from 'mongoose';

export type OrderStatus = 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface OrderItem {
  product: Types.ObjectId;
  productName: string;
  productImage: string;
  size: string;
  quantity: number;
  priceINR: number; // price at time of purchase — never mutated after creation
}

export interface ShippingAddress {
  fullName: string;
  phone: string;
  email: string;
  addressLine: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface OrderDocument extends Document<Types.ObjectId> {
  orderNumber: string;
  customer?: Types.ObjectId;
  items: OrderItem[];
  shippingAddress: ShippingAddress;
  subtotalINR: number;
  shippingFeeINR: number;
  taxINR: number;
  totalINR: number;
  paymentMethod: 'cod';
  paymentStatus: 'pending' | 'paid';
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
}

const orderItemSchema = new Schema<OrderItem>(
  {
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    productName: { type: String, required: true },
    productImage: { type: String, required: true },
    size: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    priceINR: { type: Number, required: true, min: 0 }
  },
  { _id: false }
);

const shippingAddressSchema = new Schema<ShippingAddress>(
  {
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    addressLine: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true, default: 'India' }
  },
  { _id: false }
);

const orderSchema = new Schema<OrderDocument>(
  {
    orderNumber: { type: String, required: true, unique: true, index: true },
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
    items: { type: [orderItemSchema], required: true },
    shippingAddress: { type: shippingAddressSchema, required: true },
    subtotalINR: { type: Number, required: true, min: 0 },
    shippingFeeINR: { type: Number, required: true, min: 0, default: 0 },
    taxINR: { type: Number, required: true, min: 0, default: 0 },
    totalINR: { type: Number, required: true, min: 0 },
    paymentMethod: { type: String, enum: ['cod'], default: 'cod' },
    paymentStatus: { type: String, enum: ['pending', 'paid'], default: 'pending' },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'],
      default: 'pending',
      index: true
    }
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

orderSchema.index({ 'shippingAddress.email': 1 });

export const Order = model<OrderDocument>('Order', orderSchema);
