import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/navbar";
import "./globals.css";

export const metadaata = {
  title: {
    default: "M. Akbar Hanani | Portofolio",
    template: "%s | Hanani"
  },
  description: "Portofolio Hanan, siswa SMK calon junior web Developer di Kelas Industri UBIG"
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-latar text-gray-800">
        <Navbar/>
          {children}
        <Footer />
      </body>
    </html>
  );
}
