import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

export type LegalSection = {
  title: string;
  content: ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  introduction: string;
  sections: LegalSection[];
};

export function LegalPage({
  eyebrow,
  title,
  introduction,
  sections,
}: LegalPageProps) {
  return (
    <main className="legal-page" id="home">
      <section className="legal-hero">
        <Container>
          <p className="eyebrow eyebrow--light">
            <span className="eyebrow__line" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1>{title}</h1>
          <p>{introduction}</p>
          <p className="legal-hero__notice">
            Draft legal information — all marked placeholders and this document
            require review and completion before publication.
          </p>
        </Container>
      </section>
      <section aria-label={title} className="legal-content">
        <Container className="legal-content__container">
          <div className="legal-review-alert" role="note">
            This page is a general draft, not legal advice and not a statement
            that DeutschWithMe complies with any specific legal requirement.
            Have the final text reviewed by a qualified professional.
          </div>
          <div className="legal-sections">
            {sections.map(({ title: sectionTitle, content }, index) => (
              <section
                aria-labelledby={`legal-section-${index}`}
                className="legal-section"
                key={sectionTitle}
              >
                <h2 id={`legal-section-${index}`}>{sectionTitle}</h2>
                <div className="legal-section__body">{content}</div>
              </section>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

export function LegalPlaceholder({ children }: { children: ReactNode }) {
  return <span className="legal-placeholder">{children}</span>;
}
