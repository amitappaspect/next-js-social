import Link from 'next/link'
import React from 'react'

export default function TopNavBar() {
  return (
    <div className="navbar bg-primary text-white">
        <div className="flex-1 w-full text-center justify-center">
            <Link href="home" className="text-center text-xl font-semibold">Daily Social</Link>
        </div>
        <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-primary rounded-box w-52 text-white">
                <li>
                <Link href="profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                </Link>
                </li>
                <li><a>Settings</a></li>
                <li><Link href="login">Logout</Link></li>
            </ul>
            </div>
        </div>
        </div>
  )
}
