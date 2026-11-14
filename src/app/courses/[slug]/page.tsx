import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CourseDetailContent } from "@/components/courses/course-detail-content";
import { CourseRegistrationButton } from "@/components/courses/course-registration-button";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { courses, getCourseBySlug } from "@/data/courses";
import { createPageMetadata } from "@/lib/seo";

type CourseDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return courses.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CourseDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return createPageMetadata({
      title: "Course Not Found | DeutschWithMe",
      description: "The requested DeutschWithMe German course could not be found.",
      path: `/courses/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: `German ${course.level} Course Online | DeutschWithMe`,
    description: course.available
      ? `${course.description} Explore the ${course.level} ${course.title} German course online via Zoom or in person.`
      : `${course.level} ${course.title} German course coming soon from DeutschWithMe.`,
    path: `/courses/${course.slug}`,
    noIndex: !course.available,
  });
}

export default async function CourseDetailsPage({
  params,
}: CourseDetailsPageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  if (!course.available) {
    return (
      <main className="course-detail-page" id="home">
        <section className={`course-detail-hero course-detail-hero--${course.color}`}>
          <Container>
            <ButtonLink href="/courses" size="small" variant="outline">
              <ArrowLeft aria-hidden="true" /> All courses
            </ButtonLink>
            <div className="course-detail-hero__content">
              <p className="eyebrow">Coming soon</p>
              <p className="course-detail-hero__level">{course.level}</p>
              <h1>{course.title}</h1>
              <p>
                This course is not open for registration yet. Check back for
                updates on when it will be available.
              </p>
              <ButtonLink href="/contact">Contact us</ButtonLink>
            </div>
          </Container>
        </section>
      </main>
    );
  }

  return (
    <main className="course-detail-page" id="home">
      <section className={`course-detail-hero course-detail-hero--${course.color}`}>
        <Container>
          <ButtonLink href="/courses" size="small" variant="outline">
            <ArrowLeft aria-hidden="true" /> All courses
          </ButtonLink>
          <div className="course-detail-hero__content">
            <p className="eyebrow">{course.detail}</p>
            <p className="course-detail-hero__level">{course.level}</p>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <CourseRegistrationButton course={course} />
          </div>
        </Container>
      </section>

      <CourseDetailContent course={course} />
    </main>
  );
}
