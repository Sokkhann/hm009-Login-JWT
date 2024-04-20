import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'

// Metadata for page about
export const metadata: Metadata = {
	title: "This is the about page",
	description: "Practice with seo with next js practice 008",
}

export default function page() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <h1 className="text-6xl font-bold">ABOUT</h1>

      <div className="flex items-center">
        <img 
          src="https://i.pinimg.com/564x/52/78/65/527865e1176c23b58bfe9925e6026fac.jpg" 
          alt="Image"
          className="w-96 h-auto mr-8 rounded-lg"/>

        <div>
          <h2 className="text-4xl font-bold">Here is Our Story</h2>
          <p className="text-gray-600">
            In the neon-lit streets of Tokyo the Yakuzas influence runs deep. <br />
            Their whispered deals and hidden alliances shape the city underworld. <br />
            Among the cherry blossoms, a young recruit rises eager to prove his loyalty. <br />
            But in the shadows rival factions plot and betrayal lurks around every corner.
          </p>
        </div>
      </div>
    </div>
  )
}
