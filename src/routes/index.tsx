import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Smartphone,
  Star,
  Bot,
  Gamepad2,
  CreditCard,
  TrendingUp,
  Zap,
  ShieldCheck,
  Wallet,
  ArrowRight,
  Rocket,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SKYOTP — รับ OTP ออนไลน์ ราคาถูก สมัคร Line Gmail TikTok" },
      {
        name: "description",
        content:
          "บริการรับ OTP ราคาถูก เริ่มต้น 5 บาท สมัคร Gmail Facebook Line TikTok ระบบออโต้ 24 ชั่วโมง พร้อมแอคเคาท์พรีเมียม Netflix YouTube ChatGPT",
      },
      { property: "og:title", content: "SKYOTP — รับ OTP ออนไลน์ ราคาถูก" },
      {
        property: "og:description",
        content:
          "OTP หลากหลายประเทศ + แอคเคาท์พรีเมียม + เติมเกม ราคาถูก ระบบออโต้ 24 ชม.",
      },
    ],
  }),
});

const heroSlides = [
  {
    title: "OTP หลากหลายประเทศ\nราคาถูกที่สุด",
    subtitle:
      "สมัคร Gmail, Facebook, Instagram, Line, TikTok และอื่น ๆ เริ่มต้น 5 บาท",
    cta: "ดูสินค้าทั้งหมด",
  },
  {
    title: "แอคเคาท์พรีเมียม\nราคาส่ง",
    subtitle:
      "Netflix, YouTube Premium, ChatGPT, Claude AI ราคาถูกที่สุด ส่งทันที",
    cta: "ซื้อเลย",
  },
  {
    title: "เติมเกมออนไลน์\nราคาถูก",
    subtitle:
      "ROV, FreeFire, PUBG, Roblox ระบบออโต้ เงินเข้าไว ไม่ต้องใช้รหัส",
    cta: "เติมเกมเลย",
  },
];

const services = [
  { icon: Smartphone, label: "OTP" },
  { icon: Star, label: "สตรีมมิ่ง" },
  { icon: Bot, label: "AI Tools" },
  { icon: Gamepad2, label: "เติมเกม" },
  { icon: CreditCard, label: "บัตรเงินสด" },
  { icon: TrendingUp, label: "ปั๊มฟอล" },
];

type Product = {
  id: number;
  name: string;
  desc: string;
  price: number;
  original: number | null;
  stock: number;
  category: string;
  emoji: string;
  bg: string;
};

const otpProducts: Product[] = [
  {
    id: 1,
    name: "OTP Line Thailand",
    desc: "เบอร์ไทยใหม่ สมัคร Line ได้ทันที ใช้งานง่าย",
    price: 8,
    original: 15,
    stock: 124,
    category: "OTP",
    emoji: "💬",
    bg: "linear-gradient(135deg,#06C755,#00b14f)",
  },
  {
    id: 2,
    name: "OTP Gmail USA",
    desc: "เบอร์ USA สมัคร Gmail ได้แน่นอน 100%",
    price: 12,
    original: 20,
    stock: 87,
    category: "OTP",
    emoji: "📧",
    bg: "linear-gradient(135deg,#EA4335,#fbbc04)",
  },
  {
    id: 3,
    name: "OTP TikTok Asia",
    desc: "สมัคร TikTok บัญชีปังๆ ขายของได้เลย",
    price: 10,
    original: null,
    stock: 4,
    category: "OTP",
    emoji: "🎵",
    bg: "linear-gradient(135deg,#000,#ff0050)",
  },
];

