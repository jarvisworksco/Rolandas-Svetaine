import { z } from "zod";

export const contactFormSchema = z.object({
  vardas: z.string().min(2, "Įveskite vardą ir pavardę"),
  email: z.string().email("Neteisingas el. pašto formatas"),
  telefonas: z
    .string()
    .min(8, "Neteisingas telefono numeris")
    .regex(
      /^\+?370\d{8}$|^8\d{8}$|^\+370\s\d{3}\s\d{5}$/,
      "Neteisingas telefono numeris"
    ),
  imone: z.string().optional(),
  paslauga: z.string().optional(),
  zinute: z.string().min(10, "Žinutė per trumpa (min. 10 simbolių)"),
  website: z.string().optional(), // honeypot
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
