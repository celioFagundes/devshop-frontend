import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import Link from 'next/link'
const CartPreview = ({ items, addOne, removeOne, closeCart }) => {
  return (
    <div
      className={`${
        Object.keys(items).length > 0 && 'h-52 sm:w-90 overflow-scroll'
      } w-full  sm:w-auto absolute z-50 right-0 sm:right-12 top-16 bg-gray-50 px-3  py-3 rounded shadow-sm`}
    >
      <div className='border-b flex flex-row items-center justify-between py-2'>
        <p className='text-gray-900 font-medium '>Seu carrinho:</p>
        <Link href='/cart'>
          <a className='text-blue-600 font-medium text-sm hover:underline px-4  rounded'>
            Ir para o carrinho
          </a>
        </Link>
      </div>

      {Object.keys(items).length > 0 && (
        <div>
          {Object.keys(items).map(item => (
            <div className='py-2 border-b flex justify-start items-center '>
              <img
                className='h-full w-10 mr-2 bg-gray-900'
                src={items[item].images ? items[item].images[0]: 'https://dummyimage.com/40x50'}
              />
              <div className='flex flex-col items-start justify-start px-0 mx-0 w-full '>
                <Link href={`/produto/${items[item].slug}`} passHref>
                  <a
                    className='text-gray-800 font-medium text-sm hover:underline'
                    onClick={closeCart}
                  >
                    {items[item].name}
                  </a>
                </Link>

                <div className='flex items-center justify-start'>
                  <p className='text-gray-500 font-medium text-xs mr-5'>
                    Cor: {items[item].variation.color.colorName}
                  </p>
                  {(items[item].sizeType === 'clothes' ||
                    items[item].sizeType === 'shoes') && (
                    <p className='text-gray-500 font-medium text-xs mr-5'>
                      Tamanho: {items[item].variation.size}
                    </p>
                  )}
                  {items[item].voltage && (
                    <span className='text-gray-500 font-medium text-xs'>
                      Voltagem: {items[item].voltage}
                    </span>
                  )}
                </div>

                <p className='text-gray-400 font-medium text-sm'>
                  R$ {items[item].variation.price.toLocaleString('pt-br')} x{' '}
                  {items[item].qtd}{' '}
                  <span className='text-gray-800'>
                    R${' '}
                    {(
                      items[item].variation.price * items[item].qtd
                    ).toLocaleString('pt-br')}
                  </span>
                </p>
              </div>
              <div className='flex flex-row justify-items-end  items-center '>
                <button className='ml-5' onClick={() => addOne(item)}>
                  <AiOutlinePlus color='#000' />
                </button>
                <button className='ml-5' onClick={() => removeOne(item)}>
                  <AiOutlineMinus color='#000' />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {Object.keys(items).length === 0 && (
        <p className='text-gray-400 font-medium text-sm'>
          Seu carrinho está vazio
        </p>
      )}
    </div>
  )
}

export default CartPreview
