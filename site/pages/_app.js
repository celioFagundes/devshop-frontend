import React from 'react'
import '../css/styles.css'
import { CartProvider } from '../lib/CartContext'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const App = ({ Component, pageProps }) => {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}
export default App
