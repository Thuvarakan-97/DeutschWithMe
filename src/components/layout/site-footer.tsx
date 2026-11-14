import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { contactDetails } from "@/data/contact";

const footerLinks = [
  { href: "/about", label: "About us" },
  { href: "/courses", label: "Courses" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#stories", label: "Student stories" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy policy" },
  { href: "/impressum", label: "Impressum" },
  { href: "/terms-and-conditions", label: "Terms and conditions" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__main">
          <div className="site-footer__brand-block">
            <Link aria-label="DeutschWithMe home" className="brand brand--footer" href="/#home">
              <span className="brand__icon">
                <BookOpen aria-hidden="true" />
              </span>
              <span className="brand__name">
                Deutsch<span>WithMe</span>
              </span>
            </Link>
            <p className="site-footer__tagline">
              Learn German. Build Your Future.
            </p>
            <p className="site-footer__description">
              Online German learning for A1 and A2 students, based in
              Jaffna, Sri Lanka.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <p className="site-footer__label">Explore</p>
            <ul className="site-footer__links">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Legal information">
            <p className="site-footer__label">Legal</p>
            <ul className="site-footer__links">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="site-footer__portal">
            <p className="site-footer__label">Your next step</p>
            <p>Find the right course and start building your future in German.</p>
            <p>
              {contactDetails.owner}
              <br />
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
              <br />
              {contactDetails.phone}
              <br />
              {contactDetails.address}
            </p>
            <Link className="site-footer__portal-link" href="/courses">
              Browse courses <ArrowRight aria-hidden="true" />
            </Link>
            <Link className="site-footer__login-link" href="/#login">
              Student login <span>Coming soon</span>
            </Link>
          </div>
        </div>
        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} DeutschWithMe. All rights reserved.</p>
          <p>Learn German. Build Your Future.</p>
        </div>
      </Container>
    </footer>
  );
}
