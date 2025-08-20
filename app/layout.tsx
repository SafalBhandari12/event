import type { Metadata } from "next";
import { Orbitron, Space_Grotesk, Exo_2 } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const exo2 = Exo_2({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
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
      <body
        className={`${orbitron.variable} ${spaceGrotesk.variable} ${exo2.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
