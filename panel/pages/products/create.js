import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import { useMutation, useQuery, fetcher } from '../../lib/graphql'
import { useFormik, FieldArray, FormikProvider } from 'formik'
import { useRouter } from 'next/router'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Select from '../../components/Select'
import Table from '../../components/Table'
import * as Yup from 'yup'

const CREATE_PRODUCT = `
  mutation createProduct($name: String!, $slug: String!, $description : String!,
    $category: String!, $sku: String!, $price: Float!, $weight: Float!, $stock: Int!, $optionNames: [String!], $variations: [VariationInput!]) {
    panelCreateProduct (input: {
      name:$name, 
      slug:$slug,
      description : $description,
      category: $category,
      sku: $sku,
      price: $price,
      weight:$weight,
      stock:$stock,
      optionNames: $optionNames,
      variations: $variations
     }) {
      id
      name
      slug
      description
      sku
      price
      weight
    }
  }
`
const GET_ALL_CATEGORIES = `
  query{
  getAllCategories{
    id
    name
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
  const { data: categories } = useQuery(GET_ALL_CATEGORIES)
  const [data, createProduct] = useMutation(CREATE_PRODUCT)
  const router = useRouter()
  const form = useFormik({
    initialValues: {
      name: '',
      slug: '',
      description: '',
      category: '',
      price: 0,
      sku: '',
      weight: 0,
      stock: 0,
      optionName1: '',
      optionName2: '',
      variations: [],
    },
    validationSchema: ProductSchema,
    onSubmit: async values => {
      console.log('values ->', values)
      const newValues = {
        ...values,
        price: Number(values.price),
        weight: Number(values.weight),
        stock: Number(values.stock),
        optionNames: [values.optionName1, values.optionName2],
        variations: values.variations.map(variation => ({
          ...variation,
          price: Number(variation.price),
          weight: Number(variation.weight),
          stock: Number(variation.stock),
        })),
      }
      console.log('new Values ->', values)
      const data = await createProduct(newValues)
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
              <Input
                label='Preço do produto'
                placeholder='Preencha o preço do produto'
                onChange={form.handleChange}
                value={form.values.price}
                name='price'
                errorMessage={form.errors.price}
              />
              <Input
                label='SKU do produto'
                placeholder='Preencha o SKU do produto'
                onChange={form.handleChange}
                value={form.values.sku}
                name='sku'
                errorMessage={form.errors.sku}
                helpText='SKU é  um codigo utilizado gerenciar o estoque'
              />
              <Input
                label='Peso do produto(em gramas)'
                placeholder='Preencha o peso do produto(em gramas)'
                onChange={form.handleChange}
                value={form.values.weight}
                name='weight'
                errorMessage={form.errors.weight}
              />
              <Input
                label='Estoque do produto'
                placeholder='Preencha o estoque do produto'
                onChange={form.handleChange}
                value={form.values.stock}
                name='stock'
                errorMessage={form.errors.stock}
              />

              <Select
                label={'Selecione a categoria do produto'}
                onChange={form.handleChange}
                name='category'
                value={form.values.category}
                options={options}
                errorMessage={form.errors.category}
              />
              <Input
                label='Opção de variação 1'
                placeholder='Preencha o nome da opção de variação 1'
                onChange={form.handleChange}
                value={form.values.optionName1}
                name='optionName1'
                errorMessage={form.errors.optionName1}
              />
              <Input
                disabled={form.values.optionName1 === ''}
                label='Opção de variação 2'
                placeholder='Preencha o nome da opção de variação 2'
                onChange={form.handleChange}
                value={form.values.optionName2}
                name='optionName2'
                errorMessage={form.errors.optionName2}
              />
              {form.values.optionName1 !== '' && (
                <FormikProvider value={form}>
                  <FieldArray
                    name='variations'
                    render={arrayHelpers => {
                      return (
                        <div>
                          <Button
                            type='button'
                            onClick={() =>
                              arrayHelpers.push({
                                optionName1: '',
                                optionName2: '',
                                sku: '',
                                price: 0,
                                weight: 0,
                                stock: 0,
                              })
                            }
                          >
                            Adicionar variação
                          </Button>
                           <pre>{JSON.stringify(form.values.variations, null ,2)}</pre> 
                          <Table>
                            <Table.Head>
                              <Table.Th>{form.values.optionName1}</Table.Th>
                              <Table.Th>
                                {form.values.optionName2 !== '' &&
                                  form.values.optionName2}
                              </Table.Th>
                              <Table.Th>SKU</Table.Th>
                              <Table.Th>Preço</Table.Th>
                              <Table.Th>Peso</Table.Th>
                              <Table.Th>Estoque</Table.Th>
                              <Table.Th>Ação</Table.Th>
                            </Table.Head>
                            <Table.Body>
                              {form.values.variations.map(
                                (variation, index) => (
                                  <Table.Row key={index}>
                                    <Table.Td>
                                      <Input
                                        label={form.values.optionName1}
                                        placeholder='Preencha o nome da opção de variação 1'
                                        onChange={form.handleChange}
                                        value={
                                          form.values.variations[index]
                                            .optionName1
                                        }
                                        name={`variations.${index}.optionName1`}
                                      />
                                    </Table.Td>
                                    {form.values.optionName2 !== '' && (
                                      <Table.Td>
                                        <Input
                                          label={form.values.optionName2}
                                          placeholder='Preencha o nome da opção de variação 2'
                                          onChange={form.handleChange}
                                          value={
                                            form.values.variations[index]
                                              .optionName2
                                          }
                                          name={`variations.${index}.optionName2`}
                                        />
                                      </Table.Td>
                                    )}
                                    <Table.Td>
                                      <Input
                                        label='SKU'
                                        placeholder='Preencha o SKU da variação'
                                        onChange={form.handleChange}
                                        value={
                                          form.values.variations[index].sku
                                        }
                                        name={`variations.${index}.sku`}
                                      />
                                    </Table.Td>
                                    <Table.Td>
                                      <Input
                                        label='Preço'
                                        placeholder='Preencha o preço da variação'
                                        onChange={form.handleChange}
                                        value={
                                          form.values.variations[index].price
                                        }
                                        name={`variations.${index}.price`}
                                      />
                                    </Table.Td>
                                    <Table.Td>
                                      <Input
                                        label='Peso'
                                        placeholder='Preencha o peso da variação'
                                        onChange={form.handleChange}
                                        value={
                                          form.values.variations[index].weight
                                        }
                                        name={`variations.${index}.weight`}
                                      />
                                    </Table.Td>
                                    <Table.Td>
                                      <Input
                                        label='Estoque'
                                        placeholder='Preencha o estoque da variação'
                                        onChange={form.handleChange}
                                        value={
                                          form.values.variations[index].stock
                                        }
                                        name={`variations.${index}.stock`}
                                      />
                                    </Table.Td>
                                    <Table.Td>
                                      <Button
                                        onClick={() =>
                                          arrayHelpers.remove(index)
                                        }
                                      >
                                        X
                                      </Button>
                                    </Table.Td>
                                  </Table.Row>
                                ),
                              )}
                            </Table.Body>
                          </Table>
                        </div>
                      )
                    }}
                  />
                </FormikProvider>
              )}
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
