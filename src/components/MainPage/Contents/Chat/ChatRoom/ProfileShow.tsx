import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import { db } from '../../../../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { chatDb } from '../../../../../firebaseConfig';
import { ref, remove } from 'firebase/database';


const ProfileShow:React.FC = () => {

    interface tmp{
        name: string;
        userId: string;
    }

    const [temp, setTemp] = useState<tmp[]>([
        { name: 'Not Selected...', userId: 'Not Selected...' }
    ]);
    const oppUid = useSelector((state: any) => state.ChatSelect.uid);

    const getOppInfo = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'usersDb'))
            const tmp: tmp[] = [];
            querySnapshot.forEach(async (document) => {
                if (document.data().uid === oppUid) {
                    tmp.push(
                        {
                            name: document.data()?.name,
                            userId: document.data()?.userId,
                        }
                    );
                    setTemp(tmp);
                    showBar();
                }
            })
        } catch (err) {
            console.error(err);
        }
    }

    const bar = useRef<HTMLDivElement>(null);
    const showBar = () => {
        if( bar.current ){
            bar.current.classList.remove('d-none');
            bar.current.classList.add('d-flex');
        }
    }

    const chatRoomName = useSelector((state: any) => state.ChatSelect.chatRoom);
    const eraseRoom = () => {
        if( window.confirm("정말 나가시겠습니까?\n* 채팅방은 사라지며 채팅내역도 저장되지 않습니다.") ){
            const dataRef = ref(chatDb, `chatRoom/${chatRoomName}`);
            remove( dataRef )
            .then(() => {
                alert('삭제 완료되었습니다.')
            })
            .catch((error) => {
                console.error('채팅방 삭제 실패', error);
            })
            window.location.reload();
        }else{

        }
    }

    useEffect(() => {
        getOppInfo();
    }, [oppUid])

    return (
        <div className="d-none align-items-center shadow-sm px-3 py-2 rounded"
        ref={bar}>
            {
                temp.map((item, idx) => (
                    <div className='d-flex w-100' key={idx}>
                        <div className="rounded-circle bg-primary
                        d-flex align-items-center justify-content-center"
                            style={{ width: '60px', height: '60px' }}>
                            <h1 className="text-white m-0 p-0">
                                {item.name.split('')[0]}
                            </h1>
                        </div>
                        <div className="d-flex flex-column ms-3">
                            <p className="p-0 m-0 fw-bold">
                                {item.name}
                            </p>
                            <p className="p-0 m-0 text-secondary">
                                {item.userId}
                            </p>
                        </div>
                        <button type='button'
                        className="btn text-secondary fs-5 p-0 ms-auto"
                        onClick={eraseRoom}>
                            <i className="bi bi-box-arrow-left"></i> EXIT
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default ProfileShow;