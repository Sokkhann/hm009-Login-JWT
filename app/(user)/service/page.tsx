"use client"
import CardProudcuts from '@/components/card/CardProduct'
import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/navigation'

// this is the endpoint where we can get the data
const ENDPOINT = "https://fakestoreapi.com/products/"

export default function Service() {
    // create useState to initialize and set to the products when it get from the endpoint
    const [products, setProducts] = useState([])
    // we need to create varaible for allow user navigete by using useRouter()
    const router = useRouter();


    // in client side we can use useEffect to perform fetching data
    useEffect(() => {
        fetch(ENDPOINT)
        .then(res=>res.json())
        .then(data => setProducts(data))
    }, [])

  return (
    <div className="h-screen mt-6 container mx-auto grid grid-cols-5 grid-flow-row gap-4">
      {products.map((product: any, index) => (
        <CardProudcuts
            onClick={()=>router.push(`/service/${product.id}`)}
            key={index}
            title={product.title}
            image={product.image}
            price={product.price}
        />
      ))}
    </div>
  )
}
