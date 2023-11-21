import React, { useState, useEffect } from 'react';
import ProfileThumbnail from "./ProfileThumbnail";
import ProfileMsg from "./ProfileMsg";
import ProfileNameInfo from "./ProfileNameInfo";
import ProfileName from "./ProfileName";
// import ProfilePassword from "./ProfilePassword";
import ProfileDel from "./ProfileDel"

import { db } from '../../../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const ProfileSetting:React.FC = () => {

    const userId: string = sessionStorage.uid;

    // 가져온 정보들 담아둘 변수
    const [name, setName] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [initId, setInitId] = useState<string>('');

    // 내 정보 가져오기
    const settingMsg = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'usersDb'));
            querySnapshot.forEach(async (document) => {
                if (document.data().uid === userId) {
                    setName(document.data().name);
                    setMessage(document.data().stMsg);
                    setInitId(document.data().userId);
                }
            });
        } catch (err) {
            alert('상태 메세지 가져오기에 실패했습니다.')
        }
    }
    
    useEffect(() => {
        settingMsg();
    }, []);

    return (
        <div className="w-100 h-100 bg-white rounded
        container-fluid h-100 px-5 py-4 overflow-scroll">
            <h3 className="fw-bold m-0 p-0">Profile</h3>
            <div className="border-bottom py-4
            d-flex justify-content-center">
                <div className="d-flex flex-column row-gap-3"
                style={{ width: '700px', maxWidth: '700px' }}>
                    <div className="d-flex flex-column flex-md-row align-items-center
                    column-gap-md-3 text-center text-md-start border p-3 rounded">
                        <ProfileThumbnail name={name} />
                        <ProfileNameInfo name={name} initId={initId} />
                    </div>
                    <ProfileMsg message={message} />
                    <ProfileName name={name} />
                    {/* <ProfilePassword /> */}
                    <ProfileDel />
                </div>
            </div>
        </div>
    );
}

export default ProfileSetting;