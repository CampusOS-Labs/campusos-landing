'use client';

import LogoLoop, { type LogoItem } from '@/components/ui/LogoLoop';

// Razorpay-supported payment methods (India): UPI, wallets/UPI apps, card networks, netbanking.
// Sources: https://razorpay.com/docs/payments/payment-methods/
const PAYMENT_METHODS = [
  { name: 'UPI', src: '/logos/payments/upi.svg' },
  { name: 'Google Pay', src: '/logos/payments/google-pay.svg' },
  { name: 'PhonePe', src: '/logos/payments/phonepe.svg' },
  { name: 'Paytm', src: '/logos/payments/paytm.svg' },
  { name: 'Visa', src: '/logos/payments/visa.svg' },
  { name: 'Mastercard', src: '/logos/payments/mastercard.svg' },
  { name: 'RuPay', src: '/logos/payments/rupay.svg' },
  { name: 'American Express', src: '/logos/payments/american-express.svg' },
  { name: 'Maestro', src: '/logos/payments/maestro.svg' },
  { name: 'Diners Club', src: '/logos/payments/diners.svg' },
  { name: 'Net Banking', src: '/logos/payments/netbanking.svg' },
] as const;

const stackLogos: LogoItem[] = PAYMENT_METHODS.map(({ name, src }) => ({
  src,
  alt: name,
  title: name,
}));

export function BillingStackLoop() {
  return (
    <div className="billing-stack-loop relative mt-8 h-10 w-full max-w-5xl overflow-hidden [&_.logoloop__item_img]:opacity-80">
      <LogoLoop
        logos={stackLogos}
        speed={60}
        direction="left"
        logoHeight={28}
        gap={48}
        hoverSpeed={0}
        fadeOut
        fadeOutColor="var(--background)"
        ariaLabel="Payment methods supported through Razorpay"
      />
    </div>
  );
}
