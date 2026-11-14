import type { Metadata } from "next";
import { LegalPage, LegalPlaceholder } from "@/components/legal/legal-page";
import { contactDetails } from "@/data/contact";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms and Conditions | DeutschWithMe",
  description:
    "Draft course terms for DeutschWithMe, based in Jaffna, Sri Lanka. Course fees, enrollment terms, and legal details require confirmation.",
  path: "/terms-and-conditions",
  noIndex: true,
});

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      eyebrow="Terms of service"
      title="Terms and Conditions"
      introduction="DeutschWithMe is based in  Jaffna, Sri Lanka. This draft is not a complete contract: the legal operator, course offer, payment terms, enrollment, cancellation, and governing-law terms must be confirmed and reviewed before publication or enrollment."
      sections={[
        {
          title: "1. Provider and scope",
          content: (
            <p>
              The supplied owner/contact person is {contactDetails.owner},
              reachable at{" "}
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>{" "}
              or {contactDetails.phone}, at {contactDetails.address}. Identify
              the actual contracting party, legal form, complete service
              address, and services covered:
              {" "}
              <LegalPlaceholder>Verified provider identity, address, and contact — placeholders</LegalPlaceholder>.
            </p>
          ),
        },
        {
          title: "2. Course information and availability",
          content: (
            <>
              <p>
                The website lists German course levels A1–C2, with a primary
                  focus on A1 and A2 learners; only A1 and A2 are currently open
                  for registration.                   A1 is listed as a 2-month course and A2 as a 3-month course,
                  both with an immediate start. Classes may be online via Zoom
                  or in person. Weekly class days and times must be
                  confirmed in a specific offer.
              </p>
              <p>
                State how course descriptions, class size, learning materials,
                technical requirements, and any changes will be confirmed to
                students before a contract is formed:
                {" "}
                <LegalPlaceholder>Confirmed course-delivery terms — placeholder</LegalPlaceholder>.
              </p>
            </>
          ),
        },
        {
          title: "3. Registration and contract formation",
          content: (
            <p>
              The website registration form collects an expression of interest
                and contact details. Explain whether and when a binding contract
                is formed, how course availability is confirmed, and what
                acceptance or confirmation will be sent:
              {" "}
              <LegalPlaceholder>Registration and contract-formation process — placeholder</LegalPlaceholder>.
            </p>
          ),
        },
        {
          title: "4. Prices, payment, and taxes",
          content: (
            <p>
              The website currently lists the A1 course fee as LKR 50,000 and
              the A2 course fee as LKR 60,000. Confirm the applicable total
              price, any taxes, payment schedule, accepted payment methods,
              and invoicing arrangements in the actual course offer:
              {" "}
              <LegalPlaceholder>Verified pricing and payment terms — placeholders</LegalPlaceholder>.
            </p>
          ),
        },
        {
          title: "5. Cancellations, withdrawal, and rescheduling",
          content: (
            <p>
              Set out the applicable cancellation, withdrawal, refund,
              rescheduling, missed-class, and course-cancellation rules.
              Consumer distance-contract information and any statutory
              withdrawal rights must be assessed for the actual offer and
              presented as required:
              {" "}
              <LegalPlaceholder>Legally reviewed cancellation and withdrawal policy — placeholder</LegalPlaceholder>.
            </p>
          ),
        },
        {
          title: "6. Online classes and learner responsibilities",
          content: (
            <p>
              Classes may be delivered online via Zoom or in person. Confirm
              the selected format, Zoom access
              arrangements where relevant, technical requirements, attendance
              expectations, and any rules for recording before publishing this
              section:
              {" "}
              <LegalPlaceholder>Confirmed online class terms — placeholder</LegalPlaceholder>.
            </p>
          ),
        },
        {
          title: "7. Intellectual property and permitted use",
          content: (
            <p>
              Define who owns course materials and the permitted personal use
              of those materials. Add any restrictions only after they have
              been confirmed and reviewed:
              {" "}
              <LegalPlaceholder>Reviewed materials and usage terms — placeholder</LegalPlaceholder>.
            </p>
          ),
        },
        {
          title: "8. Liability and complaints",
          content: (
            <p>
              Include accurate, legally reviewed information about liability,
              service issues, complaints, and available remedies. Do not use
              this draft to waive or limit rights without qualified legal
              review:
              {" "}
              <LegalPlaceholder>Reviewed liability and complaint procedure — placeholder</LegalPlaceholder>.
            </p>
          ),
        },
        {
          title: "9. Applicable law and dispute resolution",
          content: (
            <p>
              Any governing-law or jurisdiction clause must be checked for
              enforceability, including consumer protections that may apply.
              Identify any applicable dispute resolution information only when
              verified:
              {" "}
              <LegalPlaceholder>Legally reviewed applicable-law and dispute terms — placeholder</LegalPlaceholder>.
            </p>
          ),
        },
        {
          title: "10. Effective date and review",
          content: (
            <p>
              <LegalPlaceholder>
                Effective date — placeholder. These draft terms have not been
                legally reviewed and should not be used as final terms.
              </LegalPlaceholder>
            </p>
          ),
        },
      ]}
    />
  );
}
