import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function NavMenus() {
    const nav = useNavigate();

    const dt = [
        // { icon: `bi-house`, path: `/MainPage/Home`, title: `Home` },
        { icon: `bi-chat-dots`, path: `/MainPage/Chat`, title: `Chat` },
        { icon: `bi-people`, path: `/MainPage/Friends`, title: `Friends` },
        // { icon: `bi-bell`, path: `/MainPage/Notification`, title: `Notification` },
    ]
    
    return (
        <div className="my-3">
            {
                dt.map((item, idx) => (
                    <button onClick={() => nav(`${item.path}`)} key={idx}
                        className='
                        btn btn-primary w-100 text-start rounded-0 py-3 ps-4'>
                        <i className={`bi ${item.icon} pe-3`}></i>
                        <small>{item.title}</small>
                    </button>
                ))
            }
        </div>
    )
}