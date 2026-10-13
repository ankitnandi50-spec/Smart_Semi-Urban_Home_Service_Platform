"use client"
import GlobalApi from '@/app/_services/GlobalApi'
import { useSession } from 'next-auth/react'
import React, { useEffect, use, useState } from 'react'
import BusinessInfo from '../_components/BusinessInfo'
import SuggestedBusinessList from '../_components/SuggestedBusinessList'
import BusinessDescription from '../_components/BusinessDescription'


function BusinessDetail({params}) {
    const {data,status}=useSession
    const [business,setBusiness]=useState([]);
    const { businessId } = use(params);
    useEffect(()=>{
      params&&getbusinessById();
    },[businessId])
    const getbusinessById=()=>{
      GlobalApi.getBusinessById(businessId).then(resp=>{
        setBusiness(resp.businessList);
      })
    }
  return (
    <div className='py-8 md:py-20 px-10 md:px-36'>
    <BusinessInfo business={business}/>
    <div className='grid grid-cols-4 mt-16'>
      <div className='col-span-4 md:col-span-3'>
        <BusinessDescription business={business}/>
      </div>
      <div className='hidden md:block'>
        <SuggestedBusinessList business={business}/>
      </div>
    </div>
    

    </div>
  )
}

export default BusinessDetail