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

  const addOne = id => {
    setItems(current => {
      const newCart = { ...current }
      if (current[id]) {
        current[id].qtd++
      }
      localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart
    })
  }
  const removeOne = id => {
    const variation = items[id]
    if (variation) {
      if (variation.qtd > 0) {
        setItems(current => {
          const newCart = { ...current }
          newCart[id].qtd--
          localStorage.setItem('cart', JSON.stringify(newCart))
          if (newCart[id].qtd === 0) {
            const { [id]: etc, ...newCart2 } = newCart
            localStorage.setItem('cart', JSON.stringify(newCart2))
            return newCart2
          }
          return newCart
        })
      }
    }
  }
  const addToCart = (product, selectedVariation,voltage) => {
    const variationId = selectedVariation.sku + voltage
    setItems(current => {
      const newCart = { ...current }
      newCart[variationId] = {
        id: product.id,
        name: product.name,
        slug: product.slug,
        description: product.description,
        images: product.images,
        sizeType: product.sizeType,
        voltage: voltage !== '' && voltage,
        variation: selectedVariation,
        qtd: 1,
      }
      localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart
    })
  }
  const removeFromCart = (selectedVariationSKU, voltage ) => {
    const variationId = voltage ? selectedVariationSKU + voltage : selectedVariationSKU
    console.log(variationId)
    const variation = items[variationId]
    if (variation) {
      if (variation.qtd > 0) {
        setItems(current => {
          const { [variationId]: etc, ...newCart2 } = current
          localStorage.setItem('cart', JSON.stringify(newCart2))
          return newCart2
        })
      }
    }
  }
  const cartSize = Object.keys(items).length

  const cartTotal = () => {
    const total = Object.keys(items).reduce((prev, curr) => {
      return prev + items[curr].variation.price * items[curr].qtd
    }, 0)
    return total
  }
  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        addOne,
        removeOne,
        removeFromCart,
        cartSize,
        cartTotal: cartTotal(),
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const cart = useContext(CartContext)
  return cart
}
