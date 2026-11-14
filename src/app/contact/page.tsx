import {
  ArrowLeft,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/contact/contact-form";
import { CourseFaq } from "@/components/courses/course-faq";
import { Container } from "@/components/ui/container";
import { ExamPreparation } from "@/components/marketing/exam-preparation";
import { contactDetails, whatsappUrl } from "@/data/contact";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact DeutschWithMe | German A1 & A2",
  description:
    "Contact DeutschWithMe in Manipay, Jaffna about online German A1 and A2 courses for Sri Lankan beginners.",
  path: "/contact",
});

const faqs = [
  {
    question: "How do I choose the right German level?",
    answer:
      "A1 and A2 are currently open for registration. Tell us about your German learning background and we can help you choose a suitable starting point. Higher levels are coming soon.",
  },
  {
    question: "Are classes held online?",
    answer:
      "Choose online classes via Zoom or in-person classes. Contact us to discuss the format and confirm class details.",
  },
  {
    question: "When will I hear back?",
    answer:
      "We aim to reply as soon as possible. Response times may vary, so please include enough detail for us to answer your question.",
  },
];

export default function ContactPage() {
  return (
    <main className="contact-page" id="home">
      <section className="contact-hero">
        <Container>
          <Link className="registration-back-link" href="/">
            <ArrowLeft aria-hidden="true" />
            Back to home
          </Link>
          <div className="contact-hero__content">
            <p className="eyebrow eyebrow--light">
              <span className="eyebrow__line" aria-hidden="true" />
              We’re here to help
            </p>
            <h1>
              Let’s start a
              <span>conversation.</span>
            </h1>
            <p>
              Questions about a course, your German level, or learning online?
              Send us a message and we’ll be happy to help.
            </p>
          </div>
        </Container>
      </section>

      <section className="contact-content">
        <Container className="contact-layout">
          <aside className="contact-aside">
            <p className="eyebrow">Contact DeutschWithMe</p>
            <h2>We’d love to hear from you.</h2>
            <p>
              Tell us what you’re looking for, and we’ll help you find the next
              step in your German learning journey.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-detail__icon">
                  <MapPin aria-hidden="true" />
                </span>
                <div>
                  <h3>Office</h3>
                  <p>{contactDetails.address}</p>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-detail__icon">
                  <Mail aria-hidden="true" />
                </span>
                <div>
                  <h3>Email</h3>
                  <a href={`mailto:${contactDetails.email}`}>
                    {contactDetails.email}
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-detail__icon">
                  <MessageCircle aria-hidden="true" />
                </span>
                <div>
                  <h3>WhatsApp</h3>
                  <a href={whatsappUrl} rel="noreferrer" target="_blank">
                    {contactDetails.phone}
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-detail__icon">
                  <Clock3 aria-hidden="true" />
                </span>
                <div>
                  <h3>Class formats</h3>
                  <p>Online via Zoom or in person.</p>
                </div>
              </div>
            </div>
          </aside>

          <ContactForm />
        </Container>
      </section>

      <Container>
        <ExamPreparation compact />
      </Container>

      <section aria-labelledby="contact-faq-heading" className="contact-faq-section">
        <Container className="contact-faq-layout">
          <div>
            <p className="eyebrow">A few helpful details</p>
            <h2 id="contact-faq-heading">Frequently asked questions</h2>
            <p>
              Need a quick answer? Start here, or send us a message if you need
              more help.
            </p>
          </div>
          <CourseFaq items={faqs} />
        </Container>
      </section>
    </main>
  );
}
