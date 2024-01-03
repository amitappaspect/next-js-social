import React from 'react'

export default function NotificationTR() {
  return (
    <tr>
        <td className='w-full'>
            <div className="flex items-center gap-3">
                <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                    <img src="https://daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                </div>
                </div>
                <div>
                <div className="font-bold">Hart Hagerty</div>
                <div className="text-md opacity-70">Just started following you</div>
                </div>
            </div>
        </td>
        <th>
        <button className="btn btn-ghost btn-xs">1d ago</button>
        </th>
    </tr>
  )
}
