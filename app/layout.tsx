import './globals.scss'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
const inter = Inter({ subsets: ['latin'] })
import logo from "../public/images/logo.png";

export const metadata: Metadata = {
  title: 'Unnikrishnan\'s Portfolio',
  description: 'My Portfolio'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
