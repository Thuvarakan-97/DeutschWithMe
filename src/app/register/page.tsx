import { ArrowLeft, BookOpen, Globe2, Video } from "lucide-react";
import Link from "next/link";
import { RegistrationForm } from "@/components/registration/registration-form";
import { Container } from "@/components/ui/container";
import { ExamPreparation } from "@/components/marketing/exam-preparation";
import { getCourseBySlug } from "@/data/courses";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Register for German Classes | DeutschWithMe",
  description:
    "Register your interest in DeutschWithMe German classes, available online via Zoom or in person.",
  path: "/register",
  noIndex: true,
});

type RegistrationPageProps = {
  searchParams: Promise<{ course?: string | string[] }>;
};

export default async function RegistrationPage({
  searchParams,
}: RegistrationPageProps) {
  const params = await searchParams;
  const courseParam = Array.isArray(params.course)
    ? params.course[0]
    : params.course;
  const initialCourseSlug =
    courseParam && getCourseBySlug(courseParam)?.available ? courseParam : "";

  return (
    <main className="registration-page" id="home">
      <section className="registration-hero">
        <Container>
          <Link className="registration-back-link" href="/courses">
            <ArrowLeft aria-hidden="true" />
            Explore courses
          </Link>
          <div className="registration-hero__content">
            <p className="eyebrow eyebrow--light">
              <span className="eyebrow__line" aria-hidden="true" />
              Your German journey starts here
            </p>
            <h1>
              One small step.
              <span>New possibilities.</span>
            </h1>
            <p>
              Tell us about yourself and your goals. We’ll use your details to
              follow up about the course you’re interested in.
            </p>
          </div>
          <div className="registration-hero__details">
            <span><BookOpen aria-hidden="true" /> A1 and A2 courses</span>
            <span><Video aria-hidden="true" /> Online or in-person classes</span>
            <span><Globe2 aria-hidden="true" /> Learn from anywhere</span>
          </div>
        </Container>
      </section>

      <Container>
        <ExamPreparation compact />
      </Container>

      <section className="registration-content">
        <Container className="registration-layout">
          <aside className="registration-aside">
            <p className="eyebrow">Learn German. Build Your Future.</p>
            <h2>Let’s find the right next step for you.</h2>
            <p>
              Share a few details so we can understand your current level,
              preferred schedule, and what you hope to achieve.
            </p>
            <div className="registration-aside__note">
              <span><Globe2 aria-hidden="true" /></span>
              <p>
                Choose online classes via Zoom or in-person classes. A1 takes
                2 months and A2 takes 3 months, with an
                immediate start. Contact us for weekly class times.
              </p>
            </div>
            <Link href="/courses">Review all course levels <ArrowLeft aria-hidden="true" /></Link>
          </aside>

          <RegistrationForm initialCourseSlug={initialCourseSlug} />
        </Container>
      </section>
    </main>
  );
}
