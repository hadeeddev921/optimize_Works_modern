import Image from "next/image";

export function Logo({
  variant = "nav",
}: {
  variant?: "nav" | "footer";
}) {
  const width = variant === "footer" ? 148 : 185;
  const height = variant === "footer" ? 36 : 42;
  const className = variant === "footer" ? "footer-logo" : "nav-logo";

  return (
    <span className={className}>
      <Image
        src="/optimizeworks-logo.png"
        alt="Optimize Works"
        width={width}
        height={height}
        priority={variant === "nav"}
      />
    </span>
  );
}

