import React from 'react'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import { useMutation, fetcher } from '../../lib/graphql'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import Button from '../../components/Button'
import Input from '../../components/Input'
import * as Yup from 'yup'
const CREATE_CATEGORY = `
  mutation createCategory($name: String!, $slug: String!) {
    createCategory (input: {
      name:$name, 
      slug:$slug
     }) {
      id
      name
      slug
    }
  }
`
const CategorySchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Por favor, informe um nome com pelo menos 3 caracteres')
    .required('Por favor, informe um nome'),
  slug: Yup.string()
    .min(3, 'Por favor, informe um slug com pelo menos 3 caracteres')
    .required('Por favor, informe um slug')
    .test('is-unique', 'Este slug ja esta em uso', async value => {
      const ret = await fetcher(
        JSON.stringify({
          query: `
        query{
          getCategoryBySlug(slug:"${value}"){
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
const Categories = () => {
  const [data, createCategory] = useMutation(CREATE_CATEGORY)
  const router = useRouter()
  const form = useFormik({
    initialValues: {
      name: '',
      slug: '',
    },
    validationSchema: CategorySchema,
    onSubmit: async values => {
      const data = await createCategory(values)
      if (data && !data.errors) {
        router.push('/categories')
      }
    },
  })
  return (
    <Layout>
      <Title>Gerenciar Categorias</Title>
      <div className='mt-5'>
        <Button.LinkOutline href='/categories'>Voltar</Button.LinkOutline>
      </div>
      <div className='flex flex-col mt-5'>
        <div className='-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
          <div className='align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200 bg-white p-12'>
            <form onSubmit={form.handleSubmit}>
              <Input
                label='Nome da categoria'
                placeholder='Preencha o nome da categoria'
                onChange={form.handleChange}
                value={form.values.name}
                name='name'
                errorMessage={form.errors.name}
              />

              <Input
                label='Slug da categoria'
                placeholder='Preencha o slug da categoria'
                onChange={form.handleChange}
                value={form.values.slug}
                name='slug'
                errorMessage={form.errors.slug}
                helpText='Slug é utilizado para criar URLs amigaveis'
              />

              <Button type='submit'>Criar categoria</Button>
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
export default Categories