import React from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../firebaseConfig';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

export default function ExtraMenus() {
    const nav = useNavigate();

    return (
        <div className="flex-grow-1 d-flex align-items-end px-3">
            <a className='btn text-white text-decoration-none p-0
            d-flex align-items-center'
                onClick={async () => {
                    try {
                        const userId: string = sessionStorage.uid;
                        const querySnapshot = await getDocs(collection(db, 'usersDb'));
                        querySnapshot.forEach(async (document) => {
                            // 오프라인 전환
                            if (document.data().uid === userId) {
                                const userDocRef = doc(db, 'usersDb', document.data().uid);
                                await updateDoc(userDocRef, {
                                    online: false,
                                });
                            }
                        });
                        // 세션 스토리지 초기화(보안)
                        window.sessionStorage.setItem('uid', '');
                        window.sessionStorage.setItem('name', '');
                        nav('/');
                    } catch (err) {
                        console.error('오프라인 전환 에러 : ' + err);
                    }
                }}>
                <i className="bi bi-door-open me-2 fs-4"></i>
                <small>LOGOUT</small>
            </a>
        </div>
    )
}