import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lorraine Productions",
  description:
    "Building Legacy. Creating Opportunity. Empowering the Future. Real Estate. Business Consulting. Mentorship & Leadership.",
  openGraph: {
    title: "Lorraine Productions",
    description: "Building Legacy. Creating Opportunity. Empowering the Future. Real Estate. Business Consulting. Mentorship & Leadership.",
    siteName: "Lorraine Productions",
    url: ""
  },
  twitter:{
    title: "Lorraine Productions",
    description: "Building Legacy. Creating Opportunity. Empowering the Future. Real Estate. Business Consulting. Mentorship & Leadership.",
    site: "",
    card: "summary"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${manrope.variable} ${inter.variable} antialiased `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="bg-background text-foreground">
            <Navbar />
              {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
