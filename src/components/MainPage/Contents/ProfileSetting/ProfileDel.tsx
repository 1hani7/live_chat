import React from 'react';
import { useNavigate } from 'react-router-dom';
import { firebaseAuth, db } from "../../../../firebaseConfig";
import { doc, deleteDoc } from 'firebase/firestore';
const ProfileDel: React.FC = () => {
    const nav = useNavigate();
    const user = firebaseAuth.currentUser;
    const userId:string = sessionStorage.uid;

    const memberOut = () => {
        if (user) {
            if (window.confirm("정말 탈퇴하시겠습니까? 활동 기록은 저장되지 않습니다.")) {
                user.delete()
                    .then(() => {
                        alert(`회원 탈퇴가 완료되었습니다. \n 다시 로그인해주세요.`);
                        deleteAccount(userId);
                        nav('/');
                    })
                    .catch(err => {
                        alert('계정 삭제 오류' + err.message);
                    })
            } else {
                alert('탈퇴가 취소되었습니다.')
            }
        } else {
            console.log('로그인 상태가 아닙니다.');
            nav('/');
        }
    }

    const deleteAccount = async(userId:string) => {
        try{
            await deleteDoc(doc(db, 'usersDb', userId))
        }
        catch(err){
            alert('오류 : ' + err)
        }
    }

    return (
        <button className='btn btn-outline-danger mt-5 mb-5'
        onClick={memberOut}>
            탈퇴하기
        </button>
    )
}

export default ProfileDel;