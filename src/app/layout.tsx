import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jayadhar Ummadisingu",
  description: "My Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow m-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
