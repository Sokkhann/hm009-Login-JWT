import { Card } from 'flowbite-react'
import React from 'react'

type PropsType = {
  title: string,
  image: string,
  description: string
}

const ENDPOINT = "https://fakestoreapi.com/products"

// as in server side we create a method to get data from endpoint
// using async await

export default function CardDetail({title, image, description}: PropsType) {
  return (
    <Card className="max-w-sm p-4" imgSrc={image} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{title}
			</h5>
			<p className="font-normal text-gray-700 dark:text-gray-400">
				{description}
			</p>

    </Card>
  )
}

