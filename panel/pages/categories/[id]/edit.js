import React, { useEffect } from 'react'
import Layout from '../../../components/Layout'
import Title from '../../../components/Title'
import { useMutation, useQuery , fetcher} from '../../../lib/graphql'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import * as Yup from 'yup'

let id = ''
const UPDATE_CATEGORY = `
    mutation updateCategory($id: String!, $name: String!, $slug: String!) {
        updateCategory (input: {
        id:$id,
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
      if(ret.data.getCategoryBySlug.id === id){
        return true
      }
      return false
    }),
})
const Edit = () => {
  const router = useRouter()
  id = router.query.id
  const { data } = useQuery(`
  query{
    getCategoryById(id: "${router.query.id}"){
        name
        slug
      }
}`)
  const [updatedData, updateCategory] = useMutation(UPDATE_CATEGORY)
  const form = useFormik({
    initialValues: {
      name: '',
      slug: '',
    },
    validationSchema: CategorySchema,
    onSubmit: async values => {
      const category = {
        ...values,
        id: router.query.id,
      }
      const data =  await updateCategory(category)

      if (data &&  !data.errors) {
        router.push('/categories')
      }
    },
  })
  useEffect(() => {
    if (data && data.getCategoryById) {
      form.setFieldValue('name', data.getCategoryById.name)
      form.setFieldValue('slug', data.getCategoryById.slug)
    }
  }, [data])
  return (
    <Layout>
      <Title>Editar Categoria</Title>
      <div className='mt-5'>
        <Button.LinkOutline href='/categories'>Voltar</Button.LinkOutline>
      </div>
      <div className='flex flex-col mt-5'>
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
              helpText='Slug é utilizado para criar URLs amigaveis'
              errorMessage={form.errors.slug}
            />
            <Button type='submit'>Editar categoria</Button>
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
