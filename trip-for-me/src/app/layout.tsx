import type { Metadata } from "next";
import { DM_Serif_Display, Montserrat, Quicksand } from 'next/font/google';
import "./globals.scss";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400"
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trip For Me",
  description: "Curadoria de Viagens Personalizadas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${dmSerifDisplay.variable} ${montserrat.variable} ${quicksand.variable}`}>
        {children}
      </body>
    </html>
  );
}
