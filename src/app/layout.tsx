import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import {
  Link,
  LayoutGridIcon,
  PlusIcon,
  UsersIcon,
  CalendarIcon,
  FileTextIcon,
} from "lucide-react";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test Pilot",
  description: "Test Pilot for all Testing needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider> {children} </StoreProvider>
      </body>
    </html>
  );
}
