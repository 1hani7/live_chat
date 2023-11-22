import React, { useState, useEffect } from 'react';
import '../scrollbar.css';
import { chatDb } from '../../../../../firebaseConfig';
import { ref, onValue } from 'firebase/database';
import { useSelector, useDispatch } from 'react-redux';
import { nowChat, nowUid, nowName } from '../../../../../features/ChatSelectSlice';

export default function Chats() {

    interface chatList {
        createDay: string | number,
        players: [],
        uid: [],
        chats: [
            {
                contents: string,
                day: string
            },
        ],
    }

    const userId: string = sessionStorage.uid;
    const userName: string = sessionStorage.name;

    const opp = useSelector((state:any) => state.ChatSelect.uid)
    const room = useSelector((state:any) => state.ChatSelect.chatRoom)

    const dispatch = useDispatch();

    const [chatList, setChatList] = useState<chatList[]>([]);

    // 채팅 목록 가져오기
    const settingChatList = () => {
        const db = chatDb;
        const FindRef = ref(db, `chatRoom/`);
        onValue(FindRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                if (data) {
                    const title = Object.keys(data);
                    const t = title.filter((v) => v.indexOf(userId) > -1);
                    const temp: chatList[] = [];
                    t.forEach((v, i) => {
                        temp.push(data[v]);
                        setChatList(temp);
                    });
                } else {
                    console.error('no Data');
                }
            } else {
                console.error('no Snapshot');
            }
        });
    }

    useEffect(() => {
        settingChatList();
    }, []);




    // 채팅방 가져오기
    const enterChatRoom = (e: any) => {
        // 최상단의 value값 가져옴 => 클릭된 상대의 uid
        let target = e.target;
        while (target !== null) {
            if (target.value !== undefined && target.id !== undefined) {
                // 채팅방 이름 리덕스 저장
                dispatch(nowChat(target.value));
                dispatch(nowUid(target.value.split(userId).join('').split('&').join('')));
                dispatch(nowName(target.id));
                break;
            }
            target = target.parentNode;
        }
    }


    return (
        <div className="d-flex flex-row flex-xl-column" onWheel={scrollHorizontal0}>
            {
                chatList.map((v, idx) => (
                    <button className="btn btn-outline-light shadow-sm w-100 py-2 mb-xl-2
                    me-2 me-xl-0 d-flex align-items-center column-gap-3 border"
                        value={v.uid.join('&')}
                        id={v.players.filter(i => i !== userName)[1]}
                        onWheel={scrollHorizontal}
                        onClick={enterChatRoom}
                        key={idx}>
                        <div className="rounded-circle bg-primary flex-shrink-0"
                            style={{ width: '45px', height: '45px' }}
                            onWheel={scrollHorizontal2}>
                        </div>
                        <div className="d-flex flex-column flex-grow-1"
                            style={{ overflow: 'clip' }}
                            onWheel={scrollHorizontal2}>
                            <p className='fw-bolder text-body m-0 text-start'
                                onWheel={scrollHorizontal3}>
                                {v.players.filter(i => i !== userName)}
                            </p>
                            <small className='text-secondary text-start'
                                style={{ whiteSpace: 'nowrap', width: '100%', maxWidth: '100px' }}
                                onWheel={scrollHorizontal3}>
                                {v.chats[v.chats.length - 1].contents}
                            </small>
                        </div>
                        {/* <small className="rounded-circle bg-danger
                        fw-bolder text-white justify-self-end"
                        style={{width:'20px', height:'20px'}}
                        onWheel={scrollHorizontal2}>
                            {item.newAlert}
                        </small> */}
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