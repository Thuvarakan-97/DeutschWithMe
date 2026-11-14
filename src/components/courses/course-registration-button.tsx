import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import type { Course } from "@/data/courses";

type CourseRegistrationButtonProps = {
  course: Pick<Course, "slug">;
  size?: "small" | "medium";
  className?: string;
};

export function CourseRegistrationButton({
  course,
  size,
  className,
}: CourseRegistrationButtonProps) {
  return (
    <ButtonLink
      className={className}
      href={`/register?course=${encodeURIComponent(course.slug)}`}
      size={size}
    >
      Register Now <ArrowUpRight aria-hidden="true" />
    </ButtonLink>
  );
}
