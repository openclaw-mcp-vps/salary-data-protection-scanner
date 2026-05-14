import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salary Data Protection Scanner",
  description: "Scan if your salary data is being sold. Monitor data brokers and job sites to detect if your salary information is exposed."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="54d610b4-76ea-4cc8-b144-36a2f1d99b4f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
