import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
        <Script id="google-analytics-config" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-E9J5G0JY0Q');`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E9J5G0JY0Q"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
