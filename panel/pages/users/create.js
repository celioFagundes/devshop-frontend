import React from 'react'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import { useMutation, fetcher } from '../../lib/graphql'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import Button from '../../components/Button'
import Input from '../../components/Input'
import * as Yup from 'yup'

const CREATE_USER = `
  mutation createUser($name: String!, $email: String!, $password: String!, $role: String!) {
    panelCreateUser (input: {
      name:$name, 
      email:$email,
      password: $password,
      role:$role
    }
    ){
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
  password: Yup.string()
    .min(3, 'Por favor, informe uma senha com pelo menos 3 caracteres')
    .required('Por favor, informe uma senha'),
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
      return false
    }),
})
const CreateUser = () => {
  const [data, createUser] = useMutation(CREATE_USER)
  const router = useRouter()
  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      role: '',
    },
    validationSchema: UserSchema,
    onSubmit: async values => {
      const data = await createUser(values)
      if (data && !data.errors) {
        router.push('/users')
      }
    },
  })
  return (
    <Layout>
      <Title>Criar novo usuario</Title>
      <div className='mt-5'>
        <Button.LinkOutline href='/users'>Voltar</Button.LinkOutline>
      </div>
      <div className='flex flex-col mt-5'>
        <div className='-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
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
                label='Senha do usuario'
                placeholder='Preencha a senha do usuario'
                onChange={form.handleChange}
                value={form.values.password}
                name='password'
                errorMessage={form.errors.password}
              />
              <Input
                label='Role do usuario'
                placeholder='Preencha a role do usuario'
                onChange={form.handleChange}
                value={form.values.role}
                name='role'
                errorMessage={form.errors.role}
              />

              <Button type='submit'>Criar usuario</Button>
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
export default CreateUser