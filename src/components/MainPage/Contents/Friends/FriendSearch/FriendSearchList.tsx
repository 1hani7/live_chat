import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './profileShape.css'
import { db } from '../../../../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

function FriendSearchList() {

    interface userInfo {
        email: string | null
        name: string | null,
        online: boolean | null,
        stMsg: string | null,
        uid: string | null,
        userId: string | null
    }

    const newFSearch = useSelector((state: any) => state.SearchFriend.newFSearch);

    const [temp, setTemp] = useState<userInfo[]>([]);

    const userId = sessionStorage.uid;

    const getUsers = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'usersDb'));
            const t: userInfo[] = [];
            querySnapshot.forEach((doc) => {
                if (doc.data().uid !== userId) {
                    const userData = doc.data() as userInfo;
                    t.push(userData);
                }
            })
            setTemp(t);
        } catch (err) {
            console.error('읽기 오류', err);
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    useEffect(() => {
        if( newFSearch !== '' ){
            const t: userInfo[] = [...temp].filter((item:any) => {
                return item.name?.indexOf(newFSearch) > -1;
            });
            setTemp(t);
        }else{
            getUsers();
        }
    }, [newFSearch])

    return (
        <div className="overflow-scroll w-100 pe-3 m-0 h-100
        row row-cols-2 row-cols-sm-3 row-cols-md-2 row-cols-lg-3
        row-cols-xl-3 row-cols-xxl-4 rounded-3 overflow-hidden">
            {
                temp.map((v, i) => (
                    <div className="btn btn-outline-light col p-2 py-3 py-sm-4 py-md-3 py-xxl-5
                    border-bottom border-right d-flex flex-column align-items-center row-gap-1 rounded-0"
                        style={{ height: 'fit-content' }}
                        key={i}>
                        <div className="bg-primary rounded-circle profile"></div>
                        <h6 className="text-body fw-bold m-0 d-flex
                        align-items-center column-gap-1">
                            {v.name}
                            <div className={`rounded-circle
                            ${v.online ? `bg-success` : `bg-danger`}`}
                                style={{ width: '10px', height: '10px' }}></div>
                        </h6>
                        <small className='p-0 m-0 text-secondary'>@name</small>
                        <small className="text-center text-secondary w-100"
                        style={{whiteSpace:'nowrap', textOverflow:'ellipsis', height:'15px'}}>{v.stMsg}</small>
                        {
                            i % 3 !== 0 ? <button className='btn btn-sm btn-outline-primary w-100 mt-2'>친구 추가</button> :
                                <button className='btn btn-sm btn-outline-danger w-100 mt-2'>친구 삭제</button>
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default FriendSearchList;