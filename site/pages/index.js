import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { fetcher } from '../lib/graphql'
import { gql } from 'graphql-request'
import Brands from '../components/Home/Brands'
import Products from '../components/Home/Products'
import Link from 'next/link'
const GET_ALL_PRODUCTS = gql`
  query {
    products: getAllProducts {
      id
      name
      slug
      variations{
        price
      }
      brand {
        slug
        name
      }
      images
    }
  }
`
const GET_ALL_BRANDS = gql`
  query {
    brands: getAllBrands {
      id
      name
      slug
      logo
    }
  }
`
const GET_ALL_CATEGORIES = gql`
  query {
    categories: getAllCategories {
      id
      name
      slug
    }
  }
`
const Index = ({ brands, categories , products}) => {
  return (
    <>
      <Layout categories={categories} brands={brands}>
        <Seo />
        <Link href='/categoria/smartphones'>
        <a className='w-full'>
          <img className ='shadow-sm' src='/images/banner-home2.png' />
        </a>
        </Link>
        
        <Products products = {products}/>
        <Brands brands={brands} />
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const { brands } = await fetcher(GET_ALL_BRANDS)
  const { categories } = await fetcher(GET_ALL_CATEGORIES)
  const { products } = await fetcher(GET_ALL_PRODUCTS)
  return {
    props: {
      brands,
      categories,
      products
      
    },
  }
}

export default Index
