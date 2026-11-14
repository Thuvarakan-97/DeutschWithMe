import { z } from "zod";

export const registrationSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address."),
  whatsapp: z
    .string()
    .trim()
    .min(7, "Enter your WhatsApp number, including country code.")
    .max(25, "Enter a valid WhatsApp number.")
    .regex(
      /^\+?[0-9()\-\s.]+$/,
      "Use digits and an optional country code, for example +49 123 456 789.",
    )
    .refine(
      (value) => (value.match(/\d/g)?.length ?? 0) >= 7,
      "Enter at least 7 digits for your WhatsApp number.",
    ),
  country: z.string().trim().min(1, "Please enter your country."),
  proficiencyLevel: z.string().min(1, "Choose your current German level."),
  courseSlug: z.string().min(1, "Choose a course."),
  preferredSchedule: z.string().trim().max(500).optional(),
  learningGoals: z.string().trim().max(2000).optional(),
  additionalMessage: z.string().trim().max(2000).optional(),
  companyWebsite: z.string().optional(),
});

export type RegistrationFormValues = z.infer<typeof registrationSchema>;
