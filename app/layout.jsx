import { Lato } from 'next/font/google';
import './styles/styles.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const lato = Lato({
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: 'Shingo Tennichi',
  description: 'This is Shingo Tennichi\'s portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#ffa812" />
        <meta name="msapplication-TileColor" content="#ffa812" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={lato.className}>
        <div className='wrapper'>
          <main>
            <Navbar />
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  )
}
