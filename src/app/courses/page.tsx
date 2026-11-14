import { ArrowRight, GraduationCap } from "lucide-react";
import { CourseCard } from "@/components/courses/course-card";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ExamPreparation } from "@/components/marketing/exam-preparation";
import { courses } from "@/data/courses";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "German A1 & A2 Courses Online | DeutschWithMe",
  description:
    "Explore German A1 and A2 classes online or in person. B1, B2, C1, and C2 courses are coming soon.",
  path: "/courses",
});

export default function CoursesPage() {
  return (
    <main id="home">
      <section className="courses-hero">
        <Container>
          <p className="eyebrow eyebrow--light">
            <span className="eyebrow__line" aria-hidden="true" />
            Find your level
          </p>
          <h1>
            German courses
            <span>for what comes next.</span>
          </h1>
          <p className="courses-hero__description">
            Start with A1 or continue with A2. B1, B2, C1, and C2 courses are
            coming soon.
          </p>
          <div className="courses-hero__note">
            <GraduationCap aria-hidden="true" />
            <span>A1 and A2 are open. More levels are coming soon.</span>
          </div>
        </Container>
      </section>

      <section aria-labelledby="course-list-heading" className="catalog-section">
        <Container>
          <div className="catalog-heading">
            <div>
              <p className="eyebrow">Explore the course levels</p>
              <h2 id="course-list-heading">
                Find your starting point.
              </h2>
            </div>
            <p>
              A1 and A2 are available online via Zoom or in person.
              Both courses have an immediate start. Higher levels are coming
              soon.
            </p>
          </div>

          <div className="catalog-grid">
            {courses.map((course) => (
              <CourseCard course={course} key={course.slug} />
            ))}
          </div>

          <ExamPreparation />

          <aside className="catalog-help">
            <span className="catalog-help__icon">
              <GraduationCap aria-hidden="true" />
            </span>
            <div>
              <h2>Not sure which level is right for you?</h2>
              <p>
                Compare course details or get in touch when you’re ready to
                choose your next step.
              </p>
            </div>
            <ButtonLink href="/contact" variant="outline">
              Get in touch <ArrowRight aria-hidden="true" />
            </ButtonLink>
          </aside>
        </Container>
      </section>
    </main>
  );
}
