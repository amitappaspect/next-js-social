import React from 'react'

export default function ProfileStats() {
  return (
    <div className='hide-scrollbar w-full'>
        <div className="stats stats-horizontal w-full">
  
        <div className="stat">
            <div className="stat-title">Posts</div>
            <div className="stat-value">310</div>
            {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
        </div>
        
        <div className="stat">
            <div className="stat-title">Followers</div>
            <div className="stat-value">420</div>
            {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
        </div>
        
        <div className="stat">
            <div className="stat-title">Following</div>
            <div className="stat-value">1200</div>
            {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>
        
        </div>
    </div>
  )
}
