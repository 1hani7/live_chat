import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ExtraMenus(){
    const nav = useNavigate();

    return(
        <div className="flex-grow-1 d-flex align-items-end px-3">
            <a className='btn text-white text-decoration-none p-0
            d-flex align-items-center'
            onClick={() => {
                nav('/');
            }}>
                <i className="bi bi-door-open me-2 fs-4"></i>
                <small>LOGOUT</small>
            </a>
        </div>
    )
}