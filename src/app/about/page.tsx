import {
  ArrowRight,
  BookOpenCheck,
  Compass,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Target,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ExamPreparation } from "@/components/marketing/exam-preparation";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About DeutschWithMe | German A1 & A2 for Sri Lankan Beginners",
  description:
    "DeutschWithMe is based in Jaffna, Sri Lanka, and focuses on helping beginners start German with A1 and A2 online courses.",
  path: "/about",
});

const principles = [
  {
    icon: HeartHandshake,
    title: "A welcoming first step",
    description:
      "Start with the basics in A1, with a clear path for learners who are ready to move on to A2.",
  },
  {
    icon: BookOpenCheck,
    title: "German for everyday situations",
    description:
      "Build practical vocabulary and language foundations for common everyday conversations.",
  },
  {
    icon: Compass,
    title: "A clear A1-to-A2 path",
    description:
      "Understand the difference between beginner A1 and elementary A2 and choose a suitable starting point.",
  },
  {
    icon: GraduationCap,
    title: "Flexible class formats",
    description:
      "Learn online via Zoom or attend in-person German classes.",
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Start with your goals",
    description:
      "Choose A1 if you are starting German, or review A2 if you already know basic words and phrases.",
  },
  {
    number: "02",
    title: "Build understanding",
    description:
      "Develop everyday vocabulary, simple sentence patterns, and the foundations described for your course level.",
  },
  {
    number: "03",
    title: "Practise with purpose",
    description:
      "Use the course information to identify the language skills and common situations you want to practise.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page" id="home">
      <section className="about-hero">
        <Container>
          <p className="eyebrow eyebrow--light">
            <span className="eyebrow__line" aria-hidden="true" />
            Get to know DeutschWithMe
          </p>
          <h1>
            Start learning German.
            <span>Begin with A1 or A2.</span>
          </h1>
          <p className="about-hero__description">
            DeutschWithMe is based in Jaffna, Sri Lanka, and is focused
            mainly on learners beginning German at A1 or building on the basics
            at A2. Choose online classes via Zoom or in-person classes.
          </p>
        </Container>
      </section>

      <section aria-labelledby="about-story-heading" className="about-story">
        <Container className="about-story__layout">
          <div className="about-story__marker">
            <span><Lightbulb aria-hidden="true" /></span>
            <p>Our story</p>
          </div>
          <div className="about-story__copy">
            <p className="eyebrow">The beginning</p>
            <h2 id="about-story-heading">
              A Sri Lankan starting point for a new language.
            </h2>
            <p>
              DeutschWithMe is , Jaffna. The website is designed
              primarily for Sri Lankan learners who want to begin German with
              A1 or continue from the basics with A2. Rather than claim an
              unprovided company history, this story starts with the place and
              learner focus that define the project today.
            </p>
          </div>
        </Container>
      </section>

      <section aria-label="Our mission and vision" className="about-purpose">
        <Container className="about-purpose__grid">
          <article className="about-purpose-card">
            <span className="about-purpose-card__icon">
              <Target aria-hidden="true" />
            </span>
            <p className="eyebrow">Our mission</p>
            <h2>Help Sri Lankan beginners take their first steps in German.</h2>
            <p>
              DeutschWithMe aims to make the A1 and A2 starting levels easier
              to approach through clear course information and online learning.
            </p>
          </article>
          <article className="about-purpose-card about-purpose-card--vision">
            <span className="about-purpose-card__icon">
              <Compass aria-hidden="true" />
            </span>
            <p className="eyebrow">Our vision</p>
            <h2>A future where more learners can keep progressing in German.</h2>
            <p>
              The vision is to support learners as they move from their first
              German words toward the next level and the goals they set for
              themselves.
            </p>
          </article>
        </Container>
      </section>

      <section aria-labelledby="about-why-heading" className="about-why">
        <Container>
          <div className="about-page-heading">
            <p className="eyebrow">What matters to us</p>
            <h2 id="about-why-heading">Why DeutschWithMe?</h2>
            <p>
              DeutschWithMe is based in Jaffna and focuses especially on
              beginner and elementary German learners. The project is designed to make the first steps in German clearer and more approachable, with a focus on A1 and A2 learners and the practical language skills they need to start using German in everyday situations.
            </p>
          </div>
          <div className="about-principles">
            {principles.map(({ icon: Icon, title, description }) => (
              <article className="about-principle" key={title}>
                <span className="about-principle__icon">
                  <Icon aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="about-principle__tag">A1 &amp; A2 focus</span>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="about-approach-heading" className="about-approach">
        <Container className="about-approach__layout">
          <div className="about-approach__intro">
            <p className="eyebrow">How learning can work</p>
            <h2 id="about-approach-heading">Begin with the basics. Build from there.</h2>
            <p>
              A1 is intended for beginners; A2 builds on basic German.
              Instructor biographies and qualifications are not published
              because verified details have not been provided.
            </p>
          </div>
          <div className="about-approach__steps">
            {approachSteps.map(({ number, title, description }) => (
              <article className="about-approach-step" key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="about-philosophy-heading" className="about-philosophy">
        <Container className="about-philosophy__inner">
          <span className="about-philosophy__icon">
            <BookOpenCheck aria-hidden="true" />
          </span>
          <p className="eyebrow eyebrow--light">Our learning philosophy</p>
          <h2 id="about-philosophy-heading">
            Start where you are. Learn one step at a time.
          </h2>
          <p>
            A beginner does not need to know everything before starting.
            DeutschWithMe’s learning philosophy is to make the first steps
            clearer, connect them to practical language goals, and let learners
            progress at a pace that suits them.
          </p>
        </Container>
      </section>

      <Container>
        <ExamPreparation />
      </Container>

      <section aria-labelledby="about-cta-heading" className="about-cta">
        <Container className="about-cta__inner">
          <div>
            <p className="eyebrow">Your next step</p>
            <h2 id="about-cta-heading">Ready to find your German course?</h2>
            <p>
              Explore German A1 and A2, the levels designed for starting out
              and building your foundation.
            </p>
          </div>
          <ButtonLink href="/courses">
            Explore courses <ArrowRight aria-hidden="true" />
          </ButtonLink>
        </Container>
      </section>
    </main>
  );
}
