import React from 'react'
import TopNavBar from './Components/TopNavBar'
import BottomNavBar from './Components/BottomNavBar'
import ProfileStats from './Components/ProfileStats'
import PostImage from './Components/PostImage'

export default function profile() {
  return (
    <div className='container'>
        <TopNavBar />
        <div className="card w-full shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Shoes" className="rounded-xl w-40 h-40" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Jacky Chan</h2>
                <p>Belive in Karma 👋🤚🖐✋🖖👌🤌🤏✌️</p>
                <button className="btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>

                Edit
                </button>
                <div className="divider"></div>

                <ProfileStats />

                <div className="divider"></div>


                <div className='grid grid-cols-4 gap-2'>
                    <PostImage />
                    <PostImage />
                    <PostImage />
                    <PostImage />
                    <PostImage />
                    <PostImage />
                    <PostImage />
                    <PostImage />
                    <PostImage />
                </div>
                <div className="card-actions">
                </div>
            </div>
        </div>
        <BottomNavBar active="profile" />
    </div>
  )
}
