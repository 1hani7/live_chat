import React, { useState, useEffect } from 'react';
import './accordion.css';
import { db } from '../../../../../firebaseConfig';
import { collection, getDocs, doc, updateDoc, arrayRemove } from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import { reFreshToggle } from '../../../../../features/SearchFriendSlice';

const FilterList: React.FC = () => {


    interface userInfo {
        email: string | null
        name: string,
        online: boolean | null,
        stMsg: string | null,
        uid: string | null,
        userId: string | null,
        friends?: string[],
    }

    const userId: string = sessionStorage.uid;

    const [reTemp, setReTemp] = useState<userInfo[]>([]);
    const [temp, setTemp] = useState<userInfo[]>([]);
    const [friendsArr, setFriendsArr] = useState<string[]>([]);

    // 리렌더링 분기
    const dispatch = useDispatch();
    const reFresh = useSelector((state: any) => state.SearchFriend.isChanged);

    // 검색어 slice 변수
    const nowFSearch = useSelector((state: any) => state.SearchFriend.nowFSearch);


    // 친구 목록 가져오기
    const settingFriendsListOne = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'usersDb'));
            querySnapshot.forEach((document) => {
                if (document.data().uid === userId) {
                    setFriendsArr(document.data().friends);
                }
            });
        } catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {
        settingFriendsListOne();
    }, [reFresh])


    // 가져온 친구 목록으로 필터링하기
    const settingFriendsListTwo = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'usersDb'));
            const promises: Promise<userInfo>[] = [];
            querySnapshot.forEach((document) => {
                if (friendsArr.includes(document.data().name)) {
                    const userData = document.data() as userInfo;
                    promises.push(Promise.resolve(userData));
                }
            });
            const friendsData = await Promise.all(promises);
            setTemp(friendsData);
            setReTemp(friendsData);
        } catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {
        settingFriendsListTwo();
    }, [friendsArr])



    // 검색어로 필터링하기
    useEffect(() => {
        if (nowFSearch !== '') {
            const t: userInfo[] = [...temp].filter((v: any) => {
                return v.name?.indexOf(nowFSearch) > -1;
            })
            setTemp(t);
        } else {
            setTemp(reTemp);
        }
    }, [nowFSearch])



    // 친구 지우기 (UI변경)
    const deleteFriend = (e: any) => {
        e?.preventDefault();
        let t = e.target.value;

        if (window.confirm("이 친구를 삭제하시겠습니까?")) {
            const tmp: userInfo[] = [...temp].filter((v: any) => {
                return v.name?.indexOf(t) === -1;
            })
            setTemp(tmp);

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
        <div className="d-flex flex-column">
            {
                temp.map((v, i) => (
                    <div className="accordion m-0 p-0 mb-2 border rounded
                    d-flex align-items-center" id={`accordionParent-${i}`} key={i}>
                        <div className='accordion-item w-100 shadow-sm border-0'>
                            <div className='accordion-header'>
                                <button className='accordion-button bg-white collapsed p-2 px-3' type='button'
                                    data-bs-toggle='collapse' data-bs-target={`#collapse-${i}`}
                                    aria-expanded='false' aria-controls={`collapse-${i}`}
                                    style={{ border: 'none', boxShadow: 'none' }}>
                                    <div className="flex-shrink-0 bg-primary rounded-circle
                                    d-flex align-items-center justify-content-center"
                                        style={{ width: '45px', height: '45px' }}>
                                        <h3 className='position-absolute p-0 m-0 text-white'>
                                            {v.name.split('')[0]}
                                        </h3>
                                    </div>
                                    <div className="d-flex flex-column text-body fw-bold ps-3">
                                        <p className="m-0 text-start">{v.name}</p>
                                        <small className="m-0 w-100 text-start text-secondary fw-normal">
                                            {v.stMsg || '상태메세지가 없습니다.'}
                                        </small>
                                    </div>
                                    <div className={
                                        `ms-auto rounded-circle flex-shrink-0
                                        ${v.online ? `bg-success` : `bg-danger`}`
                                    }
                                        style={{ width: '15px', height: '15px' }}></div>
                                </button>
                            </div>
                            <div id={`collapse-${i}`} className="accordion-collapse collapse"
                                data-bs-parent={`accordionParent-${i}`}>
                                <div className='accordion-body btn-group w-100 rows'>
                                    <button className="btn btn-primary col-9">1:1 채팅하기</button>
                                    <button className="btn btn-outline-danger" value={v.name}
                                        onClick={deleteFriend}>삭제</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default FilterList;