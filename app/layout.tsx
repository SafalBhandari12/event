import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Flow Party | Neon-filled Night of Beats & Art",
  description:
    "Join us for an electrifying night of music, art, and waves at Riverside Amphitheater. August 30th - Experience the flow.",
  keywords:
    "flow party, electronic music, riverside amphitheater, neon party, EDM event",
  openGraph: {
    title: "The Flow Party",
    description: "A neon-filled night of beats, art, and waves",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <link
          rel='preload'
          href='/assets/hero.webm'
          as='video'
          type='video/webm'
        />
        <link rel='preload' href='/assets/poster.svg' as='image' />
      </head>
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
