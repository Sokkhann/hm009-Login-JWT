'use client'
import { error } from 'console';
import React, { useState } from 'react'

export default function TestJWT() {

    const [accessToken, setAccessToken] = useState("");
    const [user, setUser] = useState(null);
    const [unauthorized, setUnauthorized] = useState(false)

    // this is method handle on login
    const handleLogin = async () => {
        const email = "gikico9088@centerf.com";
        const password = "admin@123"

        fetch(
            `http://localhost:3000/api/login`,
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({email, password})
            }
        )
        .then(res => res.json())
        .then(data => {
            console.log("Data in JWT Testing: ", data)
            setAccessToken(data.accessToken)
            setUser(data.user)
        }).catch(error => {
            console.log(error)
        })
        
    }

    // this is method handle on partial update
    const handlePartialUpdate = async () => {
        const body = {
            name: "New Product Updated By SK"
        };

        const res = await
        fetch(
            `https://store.istad.co/api/products/527`,
            {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${accessToken}`
                },
                body: JSON.stringify(body)
            }
        )

        if (res.status === 401) {
            setUnauthorized(true)
        }

        const data = await res.json();
        console.log("Data from partial update!", data);

    }

    // this is method handle refresh token
    const handleRefreshToken = async () => {
        fetch(`http://localhost:3000/api/refresh`, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({})
        })
        .then(res => res.json())
        .then(data => {
            console.log("Data from Refresh Token: ", data)
        })
        .catch(error => {
            console.log(error)
        })
    }
  return (
    <div>
        <main className='h-screen grid place-content-center'>
            <h1 className='text-5xl font-bold px-12'>
                Testing with JWT
            </h1>
            <button onClick={handleLogin} className='py-4 px-12 my-2 bg-red-800 rounded-lg text-gray-100 text-xl'>
                Login
            </button>
            <button onClick={handlePartialUpdate} className='py-4 px-12 my-2 bg-red-800 rounded-lg text-gray-100 text-xl'>
                Partial Update
            </button>
            {unauthorized && (
                <button onClick={handleRefreshToken} className='py-4 px-12 my-2 bg-red-800 rounded-lg text-gray-100 text-xl'>
                    Refresh Token
                </button>
            )}
        </main>
    </div>
  )
}
