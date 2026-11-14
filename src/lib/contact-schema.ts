import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Enter a valid email address.").max(254),
  subject: z.string().trim().min(3, "Please add a subject.").max(150),
  message: z.string().trim().min(10, "Please enter at least 10 characters.").max(5000),
  companyWebsite: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
