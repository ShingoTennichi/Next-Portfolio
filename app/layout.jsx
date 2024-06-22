import { Lato } from 'next/font/google';
import './styles/styles.css';
import Navbar from './components/Navbar';
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
      <body className={lato.className}>
        <div className='wrapper'>
          <main>
            <Navbar />
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
