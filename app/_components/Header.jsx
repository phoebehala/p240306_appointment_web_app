import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  const menuItems =[
    {
      id:1,
      title:'Home',
      path:'/'
    },
    {
      id:2,
      title:'Explore',
      path:'/explore'
    },
    {
      id:3,
      title:'Contact Us',
      path:'/contact'
    },
  ]
  return (
    <div>
      <div className='flex items-center justify-between p-4 shadow-sm'>
        <Link href='/'>
          <Image src="/logo.svg" alt='logo' width={240} height={60}></Image>
        </Link>
        <ul className='md:flex gap-8 hidden'>
          {menuItems.map((menuItem, index) =>(
            <Link href={menuItem.path}>
              <li className='hover:text-primary cursor-pointer transition ease-in-out '>{menuItem.title}</li>       
            </Link>
          ))}
        </ul>
        <Button>Get Started!</Button>
      </div>
      

    </div>
  )
}

export default Header

