import React, { useState } from 'react';
import DropDown from "./ChatList/DropDown"
import Chats from "./ChatList/Chats"

export default function ChatList() {


    const scrollHorizontal = (event: any) => {
        if (event.deltaY > 0) {
            event.target.scrollLeft += 50;
        } else if (event.deltaY < 0) {
            event.target.scrollLeft -= 50;
        }
    }

    return (
        <div className="col-xl-4 d-flex flex-column">
            <div className="d-flex justify-content-between
            align-items-center">
                <h3 className="fw-bolder text-body">Chat</h3>
                <DropDown />
            </div>
            <div className="overflow-scroll mt-xl-3
            pe-3 pb-2 mb-2 mb-xl-0"
                onWheel={scrollHorizontal}
            >
                <Chats />
            </div>
        </div>
    )
}