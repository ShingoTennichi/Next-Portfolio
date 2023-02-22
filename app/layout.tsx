import './globals.css'
import { Inter } from '@next/font/google';
const inter = Inter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.className} bg-[#151515] text-[#FAF9F6]`}>{children}</body>
    </html>
  )
}