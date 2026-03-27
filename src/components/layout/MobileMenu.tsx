"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { mainNavLinks } from "@/data/navigation";
import { SITE } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  // Close menu when the route actually changes
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () =>
      document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          role="menu"
          aria-label="Mobile navigation"
          className="overflow-hidden border-t border-cream/10 bg-black md:hidden"
        >
          <div className="flex flex-col gap-1 px-4 py-4">
            {mainNavLinks.map((link) =>
              link.children ? (
                <div key={link.label} role="group">
                  <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      role="menuitem"
                      onClick={onClose}
                      className={cn(
                        "block rounded-lg px-3 py-2 pl-6 text-sm " +
                          "font-medium transition-colors",
                        pathname === child.href
                          ? "text-lime"
                          : "text-cream/80 hover:text-lime",
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  onClick={onClose}
                  className={cn(
                    "block rounded-lg px-3 py-2 text-sm " +
                      "font-medium transition-colors",
                    pathname === link.href
                      ? "text-lime"
                      : "text-cream/80 hover:text-lime",
                  )}
                >
                  {link.label}
                </Link>
              ),
            )}
            <div className="mt-4 flex flex-col gap-3 border-t border-cream/10 pt-4">
              <a
                href={SITE.loginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-sm font-medium text-cream/80"
              >
                Login →
              </a>
              <Button href="/purchase" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
