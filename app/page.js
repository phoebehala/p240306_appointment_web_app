"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import Hero from "./_components/Hero";

import Globalapi from './_utils/Globalapi';

export default function Home() {

  const [doctorList, setDoctorList ] = useState([]);

  useEffect(()=>{
    getDoctorList()
  },[])

  const getDoctorList = ()=>{
      Globalapi.getDoctorList().then((res)=>{
          console.log(res);
          
          //console.log(res.data.data[0].attributes?.Icon?.data[0]?.attributes?.name);
          setDoctorList(res.data.data)
          console.log(doctorList);
      })
  }

  return (
    <div>
      <Hero/>
      <CategorySearch/>
      <DoctorList doctorList={doctorList}/>
    </div>
  );
}
