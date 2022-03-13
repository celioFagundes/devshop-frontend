import { createContext, useState, useContext, useEffect } from 'react'

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState({})
  useEffect(() => {
    const loadedCart = localStorage.getItem('cart')
    if (loadedCart) {
      setItems(JSON.parse(loadedCart))
    }
  }, [])

  const addToCart = (product, selectedVariation) => {
    const variationId = product.name + selectedVariation.color.colorName + selectedVariation.sku
    setItems(current => {
      const newCart = { ...current }
      if (current[variationId]) {
        current[variationId].qtd++
      } else {
        newCart[variationId] = {
          id: product.id,
          name: product.name,
          slug: product.slug,
          description: product.description,
          images: product.images,
          sizeType: product.sizeType,
          variation: selectedVariation,
          qtd: 1,
        }
      }

      localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart
    })
  }
  const removeFromCart = (product, selectedVariation) => {
    const variationId = product.name + selectedVariation.color.colorName + selectedVariation.sku
    const variation = items[variationId]
    if(variation){
    if(variation.qtd > 0){
      setItems(current => {
        const newCart = {...current}
        newCart[variationId].qtd--
        localStorage.setItem('cart', JSON.stringify(newCart))
        if(newCart[variationId].qtd === 0){
          const {[variationId] : etc, ...newCart2} = newCart
          localStorage.setItem('cart', JSON.stringify(newCart2))
          return newCart2
        }
        return newCart
      })
    }} 
  }
  const cartSize = Object.keys(items).length
  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, cartSize }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const cart = useContext(CartContext)
  return cart
}
