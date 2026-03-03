import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import { footerNavLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-black px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/brand/icon.webp"
                alt="Tattoo Agent"
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <span className="font-[family-name:var(--font-lobster)] text-xl text-cream">
                {SITE.name}
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              {SITE.description}
            </p>
            <div className="mt-4 flex flex-col gap-1 text-sm text-muted">
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-lime"
              >
                {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="hover:text-lime"
              >
                {SITE.phone}
              </a>
              <a
                href={SITE.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime"
              >
                {SITE.instagram.handle}
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="mb-3 font-[family-name:var(--font-bebas-neue)] text-lg tracking-wide text-cream">
              Product
            </h3>
            <ul className="flex flex-col gap-2">
              {footerNavLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-lime"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="mb-3 font-[family-name:var(--font-bebas-neue)] text-lg tracking-wide text-cream">
              Company
            </h3>
            <ul className="flex flex-col gap-2">
              {footerNavLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-lime"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="mb-3 font-[family-name:var(--font-bebas-neue)] text-lg tracking-wide text-cream">
              Legal
            </h3>
            <ul className="flex flex-col gap-2">
              {footerNavLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-lime"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {footerNavLinks.resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors hover:text-lime"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-cream/10 pt-6">
          <p className="text-center text-xs text-muted">
            © {new Date().getFullYear()} Tattoo Agent LLC. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
