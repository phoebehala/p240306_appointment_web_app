"use client"
import React, { useEffect, useState} from 'react'
import Globalapi from '@/app/_utils/GlobalApi'
import Link from 'next/link'


// shadcn
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import { useParams, usePathname } from 'next/navigation'
  

function CategoryList() {

    const [categoryList, setCategoryList ] = useState([]);

    const params = usePathname()
    console.log(params);
    const category=params.split('/')[2];

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
    <div className='h-screen fixed mt-5 flex flex-col '>
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList  className="overflow-visible">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
                {categoryList?.map((item, index)=>(
                     <CommandItem key={index}>
                        <Link  href={'/search/' } 
                                className={`p-2 flex gap-2
                                            text-[14px]
                                            text-blue-600
                                            items-center
                                            rounded-md cursor-pointer w-full
                                          ${category==item.attributes.Name&&'bg-blue-100'}  
                                        `}>
                            <label>{item.attributes?.Name}</label>
                        </Link>
                     </CommandItem>
                ))}
            </CommandGroup>
            <CommandSeparator />

        </CommandList>
    </Command>

    </div>
  )
}

export default CategoryList
