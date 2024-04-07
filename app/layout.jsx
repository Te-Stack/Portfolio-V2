import { Poppins } from 'next/font/google'
import './globals.css'
import SmoothScrolling from "./components/SmoothScrolling";
import Nav from './components/Nav/Navs';
import Footer from './components/Footer/Footer';



const poppins = Poppins({weight:["400", "500", "600", "700", "800", "900"], subsets: ['latin'] })

export const metadata = {
  title: 'Quincy Oghenetejiri Ukumakube',
  description: 'Software Developer, Technical Writer,Documentation Writer ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`dark ${poppins.className}`}>
        <SmoothScrolling>
          <Nav/>
        {children}
        <Footer/>
        </SmoothScrolling>
        </body>
    </html>
  )
}
