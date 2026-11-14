import { ChevronDown } from "lucide-react";
import type { CourseFaq as CourseFaqItem } from "@/data/courses";

type CourseFaqProps = {
  items: CourseFaqItem[];
};

export function CourseFaq({ items }: CourseFaqProps) {
  return (
    <div className="course-faq">
      {items.map(({ question, answer }) => (
        <details className="course-faq__item" key={question}>
          <summary>
            <span>{question}</span>
            <ChevronDown aria-hidden="true" />
          </summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}
