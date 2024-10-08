import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {Inter} from 'next/font/google'
 //import {Inconsolata,Roboto } from 'next/font/google'

const inter = Inter({subsets:['latin']})
// ref to change font on app
//const inconsolate = Inconsolata({subsets:['latin']}) 
//const roboto = Roboto({subsets:['latin'], weight:['400']})

export const metadata: Metadata = {
  title: "Next.js Project",
  description: "A next.js project with TypeScrips and TailwindCSS",
  keywords :'Next.js, TypeScript, TailwindCSS',
};

export default function RootLayout({
  children,
} : {
  children :React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        < Navbar />
        <main className="max-w-3xl mx-auto py-10">
          {children}  {/*show the different page here */}
        </main>
      </body>
    </html>
  )
}

