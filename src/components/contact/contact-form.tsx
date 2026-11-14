"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/contact-schema";
import { submitContact } from "@/lib/web3forms";

type ContactFieldName = Exclude<keyof ContactFormValues, "companyWebsite">;

function ContactField({
  id,
  label,
  error,
  children,
}: {
  id: ContactFieldName;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  const errorId = `${id}-error`;

  return (
    <div className={`registration-field${error ? " registration-field--error" : ""}`}>
      <label htmlFor={id}>
        {label}
        <span aria-hidden="true"> *</span>
      </label>
      {children}
      {error && (
        <p className="registration-field__error" id={errorId}>
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [submissionMessage, setSubmissionMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      companyWebsite: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setSubmissionMessage(null);
    const result = await submitContact(values);

    setSubmissionMessage(
      result.success
        ? {
            type: "success",
            text: "Your message was sent successfully. We’ll be in touch soon.",
          }
        : { type: "error", text: result.message },
    );
  });

  return (
    <form className="registration-form contact-form" noValidate onSubmit={onSubmit}>
      <div aria-hidden="true" className="registration-form__honeypot">
        <label htmlFor="contact-companyWebsite">Leave this field empty</label>
        <input
          aria-hidden="true"
          autoComplete="off"
          id="contact-companyWebsite"
          tabIndex={-1}
          type="text"
          {...register("companyWebsite")}
        />
      </div>
      <input aria-hidden="true" name="botcheck" type="checkbox" hidden />

      <div className="registration-form__intro">
        <p className="eyebrow">Send us a message</p>
        <h2>How can we help?</h2>
        <p>All fields are required.</p>
      </div>

      {submissionMessage && (
        <div
          className={`registration-message registration-message--${submissionMessage.type}`}
          role={submissionMessage.type === "error" ? "alert" : "status"}
        >
          {submissionMessage.type === "success" ? (
            <CheckCircle2 aria-hidden="true" />
          ) : (
            <ShieldCheck aria-hidden="true" />
          )}
          <p>{submissionMessage.text}</p>
        </div>
      )}

      <div className="registration-form__grid">
        <ContactField error={errors.name?.message} id="name" label="Name">
          <input
            autoComplete="name"
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={Boolean(errors.name)}
            id="name"
            placeholder="Your name"
            {...register("name")}
          />
        </ContactField>

        <ContactField error={errors.email?.message} id="email" label="Email">
          <input
            autoComplete="email"
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={Boolean(errors.email)}
            id="email"
            placeholder="you@example.com"
            type="email"
            {...register("email")}
          />
        </ContactField>
      </div>

      <ContactField error={errors.subject?.message} id="subject" label="Subject">
        <input
          aria-describedby={errors.subject ? "subject-error" : undefined}
          aria-invalid={Boolean(errors.subject)}
          id="subject"
          placeholder="What would you like to discuss?"
          {...register("subject")}
        />
      </ContactField>

      <ContactField error={errors.message?.message} id="message" label="Message">
        <textarea
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={Boolean(errors.message)}
          id="message"
          placeholder="Write your message here..."
          rows={6}
          {...register("message")}
        />
      </ContactField>

      <div className="registration-form__submit">
        <button
          className="button button--primary button--medium"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle aria-hidden="true" className="registration-spinner" />
              Sending message…
            </>
          ) : (
            <>
              Send message <ArrowRight aria-hidden="true" />
            </>
          )}
        </button>
        <p>
          <ShieldCheck aria-hidden="true" />
          Your details are used only to respond to your message.
        </p>
      </div>
    </form>
  );
}
