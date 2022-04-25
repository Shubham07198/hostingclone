import React,{useEffect, useState} from 'react'

import {useParams} from "react-router-dom"

function ShopDetail() {
    const [shop,setShop]=useState({})
   const params=useParams()
    useEffect(() => {
        fetchItems()
    }, [])
    const fetchItems=async()=>{
        const data=await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${params?.id}`)
        const item= await data.json()
        setShop(item?.data?.item)
    }
    return (
        <div>
           <h1>{shop?.name}</h1>
        </div>
    )
}

export default ShopDetail
