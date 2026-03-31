import { cn } from "@/lib/utils";

export function AboutQuote({
  quote,
  author,
  className,
}: {
  quote: string;
  author?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative w-full", className)}>
      <div className="mx-auto w-full max-w-4xl text-center">
        <figure className="relative overflow-hidden rounded-[1.25rem] border border-[#C8A96A]/20 bg-white/95 px-6 py-8 shadow-[0_12px_40px_rgba(11,31,58,0.10)] dark:border-[#C8A96A]/15 dark:bg-[#102746] sm:px-8">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#C8A96A]/10 via-transparent to-[#0B1F3A]/5 dark:from-[#C8A96A]/10 dark:via-transparent dark:to-white/5" />

          <div className="relative">

            <blockquote className="text-balance text-lg leading-snug text-[#0B1F3A] dark:text-white sm:text-xl md:text-2xl">
              <span className="text-[#C8A96A]">“</span>
              {quote}
              <span className="text-[#C8A96A]">”</span>
            </blockquote>

            {author && (
              <figcaption className="mt-4 text-sm font-medium text-neutral-600 dark:text-neutral-300">
                {author}
              </figcaption>
            )}
          </div>
        </figure>
      </div>
    </div>
  );
}