import React, { useEffect } from 'react'
import Layout from '../../../components/Layout'
import Title from '../../../components/Title'
import { useMutation, useQuery, fetcher } from '../../../lib/graphql'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import * as Yup from 'yup'

let id = ''
const UPDATE_USER = `
    mutation updateUser($id: String!, $name: String!, $email: String!, $role: String!) {
        panelUpdateUser (input: {
        id:$id,
        name:$name, 
        email:$email,
        role:$role
        }) {
        id
        name
        email
        }
    }
`
const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Por favor, informe um nome com pelo menos 3 caracteres')
    .required('Por favor, informe um nome'),
  role: Yup.string()
    .min(3, 'Por favor, informe uma role com pelo menos 3 caracteres')
    .required('Por favor, informe uma role'),
  email: Yup.string()
    .min(3, 'Por favor, informe um email com pelo menos 3 caracteres')
    .email()
    .required('Por favor, informe um email')
    .test('is-unique', 'Este email ja esta em uso', async value => {
      const ret = await fetcher(
        JSON.stringify({
          query: `
        query{
          panelGetUserByEmail(email:"${value}"){
            id
          }
        }`,
        }),
      )
      if (ret.errors) {
        return true
      }
      if(ret.data.panelGetUserByEmail.id === id){
        return true
      }
      return false
    }),
})
const EditUser = () => {
  const router = useRouter()
  id = router.query.id
  const { data } = useQuery(`
  query{
    panelGetUserById(id: "${router.query.id}"){
        name
        email
        role
      }
}`)
  const [updatedData, updateUser] = useMutation(UPDATE_USER)
  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      role: '',
    },
    validationSchema: UserSchema,
    onSubmit: async values => {
      const user = {
        ...values,
        id: router.query.id,
      }
      const data = await updateUser(user)

      if (data && !data.errors) {
        router.push('/users')
      }
    },
  })
  useEffect(() => {
    if (data && data.panelGetUserById) {
      form.setFieldValue('name', data.panelGetUserById.name)
      form.setFieldValue('email', data.panelGetUserById.email)
    }
  }, [data])
  return (
    <Layout>
      <Title>Editar usuario</Title>
      <div className='mt-5'>
        <Button.LinkOutline href='/users'>Voltar</Button.LinkOutline>
      </div>
      <div className='flex flex-col mt-5'>
        <div className='align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200 bg-white p-12'>
          <form onSubmit={form.handleSubmit}>
            <Input
              label='Nome do usuario'
              placeholder='Preencha o nome do usuario'
              onChange={form.handleChange}
              value={form.values.name}
              name='name'
              errorMessage={form.errors.name}
            />
            <Input
              label='Email do usuario'
              placeholder='Preencha o email do usuario'
              onChange={form.handleChange}
              value={form.values.email}
              name='email'
              errorMessage={form.errors.email}
              helpText='Email é utilizado para criar URLs amigaveis'
            />
            <Input
              label='Role do usuario'
              placeholder='Preencha a role do usuario'
              onChange={form.handleChange}
              value={form.values.role}
              name='role'
              errorMessage={form.errors.role}
            />
            <Button type='submit'>Editar usuario</Button>
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
export default EditUser
