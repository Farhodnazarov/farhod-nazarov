import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../i18n";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Farhod Nazarov",
  description:
    "Farhod Nazarov Portfoliosi. Portfolio dizayini tolaqonli Farhod Nazarovga tegishli.",
  icons: {
    icon: "/me.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scrollbar-hide h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col select-none">
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
