import React, { useState, useEffect } from 'react';
import { db } from '../../../../firebaseConfig';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';

type msgProp = {
    message: string;
}

const ProfileMsg = ({message}:msgProp) => {

    const userId: string = sessionStorage.uid;
    const [initMessage, setInitMessage] = useState<string>('');
    const [newMessage, setNewMessage] = useState<string>('');

    // 상태메세지 바꾸기
    const changeStMsg = async (event:any) => {
        event?.preventDefault();
        try {
            const querySnapshot = await getDocs(collection(db, 'usersDb'));
            querySnapshot.forEach(async (document) => {
                if (document.data().uid === userId) {
                    const userDocRef = doc(db, 'usersDb', document.data().uid);
                    try{
                        const res = await updateDoc(userDocRef, { stMsg: newMessage });
                        setInitMessage(newMessage);
                    }catch(err){
                        console.error('수정실패' + err);
                    }finally{
                        alert('상태메세지 변경이 완료되었습니다.')
                    }
                }
            });
        } catch (err) {
            alert('상태 메세지 수정에 실패했습니다.')
        }
    }


    useEffect(()=>{
        if( message === '' ){
            setInitMessage('내 상태 메세지를 입력해보세요.');
        }else{
            setInitMessage(message);
        }
    },[message]);

    return (
        <form className="">
            <textarea className="w-100 p-3 rounded border"
                placeholder={initMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                style={{ resize: 'none', outline: 'none' }}></textarea>
            <div className="d-flex">
                <button className="btn btn-primary ms-auto"
                onClick={changeStMsg}>수정</button>
            </div>
        </form>
    );
}

export default ProfileMsg;