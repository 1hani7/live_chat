import React from 'react';
import '../scrollbar.css';

export default function Chats() {
    interface temp {
        profileImg: string;
        name: string;
        recent: string;
        newAlert: number;
    }
    const temp:temp[] = [
        {
            profileImg: ``,
            name: `James`,
            recent: `Hello!`,
            newAlert: 1
        },
        {
            profileImg: ``,
            name: `Vannesa`,
            recent: `Testing!`,
            newAlert: 2
        },
        {
            profileImg: ``,
            name: `James`,
            recent: `Hello!`,
            newAlert: 1
        },
        {
            profileImg: ``,
            name: `Vannesa`,
            recent: `Testing!`,
            newAlert: 2
        },
        {
            profileImg: ``,
            name: `James`,
            recent: `Hello!`,
            newAlert: 1
        },
        {
            profileImg: ``,
            name: `Vannesa`,
            recent: `Testing!`,
            newAlert: 2
        },
        {
            profileImg: ``,
            name: `James`,
            recent: `Hello!`,
            newAlert: 1
        },
        {
            profileImg: ``,
            name: `Vannesa`,
            recent: `Testing!`,
            newAlert: 2
        },
        {
            profileImg: ``,
            name: `James`,
            recent: `Hello!`,
            newAlert: 1
        },
        {
            profileImg: ``,
            name: `Vannesa`,
            recent: `Testing!`,
            newAlert: 2
        },
        {
            profileImg: ``,
            name: `James`,
            recent: `Hello!`,
            newAlert: 1
        },
        {
            profileImg: ``,
            name: `Vannesa`,
            recent: `Testing!`,
            newAlert: 2
        },
        {
            profileImg: ``,
            name: `James`,
            recent: `Hello!`,
            newAlert: 1
        },
        {
            profileImg: ``,
            name: `Vannesa`,
            recent: `Testing!`,
            newAlert: 2
        },
        {
            profileImg: ``,
            name: `James`,
            recent: `Hello!`,
            newAlert: 1
        },
        {
            profileImg: ``,
            name: `Vannesa`,
            recent: `Testing!`,
            newAlert: 2
        },
    ]

    return (
        <div className="">
            {
                temp.map((item, idx) => (
                    <button className="btn btn-outline-light shadow-sm w-100 py-2 mb-2
                    d-flex align-items-center column-gap-3" key={idx}>
                        <div className="rounded-circle bg-primary"
                        style={{width:'45px', height:'45px'}}>
                        </div>
                        <div className="d-flex flex-column flex-grow-1">
                            <p className='fw-bolder text-body m-0 text-start'>
                                {item.name}
                            </p>
                            <small className='text-secondary text-start'>
                                {item.recent}
                            </small>
                        </div>
                        <small className="rounded-circle bg-danger
                        fw-bolder text-white justify-self-end"
                        style={{width:'20px', height:'20px'}}>
                            {item.newAlert}
                        </small>
                    </button>
                ))
            }
        </div>
    )
}