import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export default function Profile() {
    const Public = process.env.PUBLIC_URL;
    const nav = useNavigate();
    const userId:string = sessionStorage.uid;
    const [userName, setUserName] = useState<string>('Loading...');
    const [initName, setInitName] = useState<string>('Lodaing...');
    const [isOnline, setOnline] = useState<boolean | null>(null);

    const getUser = async (userId: string) => {
        try {
            const querySnapshot = await getDocs(collection(db, 'usersDb'));
            querySnapshot.forEach((doc) => {
                if( doc.data().uid === userId ){
                    setUserName(doc.data()?.name);
                    setInitName(doc.data()?.userId);
                    setOnline(doc.data()?.online);
                }
            });
        } catch (err) {
            console.error('읽기 오류', err);
        }
    }

    useEffect(() => {
        getUser(userId);
    }, [userName]);

    return (
        <button className="btn px-4 d-flex column-gap-3
        align-items-center" style={{ border: 'none' }}
            onClick={() => nav('/MainPage/ProfileSetting')}>
            <div className='rounded-circle overflow-hidden bg-white'
                style={{
                    backgroundImage: `url(${Public}/images/basicProfile.png)`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                    width: `50px`, height: `50px`,
                }}>
            </div>
            <h6 className='text-white my-1 text-start'>
                {userName}
                <br />
                <small className='text-white-50'>{initName}</small>
            </h6>
            <div className={`rounded-circle flex-shrink-0 ms-auto ${isOnline? `bg-info` : `bg-danger`}`}
            style={{width:'10px', height:'10px'}}></div>
        </button>
    )
}