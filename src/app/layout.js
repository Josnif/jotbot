import './globals.css'
import Navbar from '@/components/Home/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jotbot AI Apps',
  description: 'jotbot artifical intelligence',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={`${inter.className}`}>
            <div className='flex flex-col h-screen bg-white'>
                <Navbar />
                <main>{children}</main>
            </div>
        </body>
    </html>
  )
}
