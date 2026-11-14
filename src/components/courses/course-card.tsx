import { ArrowRight, ArrowUpRight, Clock3, Video } from "lucide-react";
import Link from "next/link";
import { CourseRegistrationButton } from "@/components/courses/course-registration-button";
import type { Course } from "@/data/courses";

type CourseCardProps = {
  course: Course;
};

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article
      className={`catalog-course-card catalog-course-card--${course.color}${course.available ? "" : " catalog-course-card--coming-soon"}`}
      id={`course-${course.slug}`}
    >
      <div className="catalog-course-card__header">
        <div>
          <p className="catalog-course-card__eyebrow">
            {course.available ? course.detail : "Coming soon"}
          </p>
          <span className="catalog-course-card__level">{course.level}</span>
          <h2>{course.title}</h2>
        </div>
        {course.available && (
          <span aria-hidden="true" className="catalog-course-card__symbol">
            <ArrowUpRight />
          </span>
        )}
      </div>

      <p className="catalog-course-card__description">{course.description}</p>

      {course.available ? (
        <>
          <dl className="catalog-course-card__facts">
            <div>
              <dt><Clock3 aria-hidden="true" /> Duration</dt>
              <dd>
                {course.duration === "To be announced" && (
                  <span className="placeholder-label">Placeholder</span>
                )}
                {course.duration}
              </dd>
            </div>
            <div>
              <dt><Video aria-hidden="true" /> Class format</dt>
              <dd>{course.classFormat}</dd>
            </div>
            <div>
              <dt>Start</dt>
              <dd>
                {course.schedule === "To be announced" && (
                  <span className="placeholder-label">Placeholder</span>
                )}
                {course.schedule}
              </dd>
            </div>
            <div>
              <dt>Price</dt>
              <dd>
                {course.price === "To be announced" && (
                  <span className="placeholder-label">Placeholder</span>
                )}
                {course.price}
              </dd>
            </div>
          </dl>

          <div className="catalog-course-card__actions">
            <Link
              className="button button--outline button--small"
              href={`/courses/${course.slug}`}
            >
              View Details <ArrowRight aria-hidden="true" />
            </Link>
            <CourseRegistrationButton course={course} size="small" />
          </div>
        </>
      ) : (
        <p className="catalog-course-card__coming-soon">
          We’re planning this level. Check back for updates.
        </p>
      )}
    </article>
  );
}

export function CourseCardLink({ course }: CourseCardProps) {
  if (!course.available) {
    return (
      <article
        aria-label={`${course.level} ${course.title} course, coming soon`}
        className={`course-card course-card--${course.color} course-card--coming-soon`}
        id={`course-${course.slug}`}
      >
        <div className="course-card__top">
          <span className="course-card__level">{course.level}</span>
          <span className="course-card__status">Coming soon</span>
        </div>
        <div>
          <p className="course-card__detail">Coming soon</p>
          <h3>{course.title}</h3>
          <p className="course-card__description">{course.description}</p>
        </div>
        <span className="course-card__link course-card__link--disabled">
          Not open for registration
        </span>
      </article>
    );
  }

  return (
    <Link
      aria-label={`Learn more about ${course.level} ${course.title}`}
      className={`course-card course-card--${course.color}`}
      href={`/courses/${course.slug}`}
    >
      <div className="course-card__top">
        <span className="course-card__level">{course.level}</span>
        <ArrowUpRight aria-hidden="true" />
      </div>
      <div>
        <p className="course-card__detail">{course.detail}</p>
        <h3>{course.title}</h3>
        <p className="course-card__description">{course.description}</p>
      </div>
      <span className="course-card__link">
        Explore level <ArrowRight aria-hidden="true" />
      </span>
    </Link>
  );
}
