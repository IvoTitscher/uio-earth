"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "UIO", href: "/" },
  { label: "Charter", href: "/charter" },
  { label: "Blog", href: "/blog" },
  {
    label: "Discord",
    href: "https://discord.gg/3fc9fvPSK3",
    external: true,
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Members",
    href: "/members",
    children: [
      { label: "Register", href: "/register" },
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <header className="pb-[clamp(1.8rem,1.8rem+((1vw-0.48rem)*2.885),3rem)]">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-base font-normal no-underline">
          UIO
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <li key={item.label} className="relative">
                {item.children ? (
                  <div
                    className="group relative"
                    onMouseEnter={() => setOpenSubmenu(item.label)}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    <Link
                      href={item.href}
                      className="no-underline hover:underline"
                    >
                      {item.label}
                    </Link>
                    {openSubmenu === item.label && (
                      <ul className="absolute right-0 top-full z-10 mt-1 min-w-[160px] border border-gray-200 bg-white py-1">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block px-4 py-2 text-sm no-underline hover:underline"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline hover:underline"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="no-underline hover:underline"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="7.5" width="16" height="1.5" fill="currentColor" />
              <rect x="4" y="15" width="16" height="1.5" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <nav className="mt-4 border-t border-gray-200 pt-4 md:hidden">
          <ul className="flex flex-col gap-3 text-sm">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="no-underline hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
                {item.children && (
                  <ul className="mt-2 ml-4 flex flex-col gap-2">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className="no-underline hover:underline"
                          onClick={() => setMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
