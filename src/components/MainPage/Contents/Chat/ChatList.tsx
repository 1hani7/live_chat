import React, { useState, useEffect } from 'react';
import DropDown from "./ChatList/DropDown"
import Chats from "./ChatList/Chats"

export default function ChatList() {

    // 작은 화면에서 채팅 목록 가로 스크롤 가능하게
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
            <div className="overflow-scroll mt-xl-2
            pe-3 pb-2 mb-2 mb-xl-0"
                onWheel={scrollHorizontal}
            >
                <Chats />
            </div>
        </div>
    )
}