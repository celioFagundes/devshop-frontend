import { useState } from 'react'
import { gql } from 'graphql-request'
import Layout from '../../components/Layout'
import { fetcher } from '../../lib/graphql'
import { useEffect } from 'react/cjs/react.development'
import { useCart } from '../../lib/CartContext'

const clothesSizes = ['PP', 'P', 'M', 'G', 'GG', 'XG', 'XGG', 'EG', 'EGG']

const GET_ALL_CATEGORIES = gql`
  query {
    categories: getAllCategories {
      id
      name
      slug
    }
  }
`
const GET_PRODUCT_BY_SLUG = gql`
  query getProductBySLug($slug: String!) {
    product: getProductBySlug(slug: $slug) {
      id
      name
      slug
      description
      images
      sizeType
      variations {
        color {
          colorName
          colorCode
        }
        size
        sku
        price
        stock
        weight
      }
    }
  }
`
const Products = ({ product, categories }) => {
  const cart = useCart()
  const [colorSelected, setColorSelected] = useState('')
  const [sizeSelected, setSizeSelected] = useState('')
  const [availableSizes, setAvailableSizes] = useState([])
  const [selectedVariation, setSelectedVariation] = useState(
    product.variations[0],
  )
  const possibleColors = product.variations.reduce(
    (prev, curr) => ({
      ...prev,
      [curr.color.colorName]: {
        name: curr.color.colorName,
        code: curr.color.colorCode,
      },
    }),
    {},
  )
  useEffect(() => {
    const available = product.variations.filter(
      prod => prod.color.colorName === colorSelected,
    )
    const sizes = available.map(item => item.size)
    const sizesFilter = [...new Set(sizes.map(s => s))]
    setAvailableSizes(sizesFilter)
  }, [colorSelected])
  useEffect(() => {
    const newSelected2 = product.variations
      .filter(item => item.color.colorName === colorSelected)
      .filter(item => item.size === availableSizes[0])
    setSelectedVariation(newSelected2[0])
  }, [availableSizes])

  useEffect(() => {
    if (product.variations[0]) {
      setSelectedVariation(product.variations[0])
      setColorSelected(product.variations[0].color.colorName)
      const available = product.variations.filter(
        prod => prod.color.colorName === product.variations[0].color.colorName,
      )
      const sizes = available.map(item => item.size)
      const sizesFilter = [...new Set(sizes.map(s => s))]
      setAvailableSizes(sizesFilter)
    }
  }, [product])
  useEffect(() => {
    if (colorSelected !== '' && sizeSelected !== '') {
      const newSelected = product.variations
        .filter(item => item.color.colorName === colorSelected)
        .filter(item => item.size === sizeSelected)
      setSelectedVariation(newSelected[0])
    }
  }, [colorSelected, sizeSelected])

  const sizeIsAvailable = size => {
    return availableSizes.indexOf(size) >= 0
  }

  return (
    <Layout categories={categories}>
      <div className='container px-5 py-24 mx-auto'>
        <div className='lg:w-4/5 mx-auto flex flex-wrap'>
          <img
            alt='ecommerce'
            className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded'
            src='https://dummyimage.com/400x400'
          />
          <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
            <h2 className='text-sm title-font text-gray-500 tracking-widest'>
              BRAND NAME
            </h2>
            <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
              {product.name}
            </h1>
            <p className='leading-relaxed'>{product.description}</p>
            <div className=' mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5'>
              <p className=' mr-3'>Cor :</p>
              <div className='flex items-center'>
                {Object.keys(possibleColors).map(item => (
                  <div
                    className='flex flex-col '
                    key={possibleColors[item].name}
                  >
                    <div className='mr-2'>
                      <p className='capitalize text-xs text-gray-400 my-1'>
                        {possibleColors[item].name}
                      </p>
                      <button
                        onClick={() => {
                          setColorSelected(possibleColors[item].name)
                          setSizeSelected('')
                        }}
                        style={{ backgroundColor: possibleColors[item].code }}
                        className={`${
                          selectedVariation &&
                          selectedVariation.color.colorName ===
                            possibleColors[item].name
                            ? 'border-red-300'
                            : 'border-gray-400'
                        } border-2  ml-1  rounded-full w-6 h-6 focus:outline-none`}
                      ></button>
                    </div>
                  </div>
                ))}
              </div>
              {colorSelected + '-' + sizeSelected + availableSizes[0]}
              <pre>{JSON.stringify(selectedVariation, null, 2)}</pre>
              <div className='flex flex-col '>
                <span className='mr-3'>Tamanho:</span>
                <div className='relative'>
                  {clothesSizes.map(size => (
                    <button
                      key={size}
                      onClick={() =>
                        sizeIsAvailable(size) && setSizeSelected(size)
                      }
                      className={`mr-2 my-1 ${
                        sizeIsAvailable(size)
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-blue-400 before:'
                      } ${
                        selectedVariation &&
                        selectedVariation.size === size &&
                        'border-2 border-red-300 rounded'
                      } py-2 px-2 rounded  font-bold text-xs`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <p>{selectedVariation && selectedVariation.price}</p>
            </div>
            <div className='flex'>
              <span className='title-font font-medium text-2xl text-gray-900'></span>
              <button
                onClick={() => cart.addToCart(product, selectedVariation)}
                className='flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'
              >
                Adicionar ao carrinho
              </button>
              <button
                onClick={() => cart.removeFromCart(product)}
                className='flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'
              >
                Remover do carrinho
              </button>
            </div>
            <di>
              <span className='mr-3'>
                Peso: {selectedVariation && selectedVariation.weight}
              </span>
            </di>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export async function getServerSideProps(context) {
  const { product } = await fetcher(GET_PRODUCT_BY_SLUG, {
    slug: context.query.slug,
  })
  const { categories } = await fetcher(GET_ALL_CATEGORIES)

  return {
    props: {
      product,
      categories,
    },
  }
}
export default Products
