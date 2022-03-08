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
    const variation = selectedVariation[0]
    const variationId= variation.optionName1 + '-'+ variation.optionName2
    setItems(current => {
        const newCart = {...current}
        if(current[product.id]){
            if(current[product.id].qtd[variationId]){
                current[product.id].qtd[variationId].qtd++
            }else{
                current[product.id].qtd = {
                    ...current[product.id].qtd,
                    [variationId]:{
                        variation,
                        qtd: 1
                    }
                }
            }
        }else{
            newCart[product.id] = {
                  product,
                  qtd: {
                    [variationId]: {
                      variation,
                      qtd: 1,
                    },
                  },               
              }
        }
       
      localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart
    })
  }
  const removeFromCart = product => {
    const id = product.id
    setItems(current => {
      const { [id]: etc, ...newCart } = current
      localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart
    })
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
