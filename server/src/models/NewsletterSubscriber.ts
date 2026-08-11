import { Schema, model, Document, Types } from 'mongoose';

export interface NewsletterSubscriberDocument extends Document<Types.ObjectId> {
  email: string;
  subscribedAt: Date;
}

const newsletterSubscriberSchema = new Schema<NewsletterSubscriberDocument>({
  email: { type: String, required: true, unique: true, index: true, lowercase: true, trim: true },
  subscribedAt: { type: Date, default: Date.now }
});

export const NewsletterSubscriber = model<NewsletterSubscriberDocument>(
  'NewsletterSubscriber',
  newsletterSubscriberSchema
);
