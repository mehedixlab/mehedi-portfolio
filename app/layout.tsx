import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// ফন্ট সেটআপ
const inter = Inter({ subsets: ["latin"] });

// SEO এবং Metadata
export const metadata: Metadata = {
  title: "Md. Mehedi Hasan | Software Engineer",
  description: "Portfolio of Md. Mehedi Hasan, a Computer Science graduate focused on software development, mobile applications, backend APIs and AI-powered applications.",
  keywords: ["Mehedi Hasan", "Software Engineer", "Flutter Developer", "Bangladesh", "CSE Graduate", "React", "Python"],
  openGraph: {
    title: "Md. Mehedi Hasan | Software Engineer",
    description: "CSE graduate passionate about building scalable software applications, mobile experiences and API-driven products.",
    url: "https://yourdomain.com", // ভবিষ্যতে তোমার ডোমেইন নাম এখানে দেবে
    siteName: "Md. Mehedi Hasan Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // scroll-smooth যুক্ত করা হলো যাতে মেনুতে ক্লিক করলে সুন্দরভাবে স্ক্রল হয়
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}