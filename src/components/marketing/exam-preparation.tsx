import { BookOpen, Headphones, MessageCircle, PenLine } from "lucide-react";

const examProviders = [
  { name: "Goethe-Zertifikat", style: "goethe" },
  { name: "ÖSD", style: "osd" },
  { name: "telc", style: "telc" },
] as const;

const examSkills = [
  {
    name: "Hören",
    translation: "Listening",
    description: "Practise understanding spoken German and common exam tasks.",
    icon: Headphones,
  },
  {
    name: "Lesen",
    translation: "Reading",
    description: "Build strategies for reading texts and finding key information.",
    icon: BookOpen,
  },
  {
    name: "Schreiben",
    translation: "Writing",
    description: "Develop clear, well-structured written responses.",
    icon: PenLine,
  },
  {
    name: "Sprechen",
    translation: "Speaking",
    description: "Practise expressing yourself in typical speaking tasks.",
    icon: MessageCircle,
  },
] as const;

type ExamPreparationProps = {
  compact?: boolean;
};

export function ExamPreparation({ compact = false }: ExamPreparationProps) {
  return (
    <section
      aria-labelledby="exam-preparation-heading"
      className={`exam-preparation${compact ? " exam-preparation--compact" : ""}`}
    >
      <div className="exam-preparation__copy">
        <p className="eyebrow">German exam preparation</p>
        <h2 id="exam-preparation-heading">
          Prepare for Goethe, ÖSD, and telc exams.
        </h2>
        {!compact && (
          <p>
            Work through the exam section by section—Hören, Lesen, Schreiben,
            and Sprechen—with focused practice to help you prepare confidently
            for Goethe-Zertifikat, ÖSD, and telc examinations.
          </p>
        )}
      </div>
      <div aria-label="Exam providers" className="exam-preparation__providers">
        {examProviders.map(({ name, style }) => (
          <span
            className={`exam-provider exam-provider--${style}`}
            key={style}
          >
            {name}
          </span>
        ))}
      </div>
      <div className="exam-preparation__skills">
        {examSkills.map(({ name, translation, description, icon: Icon }) => (
          <article className="exam-skill" key={name}>
            <span className="exam-skill__icon">
              <Icon aria-hidden="true" />
            </span>
            <div>
              <h3>
                {name} <span>{translation}</span>
              </h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="exam-preparation__approach">
        Our section-by-section approach helps you understand each part of the
        exam, practise relevant tasks, and prepare with greater confidence.
      </p>
      <p className="exam-preparation__disclaimer">
        Independent exam preparation. Exam-provider names are shown for
        identification; no affiliation or endorsement is implied.
      </p>
    </section>
  );
}
