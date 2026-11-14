import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Check,
  Clock3,
  Globe2,
  GraduationCap,
  Headphones,
  Laptop2,
  Landmark,
  MessageCircle,
  Play,
  Sparkles,
  Star,
  UsersRound,
  Video,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { CourseCardLink } from "@/components/courses/course-card";
import { ExamPreparation } from "@/components/marketing/exam-preparation";
import { Container } from "@/components/ui/container";
import { courses } from "@/data/courses";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Learn German Online from Sri Lanka | DeutschWithMe",
  description:
    "Explore online German A1 and A2 courses for beginners from DeutschWithMe in Manipay, Jaffna, Sri Lanka.",
  path: "/",
});

const benefits = [
  {
    icon: Award,
    title: "Beginner-friendly courses",
    description:
      "Start with an A1 foundation or build on what you know with A2.",
  },
  {
    icon: Clock3,
    title: "Online and in-person classes",
    description:
      "Choose online Zoom lessons or attend in-person classes.",
  },
  {
    icon: MessageCircle,
    title: "Interactive by design",
    description:
      "Take part, ask questions, and practise real conversations from your very first class.",
  },
  {
    icon: Sparkles,
    title: "A welcoming first step",
    description:
      "Start from the beginning with a friendly structure built to grow your confidence.",
  },
];

const steps = [
  {
    icon: BookOpen,
    number: "01",
    title: "Choose your course",
    description:
      "Find the level that feels right for you, from your first words to fluent conversation.",
  },
  {
    icon: Check,
    number: "02",
    title: "Register online",
    description:
      "Tell us a little about your goals and we’ll help you find your next step.",
  },
  {
    icon: Video,
    number: "03",
    title: "Choose your class format",
    description:
      "Join your lessons online via Zoom or attend in-person classes.",
  },
];

const testimonials = [
  {
    quote:
      "The lessons helped me feel more at home in everyday conversations. I looked forward to joining each week.",
    name: "abi",
    detail: "A1 learner ",
    initials: "A",
    color: "mint",
  },
  {
    quote:
      "I can finally see how German connects to my goals at work. The small-group practice made a real difference.",
    name: "Pirathee",
    detail: "A1 learner ",
    initials: "P",
    color: "orange",
  },
  {
    quote:
      "A warm and structured place to learn. I feel more confident speaking German with every class.",
    name: "amal",
    detail: "A1 learner ",
    initials: "A",
    color: "blue",
  },
];

