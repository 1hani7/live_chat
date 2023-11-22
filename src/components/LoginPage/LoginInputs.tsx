// 로그인 Input 기능
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, firebaseAuth, signInWithEmailAndPassword } from '../../firebaseConfig';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginInputs: React.FC = () => {
    const nav = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [pw, setPw] = useState<string>('');
    const [isChecked, setChecked] = useState<boolean>(false);

    const localEmail: string | null | undefined = localStorage.getItem('email');
    const localPw: string | null | undefined = localStorage.getItem('pw');

    useEffect(() => {
        // 기억된 이메일 비번 세팅
        if (localEmail && localPw) {
            setEmail(localEmail);
            setPw(localPw)
        }
    }, []);

    // 로그인 기능
    const handleLogin = async () => {
        if (email !== '' && pw !== '') {
            try {
                const userInfo = await signInWithEmailAndPassword(firebaseAuth, email, pw);
                const uid: string = userInfo.user.uid;
                window.sessionStorage.setItem('uid', uid); // 세션스토리지 uid
                const userId: string = sessionStorage.uid;
                // 온라인 전환
                const querySnapshot = await getDocs(collection(db, 'usersDb'));
                querySnapshot.forEach(async (document) => {
                    // 온라인 전환
                    if (document.data().uid === userId) {
                        const userDocRef = doc(db, 'usersDb', document.data().uid);
                        await updateDoc(userDocRef, {
                            online: true,
                        });
                        // 세선스토리지 name => 채팅방 개설에 사용
                        window.sessionStorage.setItem('name', document.data()?.name);
                    }
                });

                // 아이디 비번 기억하기
                if (isChecked) {
                    localStorage.setItem('email', email);
                    localStorage.setItem('pw', pw);
                } else {
                    localStorage.setItem('email', '');
                    localStorage.setItem('pw', '');
                }
                nav('/MainPage/Chat');
            } catch (err) {
                alert('이메일과 비밀번호가 일치하지 않거나 존재하지 않는 계정입니다.')
            }
        } else {
            alert('이메일과 비밀번호를 정확히 입력해주세요.')
        }
    }

    // 엔터 쳐서 로그인 기능
    const enterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleLogin();
    }

    return (
        <div className="d-flex flex-column row-gap-3 px-lg-5">
            {/* 아이디 비번 입력창 */}
            <form>
                <input type="email" name='email' id='email' placeholder='Email' autoComplete='off'
                    className='form-control border-bottom mb-3' value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={enterKey} />
                <input type="password" name='pw' id='pw' placeholder='Password' autoComplete='off'
                    className='form-control border-bottom mb-3' value={pw}
                    onChange={(e) => setPw(e.target.value)}
                    onKeyDown={enterKey} />
            </form>
            <div>
                {/* 자동 로그인 활성화 */}
                <input type="checkbox" className='form-check-input me-1' id='rememberMe'
                    onChange={() => setChecked(true)} />
                <label htmlFor="rememberMe"
                    className='form-check-label text-secondary'>
                    Remember me
                </label>
            </div>
            {/* 로그인 버튼 */}
            <button className='btn btn-primary fw-bold' onClick={handleLogin}>
                LOGIN
            </button>
        </div>
    )
}

export default LoginInputs;