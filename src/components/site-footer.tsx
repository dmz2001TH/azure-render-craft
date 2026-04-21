import { Facebook, MessageCircle, Mail, ShieldCheck } from "lucide-react";

export function SiteFooter() {
  return (
    <footer
      className="mt-16 border-t border-white/10"
      style={{ background: "oklch(0.13 0.04 252)" }}
    >
      <div className="container-app py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold"
              style={{
                background: "var(--gradient-primary)",
                color: "var(--primary-foreground)",
              }}
            >
              S
            </div>
            <span className="font-extrabold">SKYOTP.COM</span>
          </div>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            เว็บรับ OTP ออนไลน์ อันดับ 1 ในไทย ราคาถูก ระบบออโต้ 24 ชั่วโมง
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-3">บริการ</h4>
          <ul className="space-y-2 text-sm text-[var(--text-muted)]">
            <li><a href="#" className="hover:text-primary">รับ OTP</a></li>
            <li><a href="#" className="hover:text-primary">แอคเคาท์พรีเมียม</a></li>
            <li><a href="#" className="hover:text-primary">เติมเกม</a></li>
            <li><a href="#" className="hover:text-primary">ปั๊มฟอลโลเวอร์</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">ช่วยเหลือ</h4>
          <ul className="space-y-2 text-sm text-[var(--text-muted)]">
            <li><a href="#" className="hover:text-primary">วิธีการสั่งซื้อ</a></li>
            <li><a href="#" className="hover:text-primary">วิธีการชำระเงิน</a></li>
            <li><a href="#" className="hover:text-primary">เงื่อนไขการให้บริการ</a></li>
            <li><a href="#" className="hover:text-primary">นโยบายความเป็นส่วนตัว</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">ติดต่อเรา</h4>
          <div className="flex items-center gap-3 mb-4">
            <a href="#" aria-label="Line" className="w-10 h-10 rounded-full flex items-center justify-center glow-ring">
              <MessageCircle className="w-4 h-4 text-primary" />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full flex items-center justify-center glow-ring">
              <Facebook className="w-4 h-4 text-primary" />
            </a>
            <a href="#" aria-label="Email" className="w-10 h-10 rounded-full flex items-center justify-center glow-ring">
              <Mail className="w-4 h-4 text-primary" />
            </a>
          </div>
          <div className="inline-flex items-center gap-2 text-xs text-[var(--text-muted)]">
            <ShieldCheck className="w-4 h-4 text-[var(--success)]" />
            ปลอดภัยด้วย SSL
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-[var(--text-muted)]">
        © {new Date().getFullYear()} SKYOTP.COM — All rights reserved.
      </div>
    </footer>
  );
}
