import React from 'react'
import '../css/styles.css'
import { CartProvider } from '../lib/CartContext'
const App = ({Component, pageProps}) => {
    return (
        <CartProvider>
            <Component {...pageProps}/>
        </CartProvider>
    )
}
export default App