import { useState } from 'react'
import { gql } from 'graphql-request'
import Layout from '../../components/Layout'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { fetcher } from '../../lib/graphql'
import { useEffect } from 'react/cjs/react.development'
import { useCart } from '../../lib/CartContext'
/*<button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>*/
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

  //const possibleColors = [...new Set(product.variations.map(item => item.color.colorName))]
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
  /*
  useEffect(() => {
    const available = product.variations.filter(
      prod => prod.optionName1 === colorSelected,
    )
    const sizes = available.map(item => item.optionName2)
    const sizesFilter = [...new Set(sizes.map(s => s))]
    setAvailableSizes(sizesFilter)
  }, [colorSelected])*/

  /*const selectedVariation = product.variations
    .filter(item => item.optionName1 === colorSelected)
    .filter(item => item.optionName2 === sizeSelected)

  const selectedPrice =
    selectedVariation && selectedVariation[0] && selectedVariation[0].price
      ? selectedVariation[0].price
      : product.price*/
  console.log(possibleColors)
  Object.keys(possibleColors).map(item => {
    console.log(possibleColors[item].name, possibleColors[item].code)
  })

  return (
    <Layout categories={categories}>
      <div className='container px-5 py-24 mx-auto'>
        <pre>{JSON.stringify(product, null, 2)}</pre>
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
                  <div className='flex flex-col'>
                    <div className='mr-2'>
                      <p className='capitalize text-xs text-gray-400'>{possibleColors[item].name}</p>
                      <button
                        key={item.name}
                        style={{ backgroundColor: possibleColors[item].code }}
                        className='border-2 border-gray-300 ml-1  rounded-full w-6 h-6 focus:outline-none'
                      ></button>
                    </div>
                  </div>
                ))}
              </div>
              <div className='flex  items-center'>
                <span className='mr-3'>Tamanho</span>
                <div className='relative'>
                  <select
                    onChange={evt => setSizeSelected(evt.target.value)}
                    className='rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10'
                  >
                    <option value='' hidden>
                      Selecione
                    </option>
                  </select>
                  <AiOutlineCaretDown
                    size={12}
                    className='absolute right-2 top-4'
                  />
                </div>
              </div>
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
