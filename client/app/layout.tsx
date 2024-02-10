import type { Metadata } from "next";
import type { Viewport } from "next";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import "@styles/globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
export const metadata: Metadata = {
  title: "CC Cleaning",
  description: "Professional Cleaning Services in The Tampa Bay Area",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans main">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
