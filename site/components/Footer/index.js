import { RiShoppingBag3Fill } from 'react-icons/ri'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='text-white body-font bg-blue-800'>
      <div className='container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col'>
        <Link href = '/' passHref>       
        <a className='flex title-font font-medium items-center md:justify-start justify-center text-white'>
        <div className='bg-blue-500 px-2 py-2 rounded-full'>
            <RiShoppingBag3Fill color='#fff' size={22} />
          </div>
          <span className='ml-3 text-xl'>DevShop</span>
        </a>
        </Link>
        <p className='text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
          © {new Date().getFullYear()} DevShop
        </p>
      </div>
    </footer>
  )
}

export default Footer
