import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <span className="text-xs uppercase tracking-[0.2em] text-brand-light font-medium">
        {label}
      </span>
      <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base text-gray-600 leading-relaxed",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
