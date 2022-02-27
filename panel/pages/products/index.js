import React from 'react'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import Table from '../../components/Table'
import { useMutation, useQuery } from '../../lib/graphql'
import Link from 'next/link'
import Button from '../../components/Button'
import Alert from '../../components/Alert'

const DELETE_PRODUCT = `
  mutation deleteProduct($id: String!) {
    deleteProduct(id : $id)
  }
`
const GET_ALL_PRODUCTS = `
  query{
  getAllProducts{
    id
    name
    slug
    description
    category{
      id
      name
    }
  }
}`

const Products = () => {
  const { data, error, mutate } = useQuery(GET_ALL_PRODUCTS)
  const [deleteData, deleteProduct] = useMutation(DELETE_PRODUCT)

  const remove = id => async () => {
    await deleteProduct({ id })
    mutate()
  }
  return (
    <Layout>
      <Title>Gerenciar Produtos</Title>
      <div className='mt-5'>
        <Button.Link href='/products/create'>Criar novo produto</Button.Link>
      </div>

      <div className='flex flex-col mt-5'>
        <div className='-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
          {data && data.getAllProducts.length === 0 && (
            <Alert>Nenhuma produto encontrado</Alert>
          )}
          {data && data.getAllProducts.length > 0 && (
            <div className='align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200'>
              <Table>
                <Table.Head>
                  <Table.Th>Produtos</Table.Th>
                  <Table.Th>Slug</Table.Th>
                  <Table.Th>Categoria</Table.Th>
                  <Table.Th>Ações</Table.Th>
                </Table.Head>
                <Table.Body>
                  {data.getAllProducts.map(item => (
                    <Table.Row key={item.id}>
                      <Table.Td>
                        <div className='flex items-center'>
                          <div>
                            <div className='text-sm leading-5 font-medium text-gray-900'>
                              {item.name}
                            </div>
                            <div className='text-sm leading-5 text-gray-500'>
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </Table.Td>
                      <Table.Td>
                        <div className='flex items-center'>
                          <div>
                            <div className='text-sm leading-5 font-medium text-gray-900'>
                              {item.slug}
                            </div>
                          </div>
                        </div>
                      </Table.Td>
                      <Table.Td>
                        <div className='flex items-center'>
                          <div>
                            <div className='text-sm leading-5 font-medium text-gray-900'>
                              {item.category.name}
                            </div>
                          </div>
                        </div>
                      </Table.Td>
                      <Table.Td className='px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium'>
                        <Link href={`/products/${item.id}/edit`}>
                          <a className='text-indigo-600 hover:text-indigo-900 mr-2'>
                            Editar
                          </a>
                        </Link>
                        {' | '}
                        <a
                          href='#'
                          onClick={remove(item.id)}
                          className='text-red-600 hover:text-indigo-900 ml-2'
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
export default Products