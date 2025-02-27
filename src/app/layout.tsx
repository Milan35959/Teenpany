import type { Metadata } from "next";
import { Geist, Geist_Mono,Bebas_Neue} from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const knockout = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-knockout",
})

export const metadata: Metadata = {
  title: "Jack Daniels",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
     
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${knockout.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
