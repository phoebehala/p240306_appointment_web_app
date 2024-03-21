"use client"
import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

//icons
import { Search } from 'lucide-react'
import Globalapi from '../_utils/Globalapi'

const CategorySearch = () => {

    useEffect(()=>{
        getCategoryList()
    },[])

    const getCategoryList = ()=>{
        Globalapi.getCategory().then((res)=>{
            console.log(res);
        })
    }
  return (
    <div>
        <h2 className='font-bold text-xl tracking-wide'>Search Doctors</h2>
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Search" />
            <Button type="submit"><Search className='h-4 w-4 mr-2' />Search...</Button>
        </div>
    </div>
  )
}

export default CategorySearch