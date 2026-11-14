import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Page Not Found | DeutschWithMe",
  description: "The requested DeutschWithMe page could not be found.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <main className="course-not-found" id="home">
      <Container className="course-not-found__inner">
        <p className="eyebrow">Page not found</p>
        <h1>We couldn’t find that page.</h1>
        <p>
          The link may be incorrect or the page may have moved. Explore our
          German course levels to find your next step.
        </p>
        <ButtonLink href="/courses">
          <ArrowLeft aria-hidden="true" /> View all courses
        </ButtonLink>
      </Container>
    </main>
  );
}
