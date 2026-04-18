import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-zinc-950 font-semibold shadow-[0_0_24px_rgba(0,255,157,0.25)] hover:brightness-110 active:scale-[0.99]",
  ghost: "bg-white/5 text-white hover:bg-white/10 border border-white/10",
  outline:
    "border border-accent/60 text-accent hover:bg-accent/10 hover:border-accent",
};

type Base = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonAsButton = Base &
  Omit<ComponentProps<"button">, "className" | "children"> & { href?: undefined };

type ButtonAsLink = Base &
  Omit<ComponentProps<typeof Link>, "className" | "children"> & {
    href: string;
  };

function classes(variant: Variant, className: string) {
  return `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm sm:text-base transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${variants[variant]} ${className}`;
}

function LinkButton({ children, className = "", variant = "primary", href, ...rest }: ButtonAsLink) {
  return (
    <Link href={href} className={classes(variant, className)} {...rest}>
      {children}
    </Link>
  );
}

function NativeButton({ children, className = "", variant = "primary", ...rest }: ButtonAsButton) {
  return (
    <button type="button" className={classes(variant, className)} {...rest}>
      {children}
    </button>
  );
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  if ("href" in props && props.href) {
    return <LinkButton {...(props as ButtonAsLink)} />;
  }
  return <NativeButton {...(props as ButtonAsButton)} />;
}
