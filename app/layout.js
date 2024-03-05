import { Montserrat  } from "next/font/google";
import "./globals.css";

const montserrat  = Montserrat ({ subsets: ["latin"] });

export const metadata = {
  title: "Tospinomall",
  description: "Greatest e-commerce site in Ghana with a rapid growth and satisfied customer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <header>
          this is header
        </header>

        {children}
        
        <footer>
          this is footer
        </footer>
      </body>
    </html>
  );
}
