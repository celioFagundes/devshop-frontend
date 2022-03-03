import React, { useEffect } from 'react'
import Layout from '../../../components/Layout'
import Title from '../../../components/Title'
import { useMutation, useQuery, useUpload } from '../../../lib/graphql'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import Button from '../../../components/Button'
import Alert from '../../../components/Alert'

const UPLOAD_PRODUCT_IMAGE = `
    mutation uploadProductImage($id: String!, $file: Upload!) {
        panelUploadProductImage(
        id: $id,
        file: $file
        ) 
    }
`
const DELETE_PRODUCT_IMAGE = `
  mutation deleteProductImage($id: String!, $url: String!) {
    panelDeleteProductImage(
      id : $id, 
      url: $url
    )
  }
`
const Images = () => {
  const router = useRouter()
  const { data, mutate } = useQuery(`
  query{
    getProductById(id: "${router.query.id}"){
        name
        images
      }
}`)
  const [deleteImageData, deleteProductImage] = useMutation(DELETE_PRODUCT_IMAGE)
  const [uploadData, uploadProductImage] = useUpload(UPLOAD_PRODUCT_IMAGE)
  const form = useFormik({
    initialValues: {
      id: router.query.id,
      file: '',
    },

    onSubmit: async values => {
      const product = {
        ...values,
        id: router.query.id,
      }
      const data = await uploadProductImage(product)
      if (data && !data.errors) {
        mutate()
      }
    },
  })
  const removeProductImage = (id, url) => async () => {
    await deleteProductImage({ id , url})
    mutate()
  }
  return (
    <Layout>
      <Title>
        Upload de imagens do produto :{' '}
        {data && data.getProductById && data.getProductById.name}
      </Title>
      <div className='mt-5'>
        <Button.LinkOutline href='/products/'>Voltar</Button.LinkOutline>
      </div>
      <div className='flex flex-col mt-5'>
        <div className='align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200 bg-white p-12'>
          <form onSubmit={form.handleSubmit}>
            <input
              type='file'
              name='file'
              onChange={evt => form.setFieldValue('file', evt.target.files[0])}
            />

            <Button type='submit'>Adicionar</Button>
          </form>
          {uploadData && !!uploadData.errors && (
            <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-2'>
              Ocorreu um erro ao salvar os dados
            </p>
          )}
          <section className='overflow-hidden text-gray-70 mt-5'>
        <div>
          <div className='flex flex-wrap  w-full -m-1 md:-m-2 '>
            {data?.getProductById?.images?.length === 0 &&
            <Alert>
              Nenhuma imagem neste produto
            </Alert>}
            {data?.getProductById?.images?.map((image,index) => (
              <div className='relative flex flex-wrap  bg-slate-400  px-1 py-2 mx-1 my-3 rounded justify-center hover:bg-slate-300' key = {image + index}>
                <div className='w-full md:p-2 flex items-center justify-center'>
                  <img src={image} alt={data.getProductById.name} style ={{maxHeight:'200px'}}/>
                </div>
                <button 
                onClick = {removeProductImage(router.query.id, image)}
                className='px-2 py-1 bg-red-500 text-white text-xs rounded-full hover:bg-red-400' 
                style ={{position: 'absolute', right: '5px', top: '10px', maxHeight:'35px'}}> 
                X
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
        </div>
      </div>
      
    </Layout>
  )
}
export default Images
