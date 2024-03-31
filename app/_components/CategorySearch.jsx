"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

//icons
import { Search } from 'lucide-react'

import Globalapi from '../_utils/Globalapi'
import Link from 'next/link'

const CategorySearch = () => {

    const [categoryList, setCategoryList ] = useState([]);

    useEffect(()=>{
        getCategoryList()
    },[])

    const getCategoryList = ()=>{
        Globalapi.getCategory().then((res)=>{
            console.log(res);
            
            console.log(res.data.data[0].attributes?.Icon?.data[0]?.attributes?.name);
            setCategoryList(res.data.data)
        })
    }
  return (
    <div>
        <h2 className='font-bold text-xl tracking-wide'>Search Doctors</h2>
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Search" />
            <Button type="submit"><Search className='h-4 w-4 mr-2' />Search...</Button>
        </div>

        <div className='grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-6 '>
        {categoryList.map((item, index)=>index<6 && (
            <Link key={index} 
                  href={`/search/`+item.attributes.Name}
                  className="flex flex-col text-center gap-2 items-center p-5 bg-blue-50 m-2 rounded-lg cursor-pointer
            gap-2 hover:scale-110 transition-all ease-in-out">
                {/* <Image src={item.attributes?.Icon?.data?[0]?.attributes?.name}></Image> */}
                <label className='text-blue-600 text-sm'>{item.attributes?.Name}</label>
            </Link>
        ))}
        </div>


    </div>
  )
}

export default CategorySearch