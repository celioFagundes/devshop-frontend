import React, { useState } from 'react'
import Menu from '../Menu'
import {MdCategory, MdHomeFilled} from 'react-icons/md'
import {AiOutlineMenu} from 'react-icons/ai'
import {IoMdNotificationsOutline} from 'react-icons/io'
import { useQuery } from '../../lib/graphql'
const GET_ME = `
  query{
  panelGetMe{
    id
    name
    email
  }
}`
const Layout = ({children}) => {
  const { data, error, mutate } = useQuery(GET_ME)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [notificationOpen, setNotificationOpen] = useState(false)

  const openDropdown = () => {
    console.log('opening')
    setDropdownOpen(!dropdownOpen)
  }
  return (
    <div>
      <div
        x-data='{ sidebarOpen: false }'
        className='flex h-screen bg-gray-200'
      >
        <div
          className={
            'fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden' +
            sidebarOpen
              ? 'block'
              : 'hidden'
          }
          onClick={() => setSidebarOpen(false)}
        ></div>

        <div
          className={
            sidebarOpen
              ? 'translate-x-0 ease-out'
              : '-translate-x-full ease-in' +
                'fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0'
          }
        >
          <Menu.Brand>DevShop</Menu.Brand>
          <Menu.Nav>
            <Menu.NavItem href='/' Icon ={MdHomeFilled}>Home</Menu.NavItem>
            <Menu.NavItem href='/categories' Icon ={MdCategory}>Categories</Menu.NavItem>
            <Menu.NavItem href='/products' Icon ={MdCategory}>Products</Menu.NavItem>
            <Menu.NavItem href='/brands' Icon ={MdCategory}>Brands</Menu.NavItem>
            <Menu.NavItem href='/users' Icon ={MdCategory}>Users</Menu.NavItem>
          </Menu.Nav>
        </div>
        <div className='flex-1 flex flex-col overflow-hidden'>
          <header className='flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600'>
            <div className='flex items-center'>
              <button
                onClick={() => setSidebarOpen(true)}
                className='text-gray-500 focus:outline-none lg:hidden'
              >
                <AiOutlineMenu/>
              </button>
            </div>

            <div className='flex items-center'>
              <div x-data='{ notificationOpen: false }' className='relative'>
                <button
                  onClick={() => setNotificationOpen(!notificationOpen)}
                  className='flex mx-4 text-gray-600 focus:outline-none'
                >
                  <IoMdNotificationsOutline size = {24}/>
                </button>

                <div
                  onClick={() => setNotificationOpen(false)}
                  className={
                    notificationOpen
                      ? 'block'
                      : '' + 'fixed inset-0 h-full w-full z-10'
                  }
                  style={{ display: 'none' }}
                ></div>

                <div
                  className={
                    notificationOpen
                      ? 'block'
                      : '' +
                        'fixed inset-0 h-full w-full z-10' +
                        'absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl overflow-hidden z-10'
                  }
                  style={{ width: '20rem', display: 'none' }}
                >
                  <a
                    href='#'
                    className='flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2'
                  >
                    <img
                      className='h-8 w-8 rounded-full object-cover mx-1'
                      src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80'
                      alt='avatar'
                    />
                    <p className='text-sm mx-2'>
                      <span className='font-bold' href='#'>
                        Sara Salah
                      </span>{' '}
                      replied on the
                      <span className='font-bold text-indigo-400' href='#'>
                        Upload Image
                      </span>
                      artical . 2m
                    </p>
                  </a>
                  <a
                    href='#'
                    className='flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2'
                  >
                    <img
                      className='h-8 w-8 rounded-full object-cover mx-1'
                      src='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80'
                      alt='avatar'
                    />
                    <p className='text-sm mx-2'>
                      <span className='font-bold' href='#'>
                        Slick Net
                      </span>{' '}
                      start following you . 45m
                    </p>
                  </a>
                  <a
                    href='#'
                    className='flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2'
                  >
                    <img
                      className='h-8 w-8 rounded-full object-cover mx-1'
                      src='https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80'
                      alt='avatar'
                    />
                    <p className='text-sm mx-2'>
                      <span className='font-bold' href='#'>
                        Jane Doe
                      </span>{' '}
                      Like Your reply on
                      <span className='font-bold text-indigo-400' href='#'>
                        Test with TDD
                      </span>
                      artical . 1h
                    </p>
                  </a>
                  <a
                    href='#'
                    className='flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2'
                  >
                    <img
                      className='h-8 w-8 rounded-full object-cover mx-1'
                      src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=398&amp;q=80'
                      alt='avatar'
                    />
                    <p className='text-sm mx-2'>
                      <span className='font-bold' href='#'>
                        Abigail Bennett
                      </span>
                      start following you . 3h
                    </p>
                  </a>
                </div>
              </div>

              <div className='relative'>
                <button
                  onClick={openDropdown}
                  className='relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none'
                >
                  <img
                    className='h-full w-full object-cover'
                    src='https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80'
                    alt='Your avatar'
                  />
                </button>

                <div
                  onClick={() => setDropdownOpen(false)}
                  className={
                    'fixed inset-0 h-full w-full z-10' + dropdownOpen
                      ? 'block'
                      : ''
                  }
                  style={{ display: 'none' }}
                ></div>

                <div
                  className='absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10 '
                  style={{ display: 'none' }}
                >
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white'
                  >
                    Profile
                  </a>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white'
                  >
                    Products
                  </a>
                  <a
                    href='/login'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white'
                  >
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </header>
          <main className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-200'>
            <div className='container mx-auto px-6 py-8'>
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Layout
