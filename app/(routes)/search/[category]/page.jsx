"use client"
import BusinessList from '@/app/_components/BusinessList';
import GlobalApi from '@/app/_services/GlobalApi';
import React, { useEffect, useState, use } from 'react'
function BusinessByCategory({params}) {
  const {category}=use(params);
  const [businessList,setBusinessList]=useState([]);
   useEffect(() => {
    if (category) {
      getBusinessList(category);
    }
  }, [category]);
    const getBusinessList=()=>{
      GlobalApi.getBusinessByCategory(category)
      .then(resp=>{
        setBusinessList(resp?.businessLists);
        })
        }
        return (
          <div>
            <BusinessList title={category}
            businessList={businessList}/>
          </div>
          )
          }
          export default BusinessByCategory
