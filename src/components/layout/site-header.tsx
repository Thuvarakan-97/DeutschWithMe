"use client";

import {
  ArrowUpRight,
  BookOpen,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getCourseBySlug } from "@/data/courses";

const navigation = [
  { href: "/#home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/contact", label: "Contact" },
  { href: "/#login", label: "Login" },
];

function NavigationLinks({
  mobile = false,
  onNavigate,
}: {
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <ul className={mobile ? "mobile-nav__list" : "desktop-nav__list"}>
      {navigation.map(({ href, label }) => (
        <li key={href}>
          <Link
            className={mobile ? "mobile-nav__link" : "desktop-nav__link"}
            href={href}
            onClick={onNavigate}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const courseSlug = pathname.match(/^\/courses\/([^/]+)$/)?.[1];
  const registrationHref = courseSlug && getCourseBySlug(courseSlug)
    ? `/register?course=${encodeURIComponent(courseSlug)}`
    : "/register";

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Link aria-label="DeutschWithMe home" className="brand" href="/#home">
          <span className="brand__icon">
            <BookOpen aria-hidden="true" />
          </span>
          <span className="brand__name">
            Deutsch<span>WithMe</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="desktop-nav">
          <NavigationLinks />
        </nav>

        <ButtonLink className="site-header__cta" href={registrationHref} size="small">
          Register Now
          <ArrowUpRight aria-hidden="true" />
        </ButtonLink>

        <div className="mobile-nav">
          <button
            aria-controls="mobile-navigation-panel"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
            className="mobile-nav__summary"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            type="button"
          >
            <Menu aria-hidden="true" className="mobile-nav__open-icon" />
            <X aria-hidden="true" className="mobile-nav__close-icon" />
          </button>
          <div
            className="mobile-nav__panel"
            hidden={!isMobileMenuOpen}
            id="mobile-navigation-panel"
          >
            <nav aria-label="Mobile navigation">
              <NavigationLinks
                mobile
                onNavigate={() => setIsMobileMenuOpen(false)}
              />
            </nav>
            <ButtonLink
              href={registrationHref}
              onClick={() => setIsMobileMenuOpen(false)}
              size="small"
            >
              Register Now <ArrowUpRight aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </header>
  );
}
