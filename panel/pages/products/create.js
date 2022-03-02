import React from 'react'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import { useMutation, useQuery, fetcher } from '../../lib/graphql'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Select from '../../components/Select'
import * as Yup from 'yup'
const CREATE_PRODUCT = `
  mutation createProduct($name: String!, $slug: String!, $description : String!,
    $category: String!) {
    panelCreateProduct (input: {
      name:$name, 
      slug:$slug,
      description : $description,
      category: $category,
     }) {
      id
      name
      slug
      description
    }
  }
`
const GET_ALL_CATEGORIES = `
  query{
  getAllCategories{
    id
    name
    slug
  }
}`
const ProductSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Por favor, informe um nome com pelo menos 3 caracteres')
    .required('Por favor, informe um nome'),
  description: Yup.string()
    .min(20, 'Por favor, informe uma descrição com pelo menos 20 caracteres')
    .required('Por favor, informe uma descrição'),
  category: Yup.string()
    .min(1, 'Por favor selecione uma categoria')
    .required('Por favor selecione uma categoria'),
  slug: Yup.string()
    .min(3, 'Por favor, informe um slug com pelo menos 3 caracteres')
    .required('Por favor, informe um slug')
    .test('is-unique', 'Este slug ja esta em uso', async value => {
      const ret = await fetcher(
        JSON.stringify({
          query: `
        query{
          getProductBySlug(slug:"${value}"){
            id
          }
        }`,
        }),
      )
      if (ret.errors) {
        return true
      }
      return false
    }),
})
const CreateProduct = () => {
  const { data: categories, error, mutate } = useQuery(GET_ALL_CATEGORIES)
  const [data, createProduct] = useMutation(CREATE_PRODUCT)
  const router = useRouter()
  const form = useFormik({
    initialValues: {
      name: '',
      slug: '',
      description: '',
      category: '',
    },
    validationSchema: ProductSchema,
    onSubmit: async values => {
      const data = await createProduct(values)
      if (data && !data.errors) {
        router.push('/products')
      }
    },
  })
  let options = []
  if (categories && categories.getAllCategories) {
    options = categories.getAllCategories.map(item => {
      return {
        id: item.id,
        label: item.name,
      }
    })
  }
  return (
    <Layout>
      <Title>Criar Produtos</Title>
      <div className='mt-5'>
        <Button.LinkOutline href='/products'>Voltar</Button.LinkOutline>
      </div>
      <div className='flex flex-col mt-5'>
        <div className='-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
          <div className='align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200 bg-white p-12'>
            <form onSubmit={form.handleSubmit}>
              <Input
                label='Nome do produto'
                placeholder='Preencha o nome do produto'
                onChange={form.handleChange}
                value={form.values.name}
                name='name'
                errorMessage={form.errors.name}
              />
              <Input
                label='Descrição do produto'
                placeholder='Preencha a descrição do produto'
                onChange={form.handleChange}
                value={form.values.description}
                name='description'
                errorMessage={form.errors.description}
              />
              <Input
                label='Slug do produto'
                placeholder='Preencha o slug do produto'
                onChange={form.handleChange}
                value={form.values.slug}
                name='slug'
                errorMessage={form.errors.slug}
                helpText='Slug é utilizado para criar URLs amigaveis'
              />

              <Select
                label={'Selecione a categoria do produto'}
                onChange={form.handleChange}
                name='category'
                value={form.values.category}
                options={options}
                errorMessage={form.errors.category}
              />
              <Button type='submit'>Criar produto</Button>
            </form>
            {data && !!data.errors && (
              <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-2'>
                Ocorreu um erro ao salvar os dados
              </p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default CreateProduct
