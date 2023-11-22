import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { chatDb } from '../../../../../firebaseConfig';
import { ref, onValue } from 'firebase/database';

const ChatShow: React.FC = () => {

    interface tmp {
        contents: string;
        day: string;
        user: string;
    }

    const myName = window.sessionStorage.name;

    // 스크롤 하단으로 두기
    const scrollTg = useRef<HTMLDivElement>(null);
    const scrollToBot = () => {
        if (scrollTg.current) {
            scrollTg.current.scrollTop = scrollTg.current.scrollHeight;
        }
    }
    const scrollToBotKey = (e:any) => {
        if( e.key === 'Enter' ){
            if (scrollTg.current) {
                scrollTg.current.scrollTop = scrollTg.current.scrollHeight;
            }
        }
    }


    // 채팅 가져오는 변수들
    const chatRoomName = useSelector((state: any) => state.ChatSelect.chatRoom);
    const oppUid = useSelector((state: any) => state.ChatSelect.uid);

    const [temp, setTemp] = useState<tmp[]>([{
        contents: '선택된 채팅방이 없습니다.', day: '???', user: 'alert'
    }]);

    // 채팅 가져오기
    const getChats = () => {
        const dataRef = ref(chatDb, `chatRoom/${chatRoomName}/chats`);
        onValue(dataRef, (snapShot) => {
            const data = snapShot.val();
            if (data) {
                setTemp(data);
                scrollToBot();
            }
        })
    }


    useEffect(() => {
        getChats();
        scrollToBot();
    }, [oppUid])

    useEffect(() => {
        scrollToBot();
        window.addEventListener('keydown', scrollToBotKey);
        return() => {
            window.removeEventListener('keydown', scrollToBotKey);
        }
    }, [])

    return (
        <div className="scrollToBottom overflow-scroll px-3 shadow-sm rounded flex-grow-1"
            ref={scrollTg}>
            {
                temp.map((v, idx) => (
                    <div className={
                        `d-flex align-items-center p-0 mb-4 column-gap-3
                        ${v.user === 'alert' ? 'w-100' : ''}
                        ${v.user === myName ? 'flex-row-reverse' : ''}`
                    } key={idx}>
                        <div className={`flex-shrink-0 rounded-circle bg-primary
                        d-flex align-items-center justify-content-center
                        ${v.user === 'alert' ? 'd-none' : ''}`}
                            style={{ width: '50px', height: '50px' }}>
                            <h2 className="text-white m-0 p-0">
                                {v.user.split('')[0]}
                            </h2>
                        </div>
                        <div className={
                            `rounded p-3 m-0
                            d-flex flex-column mw-75
                            ${v.user !== 'alert' ? 'shadow-sm' : 'w-100'}
                            ${v.user === myName ? 'bg-primary text-white' : ''}`
                        }
                        style={{width:'fit-content'}}>
                            <div className={`p-0 ${v.user === 'alert' ? 'text-center' : ''}`}>
                                {v.contents}
                            </div>
                            <small className={
                                `p-0 mt-1 text-secondary ms-auto
                                ${v.user === 'alert' ? 'd-none' : ''}
                                ${v.user === myName ? 'text-white-50' : ''}`}>
                                {v.day}
                            </small>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ChatShow;