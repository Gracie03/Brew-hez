import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/LayoutComponents/Navbar";
import Footer from "@/components/LayoutComponents/Footer";
import { Roboto } from 'next/font/google';


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});


export const metadata: Metadata = {
  title: "BrewHez Coffee Shop",
  description: "Website to order coffee",
  keywords: ['coffee', 'tea'],
  authors: [{ name: 'BrewHez Coffee Shop' }],
  icons: {
    icon: '/icony.jpg',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={roboto.className}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
