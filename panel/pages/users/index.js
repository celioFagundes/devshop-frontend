import React from 'react'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import Table from '../../components/Table'
import { useMutation, useQuery } from '../../lib/graphql'
import Link from 'next/link'
import Button from '../../components/Button'
import Alert from '../../components/Alert'

const DELETE_USERS = `
  mutation deleteUser($id: String!) {
    panelDeleteUser(id : $id)
  }
`
const GET_ALL_USERS = `
  query{
  panelGetAllUsers{
    id
    name
    email
  }
}`

const Users = () => {
  const { data, error, mutate } = useQuery(GET_ALL_USERS)
  const [deleteData, deleteUser] = useMutation(DELETE_USERS)

  const remove = id => async () => {
    await deleteUser({ id })
    mutate()
  }
  return (
    <Layout>
      <Title>Gerenciar Usuarios</Title>
      <div className='mt-5'>
        <Button.Link href='/users/create'>
          Criar novo usuario
        </Button.Link>
      </div>

      <div className='flex flex-col mt-5'>
        <div className='-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
          {data && data.panelGetAllUsers.length === 0 && (
            <Alert>Nenhum usuario encontrado</Alert>
          )}
          {data && data.panelGetAllUsers.length > 0 && (
            <div className='align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200'>
              <Table>
                <Table.Head>
                  <Table.Th>User</Table.Th>
                  <Table.Th>Actions</Table.Th>
                </Table.Head>
                <Table.Body>
                  {data && data.panelGetAllUsers.map(item => (
                    <Table.Row key={item.id}>
                      <Table.Td>
                        <div className='flex items-center'>
                          <div>
                            <div className='text-sm leading-5 font-medium text-gray-900'>
                              {item.name}
                            </div>
                            <div className='text-sm leading-5 text-gray-500'>
                              {item.email}
                            </div>
                          </div>
                        </div>
                      </Table.Td>
                      <Table.Td className='px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium'>
                        <Link href={`/users/${item.id}/sessions`}>
                          <a className='text-blue-900 font-medium hover:text-indigo-400 mr-2'>
                            Sessões
                          </a>
                        </Link>                
                        {' | '}
                        <Link href={`/users/${item.id}/password`}>
                          <a className='text-blue-900 font-medium hover:text-indigo-400 mr-2'>
                            Alterar senha
                          </a>
                        </Link>                
                        {' | '}
                        <Link href={`/users/${item.id}/edit`}>
                          <a className='text-blue-900 font-medium hover:text-indigo-400 mr-2'>
                            Editar
                          </a>
                        </Link>
                        {' | '}
                        <a
                          href='#'
                          onClick={remove(item.id)}
                          className='text-red-900 font-medium hover:text-red-400'
                        >
                          Remover
                        </a>
                      </Table.Td>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
export default Users
