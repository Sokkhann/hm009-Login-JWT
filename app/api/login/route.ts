// the serialize function is typically used to serialize cookie values into a string format 
// it is suitable for use in HTTP headers when setting cookies.
import { serialize } from "cookie";
// NextResponse is a class provided by Next.js for creating HTTP responses. 
// It's often used when defining custom server routes or middleware.
import { NextResponse } from "next/server";
// NextRequest is a type provided by Next.js representing an incoming HTTP request. 
// Importing it with import type indicates that you're importing the type information only, not the actual runtime value
import type { NextRequest } from "next/server";

// create a POST function for handle on posting
export async function POST(
    // param name req: type NextRequest
    req: NextRequest,
) {
    // create a variable body to store the req value from the endpoint
    // and convert to json file also
    const body = await req.json();
    // after parse into json we destructuring the body 
    // we consume that the body contains value of email and password that extract from body
    const {email, password} = body;

    const response = await fetch(
        `https://store.istad.co/api/user/login/`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
                { 
                    email: "gikico9088@centerf.com",
                    password: "admin@123"
                }
            ),
        });
        if (!response.ok) {
            return NextResponse.json(
                {
                    message: "Failed to login",
                },
                {
                    status: response.status,
                }
            );
        }
        const data = await response.json();
        const user = data?.user || null;
        const accessToken = data?.access_token || null;
        const refreshToken = data?.refresh_token || null;
    
        // Serialize the refresh token and set it as a cookie with
        // (httpOnly, secure, path, and sameSite options) in the response headers to the client-side
        const cookieName = process.env.COOKIE_REFRESH_TOKEN_NAME || "refresh";
        const serialized = serialize(cookieName, refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            sameSite: "lax", // or "strict" or "none"
        });
        return NextResponse.json({
            accessToken: accessToken,
            user: user,
         }, {
            status: response.status,
            headers: {
                "Set-Cookie": serialized,
            },
        });    
}