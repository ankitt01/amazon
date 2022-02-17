import Image from 'next/image'
import React from 'react'
import {
    MenuIcon, SearchIcon, ShoppingCartIcon
} from "@heroicons/react/outline"

const Header = () => {
  return (
    <header>
        <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
            <div className='mt-4 flex items-center flex-grow sm:flex-grow-0'>
                <Image src="https://links.papareact.com/f90" width={150} height={40} objectFit="contain" className='cursor-pointer'/>
            </div>
            <div className='hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500 cursor-pointer'>
                <input type="text" className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4'/>
                <SearchIcon className='h-12 p-4' />
            </div>
            <div className='text-white flex items-center text-xs space-x-6 mx-6'>
                <div className='link cursor-pointer hover:underline'>
                    <p>Hello Ankit</p>
                    <p className='font-bold md:text-sm'>Account & Lists</p>
                </div>
                <div className='link cursor-pointer hover:underline'>
                    <p>Returns</p>
                    <p className='font-bold md:text-sm'>& Orders</p>
                </div>
                <div className='relative flex items-center  link cursor-pointer hover:underline'>
                    <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>0</span>
                    <ShoppingCartIcon className='h-7 mx-2' />
                    <p className='hidden md:inline font-bold md:text-sm mt-3'>Basket</p>
                </div>
            </div>
        </div>
        
    </header>
  )
}

export default Header