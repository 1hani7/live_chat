import React, { useState, useEffect } from 'react';
import './profileShape.css'
import { db } from '../../../../../firebaseConfig';
import { collection, getDocs, doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import { reFreshToggle } from '../../../../../features/SearchFriendSlice';

const FriendSearchList: React.FC = () => {

    interface userInfo {
        email: string | null
        name: string,
        online: boolean | null,
        stMsg: string | null,
        uid: string | null,
        userId: string | null
    }

    // 리렌더링 분기
    const dispatch = useDispatch();
    const reFresh = useSelector((state: any) => state.SearchFriend.isChanged);

    // 필터링 검색어
    const newFSearch = useSelector((state: any) => state.SearchFriend.newFSearch);

    const [temp, setTemp] = useState<userInfo[]>([]);
    const [friends, setFriends] = useState<string[]>([]);

    const userId: string = sessionStorage.uid;


    // 초기 가져오기
    const getUsers = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'usersDb'));
            const t: userInfo[] = [];
            querySnapshot.forEach(async (doc) => {
                if (doc.data().uid !== userId) {
                    const userData = doc.data() as userInfo;
                    t.push(userData);
                    setTemp(t);
                } else if (doc.data().uid === userId) {
                    setFriends(doc.data().friends);
                    // console.log(friends);
                }
            })
        } catch (err) {
            console.error('읽기 오류', err);
        }
    }
    useEffect(() => {
        getUsers();
    }, [reFresh])


    // 검색어 필터링
    useEffect(() => {
        if (newFSearch !== '') {
            const t: userInfo[] = [...temp].filter((item: any) => {
                return item.name?.indexOf(newFSearch) > -1;
            });
            setTemp(t);
        } else {
            getUsers();
        }
    }, [newFSearch])



    // 친구 추가 (UI변경)
    const addFriends = (e: any) => {
        e?.preventDefault();
        let t = e.target;

        t.classList.toggle('d-none');
        t.nextSibling.classList.toggle('d-none');

        // 데이터베이스
        addFriendList(e);
    }


    // 친구 추가 (데이터베이스)
    const addFriendList = async (e: any) => {
        try {
            const querySnapshot = await getDocs(collection(db, 'usersDb'));
            querySnapshot.forEach(async (document) => {
                if (document.data().uid === userId) {
                    const userDocRef = doc(db, 'usersDb', document.data().uid);
                    try {
                        const res = await updateDoc(userDocRef, { friends: arrayUnion(e.target.value) });
                    } catch (err) {
                        console.error('수정실패' + err);
                    } finally {
                        dispatch(reFreshToggle());
                    }
                }
            });
        } catch (err) {
            alert('친구 추가에 실패했습니다.')
        }
    }


    // 친구 지우기 (UI 변경)
    const deleteFriend = (e: any) => {
        e?.preventDefault();
        let t = e.target;

        if (window.confirm("이 친구를 삭제하시겠습니까?")) {
            t.classList.toggle('d-none');
            t.previousSibling.classList.toggle('d-none');

            // 데이터베이스
            removeFriendList(e);
        }
    }


    // 친구 지우기 (데이터베이스)
    const removeFriendList = async (e: any) => {
        try {
            const querySnapshot = await getDocs(collection(db, 'usersDb'));
            querySnapshot.forEach(async (document) => {
                if (document.data().uid === userId) {
                    const userDocRef = doc(db, 'usersDb', document.data().uid);
                    try {
                        const res = await updateDoc(userDocRef, { friends: arrayRemove(e.target.value) });
                    } catch (err) {
                        console.error('수정실패' + err);
                    } finally {
                        dispatch(reFreshToggle());
                    }
                }
            });
        } catch (err) {
            alert('친구 삭제에 실패했습니다.')
        }
    }


    return (
        <div className="overflow-scroll w-100 h-100 pe-0 pe-sm-3 m-0
        row row-cols-2 row-cols-xs-2 row-cols-sm-3 row-cols-lg-3
        row-cols-xl-3 row-cols-xxl-4 rounded-3 overflow-hidden">
            {
                temp.map((v, i) => (
                    <div className="btn btn-outline-light col p-2 py-3 py-sm-4 py-md-3 py-xxl-5
                    border-bottom border-right d-flex flex-column align-items-center row-gap-1 rounded-0"
                        style={{ height: 'fit-content', cursor: 'default' }}
                        key={i}>
                        <div className="bg-primary rounded-circle profile position-relative
                        d-flex align-items-center justify-content-center">
                            <h1 className='position-absolute p-0 m-0 text-white'>
                                {v.name.split('')[0]}
                            </h1>
                        </div>
                        <h6 className="text-body fw-bold m-0 d-flex
                        align-items-center column-gap-1">
                            {v.name}
                            <div className={`rounded-circle
                            ${v.online ? `bg-success` : `bg-danger`}`}
                                style={{ width: '10px', height: '10px' }}></div>
                        </h6>
                        <small className='p-0 m-0 text-secondary overflow-hidden'
                        style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', height: '20px' }}>{v.userId}</small>
                        <small className="text-center text-secondary w-100 overflow-hidden"
                            style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', height: '20px' }}>{v.stMsg || "상태메세지가 없습니다."}</small>
                        {
                            friends.includes(v.name) ?
                                <div className='w-100'>
                                    <button onClick={addFriends} value={v.name} className={`d-none btn btn-sm btn-outline-primary w-100 mt-2`}>친구 추가</button>
                                    <button onClick={deleteFriend} value={v.name} className={`btn btn-sm btn-outline-danger w-100 mt-2`}>친구 삭제</button>
                                </div> :
                                <div className='w-100'>
                                    <button onClick={addFriends} value={v.name} className={`btn btn-sm btn-outline-primary w-100 mt-2`}>친구 추가</button>
                                    <button onClick={deleteFriend} value={v.name} className={`d-none btn btn-sm btn-outline-danger w-100 mt-2`}>친구 삭제</button>
                                </div>
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default FriendSearchList;