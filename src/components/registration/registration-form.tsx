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
import { availableCourses, getCourseBySlug } from "@/data/courses";
import {
  registrationSchema,
  type RegistrationFormValues,
} from "@/lib/registration-schema";
import { submitRegistration } from "@/lib/web3forms";

const proficiencyLevels = [
  { value: "A1", label: "A1 - Beginner" },
  { value: "A2", label: "A2 - Elementary" },
  { value: "B1", label: "B1 - Intermediate" },
  { value: "B2", label: "B2 - Upper Intermediate" },
  { value: "C1", label: "C1 - Advanced" },
  { value: "C2", label: "C2 - Proficient" },
  { value: "not-sure", label: "I’m not sure yet" },
];

type RegistrationFormProps = {
  initialCourseSlug: string;
};

type FieldProps = {
  id: keyof RegistrationFormValues;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
};

function Field({ id, label, required, error, children }: FieldProps) {
  const errorId = `${id}-error`;

  return (
    <div className={`registration-field${error ? " registration-field--error" : ""}`}>
      <label htmlFor={id}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
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

export function RegistrationForm({
  initialCourseSlug,
}: RegistrationFormProps) {
  const [submissionMessage, setSubmissionMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      whatsapp: "",
      country: "",
      proficiencyLevel: "",
      courseSlug: getCourseBySlug(initialCourseSlug) ? initialCourseSlug : "",
      preferredSchedule: "",
      learningGoals: "",
      additionalMessage: "",
      companyWebsite: "",
    },
  });

  const selectedCourseSlug = watch("courseSlug");
  const selectedCourse = getCourseBySlug(selectedCourseSlug);

  const onSubmit = handleSubmit(async (values) => {
    setSubmissionMessage(null);
    const course = getCourseBySlug(values.courseSlug);

    if (!course) {
      setSubmissionMessage({
        type: "error",
        text: "Choose a valid course before submitting.",
      });
      return;
    }

    const result = await submitRegistration(values, course);

    if (result.success) {
      setSubmissionMessage({
        type: "success",
        text: "Your registration request was sent successfully. We’ll be in touch soon.",
      });
      return;
    }

    setSubmissionMessage({ type: "error", text: result.message });
  });

  return (
    <form className="registration-form" noValidate onSubmit={onSubmit}>
      <div aria-hidden="true" className="registration-form__honeypot">
        <label htmlFor="companyWebsite">Leave this field empty</label>
        <input
          aria-hidden="true"
          autoComplete="off"
          id="companyWebsite"
          tabIndex={-1}
          type="text"
          {...register("companyWebsite")}
        />
      </div>
      <input aria-hidden="true" name="botcheck" type="checkbox" hidden />

      <div className="registration-form__intro">
        <p className="eyebrow">Your next step</p>
        <h2>Tell us a little about yourself.</h2>
        <p>Fields marked with * are required.</p>
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
        <Field
          error={errors.fullName?.message}
          id="fullName"
          label="Full name"
          required
        >
          <input
            autoComplete="name"
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            aria-invalid={Boolean(errors.fullName)}
            id="fullName"
            placeholder="Your full name"
            {...register("fullName")}
          />
        </Field>

        <Field
          error={errors.email?.message}
          id="email"
          label="Email address"
          required
        >
          <input
            autoComplete="email"
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={Boolean(errors.email)}
            id="email"
            placeholder="you@example.com"
            type="email"
            {...register("email")}
          />
        </Field>

        <Field
          error={errors.whatsapp?.message}
          id="whatsapp"
          label="WhatsApp number"
          required
        >
          <input
            autoComplete="tel"
            aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
            aria-invalid={Boolean(errors.whatsapp)}
            id="whatsapp"
            placeholder="+49 123 456 789"
            type="tel"
            {...register("whatsapp")}
          />
        </Field>

        <Field
          error={errors.country?.message}
          id="country"
          label="Country"
          required
        >
          <input
            autoComplete="country-name"
            aria-describedby={errors.country ? "country-error" : undefined}
            aria-invalid={Boolean(errors.country)}
            id="country"
            placeholder="Where are you based?"
            {...register("country")}
          />
        </Field>

        <Field
          error={errors.proficiencyLevel?.message}
          id="proficiencyLevel"
          label="German proficiency level"
          required
        >
          <select
            aria-describedby={
              errors.proficiencyLevel ? "proficiencyLevel-error" : undefined
            }
            aria-invalid={Boolean(errors.proficiencyLevel)}
            id="proficiencyLevel"
            {...register("proficiencyLevel")}
          >
            <option value="">Select your current level</option>
            {proficiencyLevels.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </Field>

        <Field
          error={errors.courseSlug?.message}
          id="courseSlug"
          label="Selected course"
          required
        >
          <select
            aria-describedby={errors.courseSlug ? "courseSlug-error" : undefined}
            aria-invalid={Boolean(errors.courseSlug)}
            id="courseSlug"
            {...register("courseSlug")}
          >
            <option value="">Choose a course</option>
            {availableCourses.map((course) => (
              <option key={course.slug} value={course.slug}>
                {course.level} - {course.title}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        error={errors.preferredSchedule?.message}
        id="preferredSchedule"
        label="Preferred class schedule"
      >
        <input
          aria-describedby={
            errors.preferredSchedule ? "preferredSchedule-error" : undefined
          }
          aria-invalid={Boolean(errors.preferredSchedule)}
          id="preferredSchedule"
          placeholder="Days or times that usually work for you"
          {...register("preferredSchedule")}
        />
      </Field>

      <Field
        error={errors.learningGoals?.message}
        id="learningGoals"
        label="Learning goals"
      >
        <textarea
          aria-describedby={
            errors.learningGoals ? "learningGoals-error" : undefined
          }
          aria-invalid={Boolean(errors.learningGoals)}
          id="learningGoals"
          placeholder="What would you like to achieve with German?"
          rows={3}
          {...register("learningGoals")}
        />
      </Field>

      <Field
        error={errors.additionalMessage?.message}
        id="additionalMessage"
        label="Additional message"
      >
        <textarea
          aria-describedby={
            errors.additionalMessage ? "additionalMessage-error" : undefined
          }
          aria-invalid={Boolean(errors.additionalMessage)}
          id="additionalMessage"
          placeholder="Anything else you’d like us to know?"
          rows={3}
          {...register("additionalMessage")}
        />
      </Field>

      {selectedCourse && (
        <div className="registration-form__selection">
          <CheckCircle2 aria-hidden="true" />
          <p>
            You’re enquiring about{" "}
            <strong>{selectedCourse.level} - {selectedCourse.title}</strong>.
            You can change your course above.
          </p>
        </div>
      )}

      <div className="registration-form__submit">
        <button
          className="button button--primary button--medium"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle aria-hidden="true" className="registration-spinner" />
              Sending registration…
            </>
          ) : (
            <>
              Submit registration <ArrowRight aria-hidden="true" />
            </>
          )}
        </button>
        <p>
          <ShieldCheck aria-hidden="true" />
          Your details are used only to respond to your registration enquiry.
        </p>
      </div>
    </form>
  );
}
