import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/style.css";
import "../styles/responsive.css";
import BootstrapClient from "../components/bootstrap";
import Header from "@/components/elements/HomePage/Header";
import Footer from "@/components/elements/HomePage/Footer";

export const metadata: Metadata = {
  title: "CYBERWARE Global Defence",
  description: "Strenghtening security on a global scale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
