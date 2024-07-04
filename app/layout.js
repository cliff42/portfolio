import { Courier_Prime } from "next/font/google";
import { Nav } from "@/components/ui/nav";
import "./globals.css";

const courier_prime = Courier_Prime({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "chris cliff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.ico" sizes="any" />
      <body className={courier_prime.className}>
        <Nav ></Nav>
        {children}
      </body>
    </html>
  );
}
