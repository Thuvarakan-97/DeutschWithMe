import type { Metadata } from "next";
import { LegalPage, LegalPlaceholder } from "@/components/legal/legal-page";
import { contactDetails } from "@/data/contact";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Impressum | DeutschWithMe",
  description:
    "Provider and contact information for DeutschWithMe, based in  Jaffna, Sri Lanka. Legal details requiring verification are marked.",
  path: "/impressum",
  noIndex: true,
});

export default function ImpressumPage() {
  return (
    <LegalPage
      eyebrow="Provider information · Draft for legal review"
      title="Impressum"
      introduction="DeutschWithMe is based in Sri Lanka. The known contact details below are provided as supplied; the operator’s legal form, complete service address, and applicable disclosure requirements still need verification before publication."
      sections={[
        {
          title: "Website operator",
          content: (
            <>
              <p>
                Contact person / owner supplied for this website:
              </p>
              <ul>
                <li>{contactDetails.owner}</li>
                <li>{contactDetails.address}</li>
                <li><LegalPlaceholder>Legal entity or business form, if applicable — verify; do not assume sole proprietorship or another form</LegalPlaceholder></li>
                <li><LegalPlaceholder>Complete serviceable postal address, including any street and postal code — not provided; required details depend on applicable law</LegalPlaceholder></li>
              </ul>
            </>
          ),
        },
        {
          title: "Contact",
          content: (
            <ul>
              <li>Email: <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></li>
              <li>Telephone / WhatsApp: {contactDetails.phone}</li>
            </ul>
          ),
        },
        {
          title: "Register and identification numbers",
          content: (
            <>
              <p>
                Add only details that actually apply to the operator and have
                been verified. Do not publish a register entry or tax number
                that has not been issued.
              </p>
              <ul>
                <li><LegalPlaceholder>Commercial register and registration court, if applicable — placeholder</LegalPlaceholder></li>
                <li><LegalPlaceholder>VAT identification number under applicable law, if issued — placeholder</LegalPlaceholder></li>
                <li><LegalPlaceholder>Other legally required identification details, if applicable — placeholder</LegalPlaceholder></li>
              </ul>
            </>
          ),
        },
        {
          title: "Responsible for editorial content",
          content: (
            <p>
              {contactDetails.owner} is the supplied contact person. Confirm
              whether a separate editorially responsible person and a
              serviceable address must be listed under applicable law:
              {" "}
              <LegalPlaceholder>Additional responsible-person details, if required — verify</LegalPlaceholder>.
            </p>
          ),
        },
        {
          title: "Regulatory or professional information",
          content: (
            <p>
              <LegalPlaceholder>
                Competent supervisory authority, regulated profession, or
                professional rules — include only if applicable and after
                verification; otherwise remove this section.
              </LegalPlaceholder>
            </p>
          ),
        },
        {
          title: "Consumer dispute resolution",
          content: (
            <p>
              The operator is based in Sri Lanka, and this website may be
              accessed internationally. Review which consumer dispute
              resolution disclosures apply to the operator and its services;
              do not infer them from the site’s language or audience:
              {" "}
              <LegalPlaceholder>Participation and competent dispute resolution body, if applicable — placeholder</LegalPlaceholder>.
            </p>
          ),
        },
        {
          title: "Liability and external links",
          content: (
            <>
              <p>
                Add a legally reviewed description of the operator’s
                responsibility for its own content and external links. Do not
                rely on generic wording as a substitute for advice about the
                actual website and applicable law.
              </p>
              <p>
                <LegalPlaceholder>
                  Reviewed liability and external-link notice — placeholder.
                </LegalPlaceholder>
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
