import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { THemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Archan TypeScript ",
  description: "Learn TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <THemeProvider>
          <div className="container">
            <Navbar />
            {children}
          </div>
        </THemeProvider>
      </body>
    </html>
  );
}
