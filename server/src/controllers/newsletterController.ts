import { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { NewsletterSubscriber } from '../models/NewsletterSubscriber';
import { ApiError } from '../utils/ApiError';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const subscribe = asyncHandler(async (req: Request, res: Response) => {
  const { email } = req.body;
  if (!email || !EMAIL_REGEX.test(email)) throw ApiError.badRequest('A valid email is required');

  const existing = await NewsletterSubscriber.findOne({ email: email.toLowerCase() });
  if (existing) {
    res.json({ success: true, data: existing });
    return;
  }

  const subscriber = await NewsletterSubscriber.create({ email: email.toLowerCase() });
  res.status(201).json({ success: true, data: subscriber });
});

export const listSubscribers = asyncHandler(async (_req: Request, res: Response) => {
  const subscribers = await NewsletterSubscriber.find().sort({ subscribedAt: -1 });
  res.json({ success: true, data: subscribers });
});
