interface PullQuoteProps {
  children: React.ReactNode;
}

export function PullQuote({ children }: PullQuoteProps) {
  return (
    <figure className="my-10 not-prose" aria-label="Pull quote">
      <blockquote
        className="relative pl-7 py-1"
        style={{ borderLeft: "2px solid #B59A5A" }}
      >
        {/* Gold ornament */}
        <span
          className="absolute -left-[7px] top-1/2 -translate-y-1/2 text-[#B59A5A] text-xs leading-none"
          aria-hidden="true"
        >
          ✦
        </span>

        <p
          className="font-serif italic text-[#3D3830] leading-[1.7]"
          style={{ fontSize: "clamp(1.08rem, 1.8vw, 1.22rem)" }}
        >
          &ldquo;{children}&rdquo;
        </p>
      </blockquote>
    </figure>
  );
}
