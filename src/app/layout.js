import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/navbar";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadaata = {
  title: {
    default: "M. Akbar Hanani | Portofolio",
    template: "%s | Hanani"
  },
  description: "Portofolio Hanan, siswa SMK calon junior web Developer di Kelas Industri UBIG"
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`h-full antialiased ${geistSans.variable}`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
