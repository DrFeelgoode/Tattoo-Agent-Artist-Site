"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { mainNavLinks } from "@/data/navigation";
import { SITE } from "@/lib/constants";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [plansOpen, setPlansOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-cream/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/brand/icon.webp"
            alt="Tattoo Agent"
            width={44}
            height={44}
            className="h-11 w-11"
          />
          <span className="font-[family-name:var(--font-lobster)] text-2xl text-cream">
            {SITE.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-2 md:flex">
          {mainNavLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setPlansOpen(true)}
                onMouseLeave={() => setPlansOpen(false)}
              >
                <button
                  className={cn(
                    "rounded-lg px-4 py-2 text-base font-medium " +
                      "transition-colors hover:text-lime",
                    pathname.startsWith("/plans")
                      ? "text-lime"
                      : "text-cream/80",
                  )}
                >
                  {link.label}
                  <span className="ml-1 text-xs">▾</span>
                </button>
                {plansOpen && (
                  <div className="absolute left-0 top-full pt-1">
                    <div className="rounded-lg border border-cream/10 bg-charcoal py-2 shadow-xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block whitespace-nowrap px-4 py-2 text-sm " +
                              "transition-colors hover:bg-cream/5 hover:text-lime",
                            pathname === child.href
                              ? "text-lime"
                              : "text-cream/80",
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-4 py-2 text-base font-medium " +
                    "transition-colors hover:text-lime",
                  pathname === link.href
                    ? "text-lime"
                    : "text-cream/80",
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </div>

        {/* Right side */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href={SITE.loginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-cream/80 transition-colors hover:text-lime"
          >
            Login
          </a>
          <Button href="/purchase" size="md">
            Get Started
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "h-0.5 w-6 bg-cream transition-all duration-200",
              mobileOpen && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={cn(
              "h-0.5 w-6 bg-cream transition-all duration-200",
              mobileOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "h-0.5 w-6 bg-cream transition-all duration-200",
              mobileOpen && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </div>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </nav>
  );
}
