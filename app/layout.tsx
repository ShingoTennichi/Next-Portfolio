import './globals.css'
import { Inter } from '@next/font/google';
const inter = Inter();
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.className} bg-[var(--black)] text-[var(--white)]`}>{children}</body>
    </html>
  )
}