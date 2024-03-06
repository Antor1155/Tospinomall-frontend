import { Montserrat  } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const montserrat  = Montserrat ({ subsets: ["latin"] });

export const metadata = {
  title: "Tospinomall",
  description: "Greatest e-commerce site in Ghana with a rapid growth and satisfied customer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="corporate">
      <body className={montserrat.className}>
        <Header />

        {children}
        
        <Footer />
      </body>
    </html>
  );
}
