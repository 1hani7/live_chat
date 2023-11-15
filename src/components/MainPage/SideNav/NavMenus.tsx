import React from 'react';
import { Link } from 'react-router-dom';


export default function NavMenus() {
    const dt = [
        { icon: `bi-house`, title: `Home` },
        { icon: `bi-chat-dots`, title: `Chat` },
        { icon: `bi-people`, title: `Friends` },
        { icon: `bi-bell`, title: `Notification` },
    ]
    
    return (
        <div className="my-3">
            {
                dt.map((item, idx) => (
                    <button className='
                        btn btn-primary w-100 text-start rounded-0 py-3 ps-4'>
                        <i className={`bi ${item.icon} pe-3`}></i>
                        <small>{item.title}</small>
                    </button>
                ))
            }
        </div>
    )
}