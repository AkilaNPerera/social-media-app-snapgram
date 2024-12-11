import { z } from "zod";

// Should export the files to use them outside
export const SignUpValidation = z.object({
  name: z.string().min(2, { message: "Name must be at least 8 characters long." }),
  username: z.string().min(2, { message: "Username must be at least 8 characters long." }),
  email: z.string().email(),
  password: z.string().min(8, { message: "Password must be at least 8 characters long." })
});
