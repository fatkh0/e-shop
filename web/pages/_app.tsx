import '@/app/assets/styles/globals.css'
import type { AppProps } from 'next/app'
import StoreProvider from '@/app/providers/storeProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  ) 
}
