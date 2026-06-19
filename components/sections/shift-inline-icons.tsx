import Image from "next/image";

type ShiftInlineIconProps = {
  className?: string;
};

function AppIcon({ src, className }: { src: string; className?: string }) {
  return (
    <span
      className={`relative inline-flex shrink-0 overflow-hidden rounded-[22%] [corner-shape:round] ${className ?? ""}`}
      aria-hidden
    >
      <Image
        src={src}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 768px) 24px, 40px"
      />
    </span>
  );
}

const iconClassName = "size-[0.65em] min-h-[18px] min-w-[18px]";

export function GoogleSheetsIcon({ className }: ShiftInlineIconProps) {
  return (
    <AppIcon
      src="/logos/brands/google-sheets-ios.jpg"
      className={className ?? iconClassName}
    />
  );
}

export function WhatsAppIcon({ className }: ShiftInlineIconProps) {
  return (
    <AppIcon
      src="/logos/brands/whatsapp-ios.jpg"
      className={className ?? iconClassName}
    />
  );
}
