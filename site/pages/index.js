import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { fetcher} from '../lib/graphql'
import { gql } from 'graphql-request'
import Brands from '../components/Home/Brands'
import { useCart } from '../lib/CartContext'

const GET_ALL_BRANDS = gql`
query{
      brands: getAllBrands{
        id
        name
        slug
        logo
      }
    }
`
const GET_ALL_CATEGORIES = gql`
query{
      categories: getAllCategories{
        id
        name
        slug
      }
    }
`
const Index = ({brands, categories}) => {
  const cart = useCart()
  return (
    <>
      <Layout categories = {categories}>
        <Seo />
        <h1>Devshop</h1>
        <pre>{JSON.stringify(cart,null,2)}</pre>
        <button onClick={() => cart.setCount(old => old + 1)}>count</button>
        <Brands brands = {brands}/>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context){
  const {brands} = await fetcher(GET_ALL_BRANDS)
  const {categories} = await fetcher(GET_ALL_CATEGORIES)
  return {
    props: {
      brands,
      categories
    }
  }
}

export default Index
