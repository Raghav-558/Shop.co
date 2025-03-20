import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/common/Footer";
import SignUp from "@/components/common/SignUp";


export const metadata: Metadata = {
  title: "Shop Co",
  description: "FIND CLOTHES THAT MATCHES YOUR STYLE",
  openGraph: {
    title: "Shop.Co",
    description: "FIND CLOTHES THAT MATCHES YOUR STYLE",
    images: [
      {
        url: "/meta-img.png",
        width: 800,
        height: 600,
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <SignUp/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
