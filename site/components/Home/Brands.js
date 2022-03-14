import Link from 'next/link'
import React from 'react'

const Brands = ({ brands }) => {
  return (
    <section className='text-gray-600 body-font bg-white shadow-sm'>
      <div className='container px-5 py-20 mx-auto'>
        <div className='flex flex-col text-center w-full mb-10'>
          <h1 className='sm:text-3xl text-2xl uppercase font-medium title-font mb-4 text-gray-900'>
            Nossas marcas
          </h1>
          <p className='lg:w-2/3 mx-auto text-xl leading-relaxed'>
            As melhores marcas você encontra aqui no DevShop
          </p>
        </div>
        <div className='flex flex-wrap m-4 '>
          {brands.map(brand => (
            <div className='lg:w-1/4 sm:w-1/2 p-4 my-2 ' key={brand.id}>
              <Link href = {`/marca/${brand.slug}`}>
                <div className='flex relative'>
                  <img
                    alt={brand.name}
                    className='absolute inset-0 w-full h-32  object-contain'
                    src={brand.logo}
                  />
                  <div className='px-8 py-10 h-32 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 text-center transition-all ease-in-out cursor-pointer'>
                    <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                      {brand.name}
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands
