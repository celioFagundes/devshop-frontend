import React, { useEffect } from 'react'
import Layout from '../../../components/Layout'
import Title from '../../../components/Title'
import { useMutation, useQuery, fetcher } from '../../../lib/graphql'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import Select from '../../../components/Select'
import * as Yup from 'yup'

let id = ''
const UPDATE_PRODUCT = `
    mutation updateProduct($id: String!, $name: String!, $slug: String!,$description: String!, 
      $category: String!) {
        updateProduct (input: {
        id:$id,
        name:$name, 
        slug:$slug,
        description: $description,
        category: $category,
        }) {
        id
        name
        slug
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
      if(ret.data.getProductBySlug.id === id){
        return true
      }
      return false
    }),
})
const Edit = () => {
  const router = useRouter()
  id = router.query.id
  const { data: categories, error } = useQuery(GET_ALL_CATEGORIES)
  const { data } = useQuery(`
  query{
    getProductById(id: "${router.query.id}"){
        name
        slug
        description
        category{
          id
          name
        }
      }
}`)
  const [updatedData, updateProduct] = useMutation(UPDATE_PRODUCT)
  const form = useFormik({
    initialValues: {
      name: '',
      slug: '',
      description: '',
      category: '',
    },
    validationSchema: ProductSchema,
    onSubmit: async values => {
      const product = {
        ...values,
        id: router.query.id,
      }
      const data = await updateProduct(product)

      if (data && !data.errors) {
        router.push('/products')
      }
    },
  })
  useEffect(() => {
    if (data && data.getProductById) {
      form.setFieldValue('name', data.getProductById.name)
      form.setFieldValue('slug', data.getProductById.slug)
      form.setFieldValue('description', data.getProductById.description)
      form.setFieldValue('category', data.getProductById.category.id)
    }
  }, [data])
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
      <Title>Editar Produto</Title>
      <div className='mt-5'>
        <Button.LinkOutline href='/products'>Voltar</Button.LinkOutline>
      </div>
      <div className='flex flex-col mt-5'>
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
              label='Slug do produto'
              placeholder='Preencha o slug do produto'
              onChange={form.handleChange}
              value={form.values.slug}
              name='slug'
              errorMessage={form.errors.slug}
              helpText='Slug é utilizado para criar URLs amigaveis'
            />
            <Input
              label='Descrição do produto'
              placeholder='Preencha a descrição do produto'
              onChange={form.handleChange}
              value={form.values.description}
              errorMessage={form.errors.description}
              name='description'
            />
            <Select
              label={'Selecione a categoria do produto'}
              onChange={form.handleChange}
              name='category'
              value={form.values.category.id}
              options={options}
              errorMessage={form.errors.category}
              oldValue = {form.values.category}
            />
            <Button type='submit'>Editar produto</Button>
          </form>
          {updatedData && !!updatedData.errors && (
            <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-2'>
              Ocorreu um erro ao salvar os dados
            </p>
          )}
        </div>
      </div>
    </Layout>
  )
}
export default Edit
