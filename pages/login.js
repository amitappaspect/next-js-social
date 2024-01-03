import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function login() {
  return (
    <div className='mt-10'>
        <div className="card w-96 bg-base-100 w-full">
            <figure className="px-10 pt-10">
                <img src="https://cdn.iconscout.com/icon/free/png-512/free-nucleo-3521613-2945057.png?f=webp&w=256" alt="Shoes" className="rounded-xl w-24" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Login</h2>
                <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs" />
                <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                <div className="card-actions mt-3">
                <Link href="home"><button className="btn btn-primary">Login</button></Link>
                    <Link href="signup"><button className="btn btn-primary">Signup</button></Link>
                    {/* <Link href="/">Back to home</Link> */}
                </div>
            </div>
        </div>
    </div>
  )
}
