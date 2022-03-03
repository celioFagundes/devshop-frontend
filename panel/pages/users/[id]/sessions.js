import React from 'react'
import Layout from '../../../components/Layout'
import Title from '../../../components/Title'
import Table from '../../../components/Table'
import { useMutation, useQuery } from '../../../lib/graphql'
import Button from '../../../components/Button'
import Alert from '../../../components/Alert'
import { useRouter } from 'next/router'
import { formatDistance } from 'date-fns'
import ptBr from 'date-fns/locale/pt-Br'

const DELETE_USERS = `
  mutation invalidateUserSession($id: String!) {
    panelInvalidateUserSession(id : $id)
}`

const Sessions = () => {
  const router = useRouter()
  const { data, error, mutate } = useQuery(`
    query{
        panelGetAllUserSessions(id:"${router.query.id}"){
          id
          userAgent
          lastUsedAt
          active
        }
      }`)
  const [deleteData, deleteUser] = useMutation(DELETE_USERS)

  const remove = id => async () => {
    await deleteUser({ id })
    mutate()
  }
  return (
    <Layout>
      <Title>Gerenciar sessões do usuario</Title>
      <div className='mt-5'>
        <Button.LinkOutline href='/users'>Voltar</Button.LinkOutline>
      </div>

      <div className='flex flex-col mt-5'>
        <div className='-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
          {data && data.panelGetAllUserSessions.length === 0 && (
            <Alert>Nenhuma sessão encontrada</Alert>
          )}
          {data && data.panelGetAllUserSessions.length > 0 && (
            <div className='align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200'>
              <Table>
                <Table.Head>
                  <Table.Th>Sessões</Table.Th>
                  <Table.Th>Usado em</Table.Th>
                  <Table.Th>Actions</Table.Th>
                </Table.Head>
                <Table.Body>
                  {data &&
                    data.panelGetAllUserSessions.map(item => (
                      <Table.Row key={item.id}>
                        <Table.Td>
                          <div className='flex items-center'>
                            <div>
                              <div className='text-sm leading-5 font-medium text-gray-900'>
                                {item.id}
                              </div>
                              <div className='text-sm leading-5 text-gray-500'>
                                {item.userAgent}
                              </div>
                            </div>
                          </div>
                        </Table.Td>
                        <Table.Td>
                          <div className='flex items-center'>
                            <div>
                              <div className='text-sm leading-5 font-medium text-gray-900'>
                                {formatDistance(
                                  new Date(item.lastUsedAt),
                                  new Date(),
                                  { locale: ptBr },
                                )}
                              </div>
                            </div>
                          </div>
                        </Table.Td>
                        <Table.Td className='px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium'>
                          {item.active ? (
                            <a
                              href='#'
                              onClick={remove(item.id)}
                              className='text-red-600 hover:text-indigo-900 ml-2'
                            >
                              Invalidar
                            </a>
                          ) : (
                            <div className='text-sm leading-5 font-medium text-gray-900'>
                              Inativa
                            </div>
                          )}
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
export default Sessions
