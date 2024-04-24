import { Inter } from "next/font/google";
import "../styles/globals.css";
import NavbarClient from "@/components/Navbar.client";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Endre Svendsen | Frontend Developer",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavbarClient />
      {children}
      <footer>
          <Footer />
      </footer>
      </body>
    </html>
  );
}
