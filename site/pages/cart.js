import { gql } from 'graphql-request'
import Layout from '../components/Layout'
import { fetcher } from '../lib/graphql'
import Link from 'next/link'
import { useCart } from '../lib/CartContext'
const GET_ALL_CATEGORIES = gql`
  query {
    categories: getAllCategories {
      id
      name
      slug
    }
  }
`
const Cart = ({ categories }) => {
  const cart = useCart()
  return (
    <Layout categories={categories}>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            <ul>
              {Object.keys(cart.items).map(item => {
                const product = cart.items[item].product
                const qtd = cart.items[item].qtd
                return (
                  <li>
                    Nome: {product.name}
                    <ul>
                      {Object.keys(qtd).map(key => {
                        return(<li>
                          {key}
                          {qtd[key].qtd}
                        </li>
                      )})}
                    </ul>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export async function getServerSideProps(context) {
  const { categories } = await fetcher(GET_ALL_CATEGORIES)
  return {
    props: {
      categories,
    },
  }
}
export default Cart
