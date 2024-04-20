import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'


// Metadata for page about
export const metadata: Metadata = {
	title: "This is the contact page",
	description: "Practice with seo with next js practice 008",
}

export default function page() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <h1 className="text-6xl font-bold">CONTACT</h1>

      <div className="flex flex-col items-center">
        
        <img src="https://i.pinimg.com/564x/38/78/d0/3878d0a7acb6d60b6553324d66ce5b33.jpg" alt="Image" className="w-96 h-96 rounded-full mb-2"/>
        <div className="text-center">
          <h2 className="text-4xl font-bold">You Can Call Us 24/7</h2>
          <p className="text-gray-600">We are here to take care of you!</p>
      </div>
</div>
    </div>
  )
}
