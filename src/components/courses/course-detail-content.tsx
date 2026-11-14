import { BookOpen, Clock3, GraduationCap, Video } from "lucide-react";
import type { Course } from "@/data/courses";
import { CourseFaq } from "@/components/courses/course-faq";
import { CourseRegistrationButton } from "@/components/courses/course-registration-button";
import { ExamPreparation } from "@/components/marketing/exam-preparation";
import { Container } from "@/components/ui/container";

type CourseDetailContentProps = {
  course: Course;
};

function CourseFacts({ course }: CourseDetailContentProps) {
  return (
    <dl className="course-detail-facts">
      <div>
        <dt><Clock3 aria-hidden="true" /> Course duration</dt>
        <dd>
          {course.duration === "To be announced" && (
            <span className="placeholder-label">Placeholder</span>
          )}
          {course.duration}
        </dd>
      </div>
      <div>
        <dt>Course start</dt>
        <dd>
          {course.schedule === "To be announced" && (
            <span className="placeholder-label">Placeholder</span>
          )}
          {course.schedule}
        </dd>
      </div>
      <div>
        <dt>Course fee</dt>
        <dd>
          {course.price === "To be announced" && (
            <span className="placeholder-label">Placeholder</span>
          )}
          {course.price}
        </dd>
      </div>
    </dl>
  );
}

export function CourseDetailContent({ course }: CourseDetailContentProps) {
  return (
    <>
      <section
        aria-labelledby="course-overview-heading"
        className="course-detail-section"
        id="overview"
      >
        <Container className="course-detail-layout">
          <div className="course-detail-copy">
            <p className="eyebrow">Course overview</p>
            <h2 id="course-overview-heading">A clear next step in German.</h2>
            <p className="course-detail-section__description">
              {course.overview}
            </p>
          </div>
          <CourseFacts course={course} />
        </Container>
      </section>

      <section
        aria-labelledby="audience-heading"
        className="course-audience-section"
        id="who-should-join"
      >
        <Container className="course-audience-layout">
          <div className="course-section-icon">
            <GraduationCap aria-hidden="true" />
          </div>
          <div>
            <p className="eyebrow">Is this your next step?</p>
            <h2 id="audience-heading">Who should join this course?</h2>
            <p>{course.suitableFor}</p>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="learning-heading"
        className="course-learning-section"
        id="learning-outcomes"
      >
        <Container className="course-learning-layout">
          <div>
            <p className="eyebrow">Your learning goals</p>
            <h2 id="learning-heading">What you’ll learn</h2>
            <p className="course-detail-section__description">
              These level-based goals outline the kinds of German skills you
              can work toward at {course.level} level.
            </p>
          </div>
          <ul className="course-outcomes">
            {course.learningOutcomes.map((outcome) => (
              <li key={outcome}>
                <span><BookOpen aria-hidden="true" /></span>
                {outcome}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        aria-labelledby="class-format-heading"
        className="course-online-section"
        id="class-formats"
      >
        <Container className="course-online-layout">
          <span className="course-online-icon">
            <Video aria-hidden="true" />
          </span>
          <div>
            <p className="eyebrow">Choose how you learn</p>
            <h2 id="class-format-heading">Online or in-person classes</h2>
            <p>
              Join online classes via Zoom or attend in-person classes.
              Contact us to discuss the format that suits you and confirm
              class details.
            </p>
          </div>
          <div className="course-online-format">
            <Video aria-hidden="true" />
            <span>Class format</span>
            <strong>{course.classFormat}</strong>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="faq-heading"
        className="course-faq-section"
        id="faqs"
      >
        <Container className="course-faq-layout">
          <div>
            <p className="eyebrow">A few helpful details</p>
            <h2 id="faq-heading">Frequently asked questions</h2>
            <p>Contact us to confirm weekly class days and times.</p>
          </div>
          <CourseFaq items={course.faqs} />
        </Container>
      </section>

      <Container>
        <ExamPreparation compact />
      </Container>

      <section aria-labelledby="course-cta-heading" className="course-cta">
        <Container className="course-cta__inner">
          <div>
            <p className="eyebrow eyebrow--light">
              Your next step starts here
            </p>
            <h2 id="course-cta-heading">
              Ready to explore {course.level}?
            </h2>
            <p>
              Register your interest in the {course.level} {course.title} course.
            </p>
          </div>
          <CourseRegistrationButton course={course} />
        </Container>
      </section>
    </>
  );
}