export default function Home() {
  return (
    <main id="home">
      <section className="hero">
        <Container className="hero__layout">
          <div className="hero__content">
            <p className="eyebrow eyebrow--light">
              <span className="eyebrow__line" aria-hidden="true" />
              Sri Lanka-based. German learning for your next step.
            </p>
            <h1>
              Learn German.
              <span>Build your future.</span>
            </h1>
            <p className="hero__description">
              Prepare for Goethe-Zertifikat, ÖSD, and telc exams with focused
              German lessons available online or in person.
            </p>
            <div className="hero__actions">
              <ButtonLink href="#courses">
                Explore courses
                <ArrowRight aria-hidden="true" />
              </ButtonLink>
              <ButtonLink className="button--hero-outline" href="/register" variant="outline">
                Register now
                <ArrowUpRight aria-hidden="true" />
              </ButtonLink>
            </div>
            <div className="hero__trust">
              <span className="hero__trust-icon">
                <Globe2 aria-hidden="true" />
              </span>
              <p>
                Online classes <strong>that fit your life</strong>
              </p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual__image-frame">
              <Image
                alt="Berlin-inspired illustration of the Brandenburg Gate with German greetings: Hallo, Guten Tag, Willkommen, and Danke"
                className="hero-visual__image"
                height={1100}
                priority
                sizes="(max-width: 800px) 90vw, (max-width: 1200px) 48vw, 680px"
                src="/brandenburg-gate-learning.svg"
                width={900}
              />
              <div className="hero-visual__image-shade" />
              <div className="hero-visual__caption">
                <span className="hero-visual__play">
                  <Play aria-hidden="true" fill="currentColor" />
                </span>
                <span>
                  <strong>Learn together</strong>
                  <small>Your next chapter starts here</small>
                </span>
              </div>
            </div>
            <div className="hero-visual__badge">
              <span className="hero-visual__badge-icon">
                <Landmark aria-hidden="true" />
              </span>
              <span>
                <strong>German language &amp; culture</strong>
                <small>Inspired by Berlin</small>
              </span>
            </div>
            <div className="hero-visual__note">
              <span className="hero-visual__note-icon">
                <span>Guten</span>
                <span>Tag!</span>
              </span>
              <span className="hero-visual__note-copy">
                <strong>Start speaking</strong>
                <small>Say it in German</small>
              </span>
            </div>
            <span className="hero-visual__spark hero-visual__spark--one" aria-hidden="true">✳</span>
            <span className="hero-visual__spark hero-visual__spark--two" aria-hidden="true">✳</span>
          </div>
        </Container>
        <a aria-label="Scroll to why learn with us" className="hero__scroll" href="#why-us">
          <ArrowDown aria-hidden="true" />
        </a>
      </section>

      <section aria-labelledby="why-heading" className="section why-section" id="why-us">
        <Container>
          <div className="section-heading">
            <p className="eyebrow">Why DeutschWithMe</p>
            <h2 id="why-heading">
              Your goals are personal.
              <span> Your learning should be, too.</span>
            </h2>
            <p>
              Start at A1 or build on what you know with A2. Explore online
              German courses from DeutschWithMe in Manipay, Jaffna.
            </p>
          </div>
          <div className="feature-grid">
            {benefits.map(({ icon: Icon, title, description }, index) => (
              <article className="feature-card" key={title}>
                <div className="feature-card__top">
                  <span className={`feature-card__icon feature-card__icon--${index + 1}`}>
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="feature-card__number">0{index + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="courses-heading" className="section courses-section" id="courses">
        <Container>
          <div className="section-heading section-heading--row">
            <div>
              <p className="eyebrow">Find your starting point</p>
              <h2 id="courses-heading">
                Start with
                <span> A1 or A2.</span>
              </h2>
            </div>
            <p>
              A1 and A2 are available now. B1, B2, C1, and C2 are coming soon.
            </p>
          </div>
          <div className="course-grid">
            {courses.map((course) => (
              <CourseCardLink course={course} key={course.slug} />
            ))}
          </div>
          <p className="courses-note">
            <GraduationCap aria-hidden="true" />
            A1 course: LKR 50,000 · A2 course: LKR 60,000
          </p>
        </Container>
      </section>

      <Container>
        <ExamPreparation />
      </Container>

      <section aria-labelledby="steps-heading" className="section steps-section" id="how-it-works">
        <Container>
          <div className="section-heading">
            <p className="eyebrow">Simple from day one</p>
            <h2 id="steps-heading">
              Three steps.
              <span> A whole new direction.</span>
            </h2>
          </div>
          <div className="steps-grid">
            {steps.map(({ icon: Icon, number, title, description }, index) => (
              <article className="step-card" key={number}>
                <div className="step-card__top">
                  <span className="step-card__icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="step-card__number">{number}</span>
                </div>
                {index < steps.length - 1 && (
                  <span className="step-card__connector" aria-hidden="true" />
                )}
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="steps-footnote">
            <Laptop2 aria-hidden="true" />
            <span>Join online via Zoom or attend in person.</span>
            <span className="steps-footnote__divider" aria-hidden="true" />
            <Headphones aria-hidden="true" />
            <span>Bring your curiosity. We’ll bring the lesson.</span>
          </div>
        </Container>
      </section>

      <section aria-labelledby="about-heading" className="section about-section" id="about">
        <Container className="about-layout">
          <div className="about-visual">
            <Image
              alt="A welcoming group discussion in a bright learning space"
              className="about-visual__image"
              height={900}
              loading="lazy"
              sizes="(max-width: 800px) 90vw, (max-width: 1200px) 45vw, 600px"
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85"
              width={1000}
            />
            <div className="about-visual__stamp">
              <span>Learn</span>
              <span>with purpose</span>
              <ArrowDown aria-hidden="true" />
            </div>
            <div className="about-visual__caption">
              <UsersRound aria-hidden="true" />
              <span>A community learning together</span>
            </div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">A little about us</p>
            <h2 id="about-heading">
              German is more than a language.
              <span> It’s a way forward.</span>
            </h2>
            <p>
              DeutschWithMe is here for the people building a life in a new
              place, starting a new chapter, or reaching for their next
              opportunity. We make learning German feel clear, human, and
              connected to real life.
            </p>
            <p>
              DeutschWithMe focuses on clear foundations for beginner and
              elementary learners. Course availability, instructor information,
              schedules, and fees are confirmed directly rather than assumed.
            </p>
            <ul className="about-points">
              <li><Check aria-hidden="true" /> Practical language for everyday life</li>
              <li><Check aria-hidden="true" /> Online or in-person classes</li>
              <li><Check aria-hidden="true" /> A learning path built around your goals</li>
            </ul>
            <ButtonLink href="#courses" variant="outline">
              Find your course <ArrowRight aria-hidden="true" />
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section aria-labelledby="testimonials-heading" className="section testimonials-section" id="stories">
        <Container>
          <div className="section-heading">
            <p className="eyebrow">A little encouragement</p>
            <h2 id="testimonials-heading">
              Every new word
              <span> moves you forward.</span>
            </h2>
            <p>
              Here’s what a learner’s journey might sound like. These sample
              quotes are placeholders, not real student testimonials.
            </p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map(({ quote, name, detail, initials, color }) => (
              <figure className="testimonial-card" key={detail}>
                <div aria-label="5 out of 5 stars" className="testimonial-card__stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star aria-hidden="true" fill="currentColor" key={index} />
                  ))}
                </div>
                <blockquote>“{quote}”</blockquote>
                <figcaption>
                  <span className={`testimonial-card__avatar testimonial-card__avatar--${color}`}>
                    {initials}
                  </span>
                  <span>
                    <strong>{name}</strong>
                    <small>{detail}</small>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          {/* <p className="testimonial-disclaimer">
            <Sparkles aria-hidden="true" />
            Sample content for layout preview only. Replace with real,
            permission-approved testimonials before publishing.
          </p> */}
        </Container>
      </section>

      <section aria-labelledby="register-heading" className="cta-section" id="register">
        <Container className="cta-layout">
          <div className="cta-orbit cta-orbit--one" aria-hidden="true" />
          <div className="cta-orbit cta-orbit--two" aria-hidden="true" />
          <div className="cta-copy">
            <p className="eyebrow eyebrow--light">
              Your next chapter can start today
            </p>
            <h2 id="register-heading">
              Ready to make
              <span> German yours?</span>
            </h2>
            <p>
              Find the level that fits, meet your instructor, and take your
              first step toward what’s next.
            </p>
          </div>
          <div className="cta-actions">
            <ButtonLink className="button--cta" href="#courses">
              Explore courses <ArrowRight aria-hidden="true" />
            </ButtonLink>
            <a className="cta-actions__contact" href="#courses">
              Questions first? Explore the levels <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </Container>
      </section>

      <section aria-labelledby="login-heading" className="login-note" id="login">
        <Container className="login-note__inner">
          <span className="login-note__icon"><Globe2 aria-hidden="true" /></span>
          <div>
            <h2 id="login-heading">Already learning with us?</h2>
            <p>Student login is not available yet. Check back soon for portal updates.</p>
          </div>
          <span className="login-note__status">Coming soon</span>
        </Container>
      </section>

      <section aria-labelledby="contact-heading" className="contact-section" id="contact">
        <Container className="contact-section__inner">
          <div>
            <p className="eyebrow">We’re here to help</p>
            <h2 id="contact-heading">Need a little help choosing?</h2>
          </div>
          <p>
            Compare the available A1 and A2 courses and find the right
            starting point for your experience and goals.
          </p>
          <ButtonLink href="#courses" variant="outline">
            Browse courses <ArrowRight aria-hidden="true" />
          </ButtonLink>
        </Container>
      </section>
    </main>
  );
}
