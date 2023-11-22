import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { chatDb } from '../../../../../firebaseConfig';
import { ref, set, onValue } from 'firebase/database';


const ChatInput: React.FC = () => {
    const [chatWord, setChatWord] = useState<string>('');
    const chatRoomName = useSelector((state: any) => state.ChatSelect.chatRoom);
    const oppUid = useSelector((state: any) => state.ChatSelect.uid);
    const myName: string = window.sessionStorage.name;
    const inp = useRef<HTMLTextAreaElement>(null);

    // 채팅 내용 데이터베이스로 보내기
    const sendMyChat = (event: any) => {
        const date = new Date();
        const year: number = date.getFullYear();
        const month: number = date.getMonth() + 1;
        const day: number = date.getDate();
        const hour: number = date.getHours();
        const min: number = date.getMinutes();

        let nextIdx: number = 0;

        try {
            const dataRef = ref(chatDb, `chatRoom/${chatRoomName}/chats`);
            let isAbleToChat = true;
            onValue(dataRef, (snapShot) => {
                const data = snapShot.val();
                if (data) nextIdx = data.length;
                else{
                    // 채팅방이 없어진 경우
                    isAbleToChat = false;
                    alert('상대방이 채팅방을 나갔습니다.');
                    window.location.reload();
                }
            });
            if( isAbleToChat ){
                // 채팅방이 존재하는 경우
                set(ref(chatDb, `chatRoom/${chatRoomName}/chats/${nextIdx}`), {
                    contents: chatWord,
                    day: `${year}${month}${day} ${hour}:${min}`,
                    user: myName,
                });
            }else{
                // 채팅방이 없어진 경우
                alert('상대방이 채팅방을 나갔습니다.');
            };
        } catch (err) {
            console.error(err);
        }

    }

    return (
        <div className="w-100
        input-group"
            style={{ height: '60px' }}>
            <textarea className="form-control d-flex align-items-center
            h-100 pt-3"
                ref={inp}
                name="chatWrite" id="chatWrite"
                style={{ resize: 'none' }}
                onChange={(e) => setChatWord(e.target.value)}
                onKeyDown={(e: any) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        sendMyChat(e);
                        e.target.value = '';
                    }
                }}>
            </textarea>
            <button className="input-group-text btn btn-primary px-4 fs-4"
                onClick={(e: any) => {
                    sendMyChat(e);
                    e.target.previousSibling.value = '';
                    e.target.previousSibling.focus();
                }}>
                <i className="bi bi-send"></i>
            </button>
        </div>
    )
}

export default ChatInput;