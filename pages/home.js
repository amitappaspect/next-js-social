import React from 'react'
import BottomNavBar from './Components/BottomNavBar'
import TopNavBar from './Components/TopNavBar'
import FeedCard from './Components/FeedCard'
import StoryAvatar from './Components/StoryAvatar'

export default function home() {
  return (
    <div className='container'>
        <TopNavBar />
        <div className='px-4 py-3 flex gap-4 overflow-x-scroll hide-scrollbar'>
            <StoryAvatar />
            <StoryAvatar />
            <StoryAvatar />
            <StoryAvatar />
            <StoryAvatar />
            <StoryAvatar />
            <StoryAvatar />
            <StoryAvatar />
        </div>
        <center className='item-center p-4'>
            <FeedCard />
            <FeedCard />
            <FeedCard />
        </center>

        <BottomNavBar active="home" />
    </div>
  )
}
