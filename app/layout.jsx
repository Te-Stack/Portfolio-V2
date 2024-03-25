import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScrolling from "./components/SmoothScrolling";
import Nav from './components/Nav/Navs';
import Footer from './components/Footer/Footer';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quincy Oghenetejiri Ukumakube',
  description: 'Software Developer, Technical Writer, ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`dark ${inter.className}`}>
        <SmoothScrolling>
          <Nav/>
        {children}
        <Footer/>
        </SmoothScrolling>
        </body>
    </html>
  )
}
