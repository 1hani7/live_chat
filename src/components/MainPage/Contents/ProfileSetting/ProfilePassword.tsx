import React, { useState } from 'react';
import { firebaseAuth, updatePassword } from '../../../../firebaseConfig';

const ProfilePassword: React.FC = () => {
    
    const [newPw, setNewPw] = useState<string>('');
    const [newPCheck, setNewPCheck] = useState<string>('');

    const changePw = async (e:React.MouseEvent<HTMLButtonElement>) => {
        const user = firebaseAuth.currentUser;
        if (user && newPw !== '' && newPw === newPCheck ) {
            try{
                await updatePassword(user, newPw);
                alert("비밀번호가 변경되었습니다.");
            }catch(err){
                console.error(err);
            }
        }else if(newPw === ''){
            alert("새로운 비밀번호를 입력해주세요.")
        }
    }

    return (
        <form>
            <label className="form-label fw-bold">비밀번호 수정</label>
            {/* <input className="form-control mb-2" type="password" id='PasswordNow'
                placeholder="현재 비밀번호" autoComplete="false" /> */}
            <input className="form-control mb-2" type="password" id='PasswordChange'
                placeholder="새 비밀번호" autoComplete="false"
                onChange={(e) => setNewPw(e.target.value)} />
            <input className="form-control mb-2" type="password" id='PasswordChangeCheck'
                placeholder="새 비밀번호 확인" autoComplete="false"
                onChange={(e) => setNewPCheck(e.target.value)} />
            <div className="d-flex">
                <button className="btn btn-outline-primary ms-auto"
                onClick={changePw}>확인</button>
            </div>
        </form>
    );
}

export default ProfilePassword;