import '../globals.css'
import Navbar from '@/components/Navbar'
import { ChatProvider } from '@/providers'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ChatProvider>
          <div className='flex flex-col h-screen bg-white'>
            <Navbar />
            <main>{children}</main>
          </div>
        </ChatProvider>
      </body>
    </html>
  )
}
