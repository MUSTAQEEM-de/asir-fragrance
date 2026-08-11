import React, { useState } from 'react';
import { Mail, Check, Sparkles, Loader2 } from 'lucide-react';
import { subscribeToNewsletter } from '../api/newsletter';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitting(true);
    setError(null);
    try {
      await subscribeToNewsletter(email.trim());
      setSubmitted(true);
    } catch {
      setError('Unable to subscribe right now. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-[#2B2118] text-[#FAF8F5] relative overflow-hidden">
      {/* Background Subtle Mashrabiya */}
      <div className="absolute inset-0 bg-mashrabiya opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF8F5]/10 border border-[#C5A059]/40 text-[#C5A059] text-xs font-semibold tracking-[0.25em] uppercase rounded-full">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PRIVATE CONCIERGE CIRCLE</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-wide">
          ENTER THE WORLD OF ASIR
        </h2>

        <p className="text-sm sm:text-base text-[#EFE8DC]/80 font-light max-w-xl mx-auto leading-relaxed">
          Receive private invitations to confidential bespoke releases, private trunk shows, and olfactory insights from our master perfumers in Paris and Dubai.
        </p>

        {submitted ? (
          <div className="p-6 bg-[#C5A059]/20 border border-[#C5A059] rounded max-w-md mx-auto space-y-2 animate-fadeIn">
            <Check className="w-8 h-8 text-[#C5A059] mx-auto" />
            <h4 className="font-serif text-lg font-medium text-white">WELCOME TO THE JOURNEY</h4>
            <p className="text-xs text-[#EFE8DC]/80">
              A invitation confirmation has been dispatched to <span className="text-[#C5A059]">{email}</span>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail className="w-4 h-4 text-[#C5A059] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full pl-11 pr-4 py-3.5 bg-[#FAF8F5]/10 border border-[#C5A059]/40 text-white placeholder-[#EFE8DC]/50 text-xs tracking-wider font-light focus:outline-none focus:border-[#C5A059]"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="px-8 py-3.5 bg-[#C5A059] text-[#2B2118] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#FAF8F5] transition-colors shadow-lg whitespace-nowrap disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {submitting && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
              <span>{submitting ? 'JOINING...' : 'JOIN THE JOURNEY'}</span>
            </button>
          </form>
        )}

        {error && <p className="text-xs text-red-400">{error}</p>}

        <p className="text-[10px] text-[#EFE8DC]/50 uppercase tracking-widest font-light">
          We respect your privacy. Unsubscribe anytime.
        </p>

      </div>
    </section>
  );
};