const popularProducts: Product[] = [
  {
    id: 11,
    name: "Netflix Premium 4K",
    desc: "บัญชีพรีเมียม 4K ส่วนตัว ใช้งาน 1 เดือน",
    price: 89,
    original: 419,
    stock: 32,
    category: "สตรีมมิ่ง",
    emoji: "🎬",
    bg: "linear-gradient(135deg,#E50914,#831010)",
  },
  {
    id: 12,
    name: "ChatGPT Plus 1 เดือน",
    desc: "เข้าถึง GPT-4o, DALL·E, ฟีเจอร์ครบ",
    price: 290,
    original: 720,
    stock: 18,
    category: "AI Tools",
    emoji: "🤖",
    bg: "linear-gradient(135deg,#10a37f,#1a7f64)",
  },
  {
    id: 13,
    name: "ROV เพชร 100 + 8",
    desc: "ระบบออโต้ เติมเข้าไว 1-3 นาที",
    price: 35,
    original: null,
    stock: 99,
    category: "เติมเกม",
    emoji: "⚔️",
    bg: "linear-gradient(135deg,#1e3c72,#2a5298)",
  },
];

function HeroSection() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);
  const s = heroSlides[idx];

  return (
    <section
      className="hero-banner"
      style={
        {
          minHeight: "560px",
          ["--hero-image" as never]: `url(${heroBg})`,
        } as React.CSSProperties
      }
    >
      <div className="container-app hero-content text-center pt-16 pb-24 md:pt-24 md:pb-32">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
          style={{
            background: "oklch(0.74 0.18 152 / 0.15)",
            color: "var(--success)",
            border: "1px solid oklch(0.74 0.18 152 / 0.4)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "var(--success)" }}
          />
          ออนไลน์แล้ว — ระบบพร้อมบริการ 24 ชั่วโมง
        </div>

        <h1
          key={idx}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 whitespace-pre-line tracking-tight"
          style={{ animation: "fadeIn 0.6s ease-out" }}
        >
          {s.title.split("\n").map((line, i) => (
            <span key={i} className="block">
              {i === 1 ? (
                <span
                  style={{
                    background: "var(--gradient-primary)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 24px oklch(0.78 0.16 235 / 0.5))",
                  }}
                >
                  {line}
                </span>
              ) : (
                line
              )}
            </span>
          ))}
        </h1>

        <p
          className="text-base md:text-lg text-white/70 mb-9 max-w-2xl mx-auto"
          style={{ animation: "fadeIn 0.6s ease-out 0.1s both" }}
        >
          {s.subtitle}
        </p>

        <div
          className="flex flex-wrap justify-center gap-3 mb-10"
          style={{ animation: "fadeIn 0.6s ease-out 0.2s both" }}
        >
          <a href="#products" className="btn-neon px-7 py-3.5 text-base">
            {s.cta} <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#" className="btn-neon btn-neon-ghost px-7 py-3.5 text-base">
            สมัครสมาชิกฟรี
          </a>
        </div>

        <div className="flex justify-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`สไลด์ที่ ${i + 1}`}
              className="h-2.5 rounded-full transition-all"
              style={{
                width: i === idx ? "32px" : "10px",
                background:
                  i === idx
                    ? "var(--gradient-primary)"
                    : "oklch(1 0 0 / 0.25)",
                boxShadow: i === idx ? "var(--shadow-neon)" : "none",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceGrid() {
  return (
    <section className="container-app py-10 -mt-12 relative z-10">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <a key={s.label} href="#" className="recommend-menu">
              <div className="icon-menu">
                <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <div className="title mt-2.5">{s.label}</div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function ProductCard({ p }: { p: Product }) {
  return (
    <a href="#" className="product-card-modern relative">
      {p.original && (
        <div className="discount-circle">
          -{Math.round((1 - p.price / p.original) * 100)}%
        </div>
      )}
      <div
        className="overflow-hidden flex items-center justify-center text-6xl"
        style={{ height: "170px", background: p.bg }}
      >
        <span style={{ filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.4))" }}>
          {p.emoji}
        </span>
      </div>
      <div className="product-card-body">
        <div className="flex items-center gap-2 mb-2">
          <span className="badge-modern">{p.category}</span>
          <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
            <span
              className={`stock-dot ${
                p.stock < 10 ? "stock-dot-low" : "stock-dot-high"
              }`}
            />
            คงเหลือ {p.stock}
          </div>
        </div>
        <h3 className="font-bold text-base mb-1">{p.name}</h3>
        <p className="text-xs text-[var(--text-muted)] line-clamp-2 leading-relaxed">
          {p.desc}
        </p>
      </div>
      <div className="product-card-footer">
        <div className="flex items-baseline gap-2">
          <span className="price-modern text-lg">฿{p.price}</span>
          {p.original && (
            <span className="price-original-modern">฿{p.original}</span>
          )}
        </div>
        <span className="btn-neon text-xs px-4 py-2">ซื้อเลย</span>
      </div>
    </a>
  );
}

function ProductSection({
  id,
  title,
  subtitle,
  products,
}: {
  id?: string;
  title: string;
  subtitle: string;
  products: Product[];
}) {
  return (
    <section id={id} className="container-app py-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-7">
        <div className="flex-1">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
          <div className="section-divider" />
        </div>
        <a
          href="#"
          className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
        >
          ดูทั้งหมด <ArrowRight className="w-4 h-4" />
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "ส่งอัตโนมัติ ทันที",
      desc: "สินค้าส่งทันทีหลังจ่ายเงิน ไม่ต้องรอ ไม่ต้องทักแอดมิน",
    },
    {
      icon: Wallet,
      title: "ราคาถูกที่สุด",
      desc: "ราคาส่งจากผู้ผลิตโดยตรง ถูกกว่าหน้าร้าน 30-60%",
    },
    {
      icon: ShieldCheck,
      title: "ปลอดภัย มั่นใจ",
      desc: "ข้อมูลปลอดภัย SSL ชำระเงินผ่าน PromptPay ที่เชื่อถือได้",
    },
  ];
  return (
    <section className="container-app py-14">
      <div className="text-center mb-10">
        <h2 className="section-title">✨ ทำไมต้อง SKYOTP?</h2>
        <div
          className="section-divider mx-auto"
          style={{ marginInline: "auto" }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div key={f.title} className="feature-item">
              <div
                className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                style={{
                  background: "var(--gradient-primary)",
                  boxShadow: "var(--shadow-neon)",
                }}
              >
                <Icon className="w-7 h-7 text-[var(--primary-foreground)]" />
              </div>
              <h3 className="font-bold text-base mb-2">{f.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {f.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function PaymentSection() {
  const banks = [
    "PromptPay",
    "กสิกรไทย",
    "ไทยพาณิชย์",
    "กรุงไทย",
    "กรุงเทพ",
    "กรุงศรี",
    "TrueMoney",
    "ออมสิน",
  ];
  return (
    <section className="container-app py-12">
      <div className="card-modern p-8 md:p-10">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-extrabold mb-2">
            💳 รองรับทุกธนาคาร
          </h2>
          <p className="text-sm text-[var(--text-muted)]">
            เติมเงินง่ายและรวดเร็ว ด้วยระบบ QR Code PromptPay
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {banks.map((b) => (
            <div key={b} className="payment-badge">
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="container-app py-16">
      <div
        className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
        style={{
          background: "var(--gradient-cta)",
          boxShadow: "var(--shadow-elevated)",
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.3'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
            พร้อมซื้อสินค้าราคาถูก?
          </h2>
          <p className="text-white/85 mb-8 text-base md:text-lg max-w-md mx-auto">
            สมัครสมาชิกฟรี แล้วเริ่มซื้อสินค้าราคาถูกได้เลยวันนี้
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full text-base font-extrabold transition-transform hover:scale-105"
            style={{
              background: "white",
              color: "oklch(0.4 0.16 240)",
              boxShadow: "0 0 40px oklch(1 0 0 / 0.4)",
            }}
          >
            สมัครสมาชิก <Rocket className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ServiceGrid />
        <ProductSection
          id="products"
          title="📱 บริการ OTP"
          subtitle="OTP หลากหลายประเทศ ใช้สมัครบัญชีต่าง ๆ เริ่มต้น 5 บาท"
          products={otpProducts}
        />
        <ProductSection
          title="🔥 สินค้ายอดนิยม"
          subtitle="สินค้าขายดีที่สุดของเรา"
          products={popularProducts}
        />
        <FeaturesSection />
        <PaymentSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  );
}
