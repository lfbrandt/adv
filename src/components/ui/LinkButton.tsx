import Link from "next/link";
import type { ReactNode } from "react";

type LinkButtonProps = Readonly<{
  children: ReactNode;
  className?: string;
  href: string;
  variant?: "primary" | "secondary";
}>;

export function LinkButton({
  children,
  className,
  href,
  variant = "primary",
}: LinkButtonProps) {
  const classes = ["button", `button--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
