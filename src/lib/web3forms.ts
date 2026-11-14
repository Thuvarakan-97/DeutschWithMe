import type { Course } from "@/data/courses";
import type { ContactFormValues } from "@/lib/contact-schema";
import type { RegistrationFormValues } from "@/lib/registration-schema";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export type Web3FormsResult =
  | { success: true }
  | { success: false; message: string };

type Web3FormsResponse = {
  success?: unknown;
  message?: unknown;
};

function getErrorMessage(payload: Web3FormsResponse, fallback: string) {
  return typeof payload.message === "string" && payload.message.trim()
    ? payload.message
    : fallback;
}

async function submitFormData(
  formData: FormData,
  failureMessage: string,
  connectionMessage: string,
): Promise<Web3FormsResult> {
  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      body: formData,
    });
    const payload: Web3FormsResponse = await response.json();

    if (!response.ok || payload.success !== true) {
      return {
        success: false,
        message: getErrorMessage(payload, failureMessage),
      };
    }

    return { success: true };
  } catch {
    return { success: false, message: connectionMessage };
  }
}

export async function submitRegistration(
  values: RegistrationFormValues,
  course: Course,
): Promise<Web3FormsResult> {
  if (values.companyWebsite?.trim()) {
    return {
      success: false,
      message: "We couldn’t verify this submission. Please try again.",
    };
  }

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return {
      success: false,
      message:
        "Registration is temporarily unavailable. Please try again later or contact us.",
    };
  }

  const formData = new FormData();
  formData.append("access_key", accessKey);
  formData.append(
    "subject",
    `New DeutschWithMe registration: ${course.level} ${course.title}`,
  );
  formData.append("from_name", "DeutschWithMe website");
  formData.append("full_name", values.fullName);
  formData.append("email", values.email);
  formData.append("whatsapp_number", values.whatsapp);
  formData.append("country", values.country);
  formData.append("german_proficiency_level", values.proficiencyLevel);
  formData.append("selected_course", `${course.level} - ${course.title}`);
  formData.append("selected_course_slug", course.slug);
  formData.append("preferred_class_schedule", values.preferredSchedule ?? "");
  formData.append("learning_goals", values.learningGoals ?? "");
  formData.append("additional_message", values.additionalMessage ?? "");
  formData.append("botcheck", "");

  return submitFormData(
    formData,
    "Your registration could not be sent. Please try again.",
    "We couldn’t reach the registration service. Check your connection and try again.",
  );
}

export async function submitContact(
  values: ContactFormValues,
): Promise<Web3FormsResult> {
  if (values.companyWebsite?.trim()) {
    return {
      success: false,
      message: "We couldn’t verify this submission. Please try again.",
    };
  }

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return {
      success: false,
      message:
        "The contact form is temporarily unavailable. Please try again later.",
    };
  }

  const formData = new FormData();
  formData.append("access_key", accessKey);
  formData.append("subject", `New DeutschWithMe contact: ${values.subject}`);
  formData.append("from_name", "DeutschWithMe website");
  formData.append("name", values.name);
  formData.append("email", values.email);
  formData.append("replyto", values.email);
  formData.append("message", values.message);
  formData.append("botcheck", "");

  return submitFormData(
    formData,
    "Your message could not be sent. Please try again.",
    "We couldn’t reach the contact service. Check your connection and try again.",
  );
}
