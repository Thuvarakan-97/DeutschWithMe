import { ArrowLeft, BookOpen } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Course Not Found | DeutschWithMe",
  description: "The requested DeutschWithMe German course could not be found.",
  path: "/courses/not-found",
  noIndex: true,
});

export default function CourseNotFound() {
  return (
    <main className="course-not-found" id="home">
      <Container className="course-not-found__inner">
        <span className="course-not-found__icon">
          <BookOpen aria-hidden="true" />
        </span>
        <p className="eyebrow">Course not found</p>
        <h1>We couldn’t find that course.</h1>
        <p>
          The course link may be incorrect or the course may no longer be
          available. Browse our current German course levels instead.
        </p>
        <ButtonLink href="/courses">
          <ArrowLeft aria-hidden="true" /> View all courses
        </ButtonLink>
      </Container>
    </main>
  );
}
