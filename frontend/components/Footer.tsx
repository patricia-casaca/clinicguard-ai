import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2F6F8A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/80">
          <div>© {new Date().getFullYear()} ClinicGuard AI</div>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>

        {/* Divider (very subtle) */}
        <div className="my-3 h-px bg-white/10" />

        {/* Disclaimer */}
        <p className="max-w-3xl mx-auto text-center text-[11px] text-white/55 leading-relaxed">
          ClinicGuard AI provides automated compliance insights and guidance and
          is not a substitute for legal or professional advice. Clinics remain
          responsible for ensuring compliance with applicable laws and
          regulations.
        </p>
      </div>
    </footer>
  );
}
