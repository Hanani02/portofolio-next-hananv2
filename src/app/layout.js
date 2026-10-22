import Footer from "@/components/layout/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-latar text-gray-800">
        <div className="flex-1">
          {children}
        </div>
        
        <Footer />
      </body>
    </html>
  );
}
