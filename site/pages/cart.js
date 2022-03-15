import { gql } from 'graphql-request'
import Layout from '../components/Layout'
import { fetcher } from '../lib/graphql'
import Link from 'next/link'
import { useCart } from '../lib/CartContext'
import { AiFillCreditCard, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const GET_ALL_CATEGORIES = gql`
  query {
    categories: getAllCategories {
      id
      name
      slug
    }
  }
`
const GET_ALL_BRANDS = gql`
  query {
    brands: getAllBrands {
      id
      name
      slug
    }
  }
`

const Cart = ({ categories, brands }) => {
  const cart = useCart()
  
  return (
    <Layout categories={categories} brands={brands}>
      <div class='flex justify-center my-6'>
        <div class='flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5'>
          <div class='flex-1'>
            <table class='w-full text-sm lg:text-base' cellspacing='0'>
              <thead>
                <tr class='h-12 uppercase'>
                  <th class='hidden md:table-cell'></th>
                  <th class='text-left'>Produto</th>
                  <th class='lg:text-right text-left pl-5 lg:pl-0'>
                    <span class='lg:hidden' title='Quantity'>
                      Qtd
                    </span>
                    <span class='hidden lg:inline'>Quantidade</span>
                  </th>
                  <th class='hidden text-right md:table-cell'>
                    Preço unitário
                  </th>
                  <th class='text-right'>Preço total</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(cart.items).map(item => (
                  <tr>
                    <td class='hidden pb-4 md:table-cell'>
                      <a href='#'>
                        {cart.items &&
                        cart.items[item].images &&
                        cart.items[item].images.length > 0 ? (
                          <img
                            src={cart.items[item].images[0]}
                            class='w-20 rounded'
                            alt='Thumbnail'
                          />
                        ) : (
                          <img
                            src='https://dummyimage.com/420x260'
                            class='w-20 rounded'
                            alt='Thumbnail'
                          />
                        )}
                      </a>
                    </td>
                    <td>
                      <Link href={`/produto/${cart.items[item].slug}`} passHref>
                        <a className='text-gray-800 font-medium text-sm hover:underline'>
                          {cart.items[item].name}
                        </a>
                      </Link>
                      <div className='flex items-center justify-start'>
                        <p className='text-gray-500 font-medium text-xs mr-5'>
                          Cor: {cart.items[item].variation.color.colorName}
                        </p>
                        {(cart.items[item].sizeType === 'clothes' ||
                          cart.items[item].sizeType === 'shoes') && (
                          <p className='text-gray-500 font-medium text-xs mr-5'>
                            Tamanho: {cart.items[item].variation.size}
                          </p>
                        )}
                        {cart.items[item].voltage && (
                          <span className='text-gray-500 font-medium text-xs'>
                            Voltagem: {cart.items[item].voltage}
                          </span>
                        )}
                      </div>
                      <div>
                        <button type='submit' class='text-gray-700' onClick={() => cart.removeFromCart(item)}>
                          <small>(Remover item)</small>
                        </button>
                      </div>
                    </td>
                    <td class='justify-center md:justify-end md:flex mt-6'>
                      <div class='w-20 h-10'>
                        <div class='relative flex flex-row w-full h-8'>
                          <div className='flex flex-row justify-center  items-center '>
                            <button
                              className=''
                              onClick={() => cart.addOne(item)}
                            >
                              <AiOutlinePlus color='#000' />
                            </button>
                            <p className='mx-2 bg-slate-800 px-4 text-white font-medium rounded'>
                              {cart.items[item].qtd}
                            </p>
                            <button
                              className=''
                              onClick={() => cart.removeOne(item)}
                            >
                              <AiOutlineMinus color='#000' />
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class='hidden text-right md:table-cell'>
                      <span class='text-sm lg:text-base font-medium'>
                        R${' '}
                        {cart.items[item].variation.price.toLocaleString(
                          'pt-br',
                        )}
                      </span>
                    </td>
                    <td class='text-right'>
                      <span class='text-sm lg:text-base font-medium'>
                        R${' '}
                        {(
                          cart.items[item].variation.price *
                          cart.items[item].qtd
                        ).toLocaleString('pt-br')}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div class='my-4 mt-6 -mx-2 lg:flex'>
              <div class='lg:px-2 lg:w-1/2'></div>
              <div class='lg:px-2 lg:w-1/2'>
                <div class='p-4 bg-gray-100 rounded-full'>
                  <h1 class='ml-2 font-bold uppercase'>Detalhes do pedido</h1>
                </div>
                <div class='p-4'>
                  <div class='flex justify-between pt-4 border-b'>
                    <div class='lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800'>
                      Total
                    </div>
                    <div class='lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900'>
                      R$ {cart.cartTotal}
                    </div>
                  </div>
                  <a href='#'>
                    <button class='flex justify-center items-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none'>
                      <AiFillCreditCard size={28} />
                      <span class='ml-2 mt-5px'>Fazer checkout</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export async function getServerSideProps(context) {
  const { categories } = await fetcher(GET_ALL_CATEGORIES)
  const { brands } = await fetcher(GET_ALL_BRANDS)
  return {
    props: {
      categories,
      brands,
    },
  }
}
export default Cart
