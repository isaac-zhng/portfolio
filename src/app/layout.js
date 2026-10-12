import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Inter used to be constructed here and never applied (its CSS variable was
// never attached to <body>), so it was downloaded and thrown away on every
// page load. Icons are inline SVG now (see ./Component/Icons.js), which
// removes the render-blocking Font Awesome <link> that used to live in <head>.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Isaac Zhang",
  description: "Portfolio of product management, research, and design work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
