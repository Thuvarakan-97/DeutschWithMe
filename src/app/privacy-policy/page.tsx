import type { Metadata } from "next";
import { LegalPage, LegalPlaceholder } from "@/components/legal/legal-page";
import { contactDetails } from "@/data/contact";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy | DeutschWithMe",
  description:
    "Privacy information for DeutschWithMe’s registration and contact forms, including Web3Forms processing and privacy details requiring review.",
  path: "/privacy-policy",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy information"
      title="Privacy Policy"
      introduction="This draft describes information submitted through the DeutschWithMe forms and the direct-to-Web3Forms processing flow. The operator is based in Sri Lanka; applicable privacy laws, controller details, and international-transfer requirements must be confirmed with qualified counsel."
      sections={[
        {
          title: "1. Controller and contact",
          content: (
            <>
              <p>
                The supplied website owner/contact person is:
              </p>
              <ul>
                <li>{contactDetails.owner}</li>
                <li>{contactDetails.address}</li>
                <li><a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></li>
                <li>Telephone / WhatsApp: {contactDetails.phone}</li>
              </ul>
              <p>
                Confirm whether the controller is this individual or a
                separate legal entity, and provide any complete postal address
                legally required. The location above is not a street address.
                The operator is based in Sri Lanka; whether the GDPR or other
                privacy laws apply, and which supervisory authority is
                competent, require case-specific legal review.
              </p>
            </>
          ),
        },
        {
          title: "2. Information submitted through forms",
          content: (
            <>
              <p>
                If you submit the student registration form, it asks for your
                full name, email address, WhatsApp number, country, German
                proficiency level, selected course, and any preferred schedule,
                learning goals, or additional message you provide.
              </p>
              <p>
                If you use the contact form, it asks for your name, email
                address, subject, and message. Form submissions also contain a
                hidden anti-spam field. Do not include sensitive personal
                information unless it is necessary for your enquiry.
              </p>
            </>
          ),
        },
        {
          title: "3. Purposes and legal bases",
          content: (
            <>
              <p>
                Form information is intended to be used to respond to an
                enquiry, assess a course request, and communicate with the
                person who submitted it. Confirm the actual purposes and the
                applicable legal basis for each purpose before publication.
              </p>
              <p>
                <LegalPlaceholder>
                  Legal basis per processing purpose under GDPR Article 6 —
                  placeholder requiring legal review.
                </LegalPlaceholder>
              </p>
            </>
          ),
        },
        {
          title: "4. Form processing service",
          content: (
            <>
              <p>
                The forms are designed to submit directly from the visitor’s
                browser to Web3Forms using the configured Web3Forms access key.
                There is no DeutschWithMe application API or database in this
                frontend form flow. Web3Forms may process submitted data to
                deliver the message.
              </p>
              <p>
                Before launch, verify Web3Forms’ role, terms, privacy
                documentation, storage and retention practices, subprocessors,
                security measures, and any international data transfers.
                Specifically assess whether data is transferred outside Sri
                Lanka or the EEA and whether transfer safeguards are required.
                Add the relevant service links and safeguards here:
                {" "}
                <LegalPlaceholder>Web3Forms documentation and transfer details — placeholder</LegalPlaceholder>.
              </p>
            </>
          ),
        },
        {
          title: "5. Retention and recipients",
          content: (
            <>
              <p>
                Access to submitted enquiries should be limited to people who
                need it to respond or administer course requests. Define and
                apply an appropriate retention period, including how messages
                are deleted from the recipient mailbox and any form-service
                systems.
              </p>
              <p>
                <LegalPlaceholder>
                  Retention periods, recipient categories, and deletion
                  procedure — placeholders to be confirmed.
                </LegalPlaceholder>
              </p>
            </>
          ),
        },
        {
          title: "6. Cookies, hosting, and technical data",
          content: (
            <>
              <p>
                The website hosting provider may process technical data such as
                server requests, IP addresses, timestamps, and browser
                information to deliver and secure the website. Confirm the
                hosting provider, its role, relevant logs, and retention
                periods.
              </p>
              <p>
                Document any cookies, analytics, embedded services, or other
                tracking that are actually enabled. Do not describe a cookie or
                analytics practice here until it has been checked against the
                deployed website.
              </p>
              <p>
                <LegalPlaceholder>
                  Hosting provider, cookie/analytics inventory, and related
                  legal basis — placeholders.
                </LegalPlaceholder>
              </p>
            </>
          ),
        },
        {
          title: "7. Your data protection rights",
          content: (
            <>
              <p>
                Depending on the circumstances and applicable law, individuals
                may have rights to access, rectify, erase, restrict, or object
                to processing, receive portable data, and withdraw consent
                where processing is based on consent. These rights are subject
                to legal conditions and exceptions.
              </p>
              <p>
                You may also have the right to lodge a complaint with a
                competent data protection supervisory authority. Identify the
                authority applicable to the controller’s actual establishment
                and provide its contact details:
                {" "}
                <LegalPlaceholder>Competent supervisory authority — placeholder</LegalPlaceholder>.
              </p>
              <p>
                To exercise a right or ask about this notice, email{" "}
                <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>.
              </p>
            </>
          ),
        },
        {
          title: "8. Updates and review",
          content: (
            <>
              <p>
                Update this notice when the website, forms, vendors, or data
                practices change. Confirm the effective date and have the
                completed notice reviewed before publication.
              </p>
              <p>
                <LegalPlaceholder>Last updated: add the date this notice is reviewed and published</LegalPlaceholder>
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
