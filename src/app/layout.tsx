'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'

import store from '@/store'

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Provider>
  )
}

export default RootLayout
