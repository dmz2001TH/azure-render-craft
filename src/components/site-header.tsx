import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";

const navLinks = [
  { label: "แอคเคาท์", href: "/" },
  { label: "OTP", href: "/" },
  { label: "เพิ่มผู้ติดตาม", href: "/" },
  { label: "เติมเกม", href: "/" },
  { label: "อื่น ๆ", href: "/" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all"
      style={{
        background: scrolled
          ? "oklch(0.16 0.04 250 / 0.85)"
          : "oklch(0.16 0.04 250 / 0.55)",
        backdropFilter: "blur(14px)",
        borderBottom: scrolled
          ? "1px solid oklch(1 0 0 / 0.08)"
          : "1px solid transparent",
      }}
    >
      <div className="container-app flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-lg"
            style={{
              background: "var(--gradient-primary)",
              boxShadow: "var(--shadow-neon)",
              color: "var(--primary-foreground)",
            }}
          >
            S
          </div>
          <span className="font-extrabold tracking-wide text-base md:text-lg">
            SKYOTP<span className="text-primary">.COM</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full glow-ring font-semibold text-sm"
            style={{ color: "var(--primary)" }}
          >
            <User className="w-4 h-4" />
            เข้าสู่ระบบ
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 rounded-md text-foreground"
            aria-label="เปิดเมนู"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-background/95">
          <div className="container-app py-3 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="nav-link text-base"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#"
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full glow-ring font-semibold"
              style={{ color: "var(--primary)" }}
            >
              <User className="w-4 h-4" /> เข้าสู่ระบบ
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
