import React from 'react';

import FriendList from "./FriendList";
import FriendSearch from "./FriendSearch";
export default function Friends() {
    return (
        <div className="container-fluid h-100 bg-white px-2 py-3 px-sm-5 py-sm-4
        d-flex row-xl">
            <div className="col col-md-4 position-relative me-md-2">
                <div className="d-block d-md-none position-absolute end-0 btn-group">
                    <button className="btn btn-sm btn-primary">리스트</button>
                    <button className="btn btn-sm btn-outline-primary"
                    onClick={categoryChange1}>새 친구</button>
                </div>
                <FriendList />
            </div>
            <div className="col col-md-8 position-relative d-none d-md-block ps-md-4">
                <div className='d-flex justify-content-between'>
                    <h3 className='d-block d-md-none fw-bold'>New Friends</h3>
                    <div className="d-block d-md-none mb-2 btn-group">
                        <button className="btn btn-sm btn-outline-primary"
                        onClick={categoryChange2}>리스트</button>
                        <button className="btn btn-sm btn-primary">새 친구</button>
                    </div>
                </div>
                <FriendSearch />
            </div>
        </div>
    )
}


const categoryChange1 = (event:any) => {
    const t = event.target.parentNode.parentNode;
    const t2 = event.target.parentNode.parentNode.nextSibling;
    t.classList.toggle('d-none');
    t.classList.toggle('d-md-block');
    t2.classList.toggle('d-none');
    t2.classList.toggle('d-md-block');
}
const categoryChange2 = (event:any) => {
    const t = event.target.parentNode.parentNode.parentNode;
    const t2 = event.target.parentNode.parentNode.parentNode.previousSibling;
    t.classList.toggle('d-none');
    t.classList.toggle('d-md-block');
    t2.classList.toggle('d-none');
    t2.classList.toggle('d-md-block');
}