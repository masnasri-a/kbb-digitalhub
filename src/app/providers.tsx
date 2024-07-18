"use client";

import { ThemeProvider } from "next-themes";
import GoogleCaptchaWrapper from "./recaptcha";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <GoogleCaptchaWrapper>{children}</GoogleCaptchaWrapper>
    </ThemeProvider>
  );
}
