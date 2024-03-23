import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScrolling from "./components/SmoothScrolling";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quincy Oghenetejiri Ukumakube',
  description: 'Software Developer, Technical Writer, ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrolling>
        {children}
        </SmoothScrolling>
        </body>
    </html>
  )
}
