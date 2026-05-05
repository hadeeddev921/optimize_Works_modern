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
      <img
        src="/optimizeworks-logo-nobg.png"
        alt="Optimize Works"
        width={width}
        height={height}
        loading={variant === "nav" ? "eager" : "lazy"}
        decoding="async"
      />
    </span>
  );
}

