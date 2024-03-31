'use client'
import React, { useEffect } from 'react'

function page({params}) {
  useEffect(()=>{
    console.log(params);
  })

  return (
      <div>Search</div>
  )
}

export default page