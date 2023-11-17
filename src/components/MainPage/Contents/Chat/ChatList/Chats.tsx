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
        {
            profileImg: ``,
            name: `Vannesa`,
            recent: `Testing!`,
            newAlert: 2
        },
        {
            profileImg: ``,
            name: `Vannesa`,
            recent: `Testing!`,
            newAlert: 2
        },
    ]

    

    return (
        <div className="d-flex flex-row flex-xl-column" onWheel={scrollHorizontal0}>
            {
                temp.map((item, idx) => (
                    <button className="btn btn-outline-light shadow-sm w-100 py-2 mb-xl-2
                    me-2 me-xl-0 d-flex align-items-center column-gap-3"
                    onWheel={scrollHorizontal}
                    key={idx}>
                        <div className="rounded-circle bg-primary"
                        style={{width:'45px', height:'45px'}}
                        onWheel={scrollHorizontal2}>
                        </div>
                        <div className="d-flex flex-column flex-grow-1"
                        onWheel={scrollHorizontal2}>
                            <p className='fw-bolder text-body m-0 text-start'
                            onWheel={scrollHorizontal3}>
                                {item.name}
                            </p>
                            <small className='text-secondary text-start'
                            onWheel={scrollHorizontal3}>
                                {item.recent}
                            </small>
                        </div>
                        <small className="rounded-circle bg-danger
                        fw-bolder text-white justify-self-end"
                        style={{width:'20px', height:'20px'}}
                        onWheel={scrollHorizontal2}>
                            {item.newAlert}
                        </small>
                    </button>
                ))
            }
        </div>
    )
}

const scrollHorizontal0 = (event: any) => {
    if (event.deltaY > 0) {
        event.target.parentNode.scrollLeft += 50;
    } else if (event.deltaY < 0) {
        event.target.parentNode.scrollLeft -= 50;
    }
}
const scrollHorizontal = (event: any) => {
    if (event.deltaY > 0) {
        event.target.parentNode.parentNode.scrollLeft += 50;
    } else if (event.deltaY < 0) {
        event.target.parentNode.parentNode.scrollLeft -= 50;
    }
}
const scrollHorizontal2 = (event: any) => {
    if (event.deltaY > 0) {
        event.target.parentNode.parentNode.parentNode.scrollLeft += 50;
    } else if (event.deltaY < 0) {
        event.target.parentNode.parentNode.parentNode.scrollLeft -= 50;
    }
}
const scrollHorizontal3 = (event: any) => {
    if (event.deltaY > 0) {
        event.target.parentNode.parentNode.parentNode.parentNode.scrollLeft += 50;
    } else if (event.deltaY < 0) {
        event.target.parentNode.parentNode.parentNode.parentNode.scrollLeft -= 50;
    }
}