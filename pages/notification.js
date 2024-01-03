import React from 'react'
import TopNavBar from './Components/TopNavBar'
import BottomNavBar from './Components/BottomNavBar'
import NotificationTR from './Components/NotificationTR'

export default function notification() {
  return (
    <div className='container'>
        <TopNavBar />
        <div className='p-4'>
            <div role="alert" className="alert alert-warning mt-3 w-auto hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <span>Warning: This page is under construction!</span>
            </div>
        </div>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                <tr>
                    <th>Notifications</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <NotificationTR />
                <NotificationTR />
                <NotificationTR />
                <NotificationTR />
                <NotificationTR />
                <NotificationTR />
                <NotificationTR />
                <NotificationTR />
                <NotificationTR />
                <NotificationTR />
                <NotificationTR />
                <NotificationTR />
                </tbody>    
            </table>
        </div>
        <BottomNavBar active="notification" />
    </div>
  )
}
