import React, { useState } from 'react'
import Link from 'next/link'
import { RiShoppingBag3Fill } from 'react-icons/ri'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'
import { useCart } from '../../lib/CartContext'
const Header = ({ categories }) => {
  const cart = useCart()
  const [menuCategories, setMenuCategories] = useState(false)
  return (
    <header className='text-gray-600 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
          <div className='bg-blue-500 px-2 py-2 rounded-full'>
            <RiShoppingBag3Fill color='#fff' size={22} />
          </div>
          <span className='ml-3 text-xl'>DevShop</span>
        </a>
        <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center relative'>
          <button
            onClick={() => setMenuCategories(!menuCategories)}
            className='rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center hover:text-gray-900'
            type='button'
          >
            Categorias <AiOutlineCaretDown size={12} className='ml-1' />
          </button>
          <div
            className={`${
              menuCategories ? 'absolute' : 'hidden'
            } top-10 left-0 z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow `}
          >
            <ul className='py-1' aria-labelledby='dropdownButton'>
              {categories?.map(category => (
                <li key={category.id} onClick={() => setMenuCategories(false)}>
                  <Link href={`/categoria/${category.slug}`}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <a className='mr-5 hover:text-gray-900'>Second Link</a>
          <a className='mr-5 hover:text-gray-900'>Third Link</a>
          <a className='mr-5 hover:text-gray-900'>Fourth Link</a>
        </nav>
        <button className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
          <Link href ='/cart'>
          <p> Carrinho {cart.cartSize}</p>
          </Link>
          <BsArrowRight className='ml-1' />
        </button>
      </div>
    </header>
  )
}

export default Header
