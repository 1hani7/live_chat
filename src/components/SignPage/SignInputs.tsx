import React, { useState } from 'react';
import { db, firebaseAuth, createUserWithEmailAndPassword } from '../../firebaseConfig';
import { FirebaseError } from 'firebase/app';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const SignInputs: React.FC = () => {
    const nav = useNavigate();

    // 입력용 변수들
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [pw, setPw] = useState<string>('');
    const [pwCheck, setPwCheck] = useState<string>('');


    // 엔터 쳐서 회원가입
    const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') register();
    }

    // 회원가입 기능
    const register = async () => {
        if( pw !== pwCheck ) {
            alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            return;
        }
        if (name !== '' && email !== '' && pw !== '' && pwCheck !== '') {
            try {
                const createdUser = await createUserWithEmailAndPassword(firebaseAuth, email, pw);
                const userId: string = createdUser.user.uid;
                await setDoc(doc(db,'usersDb', userId) ,{
                    email: email,
                    name: name,
                    userId: '@' + name.split(' ')[0] + '-' + Math.floor(Math.random()*1000)+1 ,
                    online: false,
                    stMsg: '',
                    uid: userId,
                    friends: [],
                })
                // console.log('문서 추가 성공', userId);
                nav(-1);
            } catch (err: unknown) {
                if (err instanceof FirebaseError) {
                    switch (err.code) {
                        case 'auth/weak-password':
                            alert('비밀번호는 6자리 이상이어야 합니다');
                            break;
                        case 'auth/invalid-email':
                            alert('잘못된 이메일 주소입니다');
                            break;
                        case 'auth/email-already-in-use':
                            alert('이미 가입되어 있는 계정입니다');
                            break;
                    }
                } else {
                    console.error(err);
                }
            }
        }else {
            alert("모든 항목을 입력하셔야 합니다.")
        }
    }

    return (
        <div className="d-flex flex-column row-gap-3 px-lg-5">
            {/* 아이디 비번 입력창 */}
            <form>
                <input type="text" name='name' placeholder='User Name' autoComplete='off'
                    className='form-control border-bottom mb-3' value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={onEnter} />
                <input type="email" name='email' placeholder='User Email' autoComplete='off'
                    className='form-control border-bottom mb-3' value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={onEnter} />
                <input type="password" name='pw' placeholder='Password' autoComplete='off'
                    className='form-control border-bottom mb-3' value={pw}
                    onChange={(e) => setPw(e.target.value)}
                    onKeyDown={onEnter} />
                <input type="password" name='pwCheck' placeholder='Password Check' autoComplete='off'
                    className='form-control border-bottom' value={pwCheck}
                    onChange={(e) => setPwCheck(e.target.value)}
                    onKeyDown={onEnter} />
            </form>
            <div className='d-flex mt-4'>
                {/* 회원가입 */}
                <button className='btn btn-primary fw-bold w-50 me-3'
                    onClick={register}>
                    회원가입
                </button>
                {/* 취소 */}
                <button className='btn btn-outline-secondary fw-bold w-50'
                    onClick={() => nav(-1)}>
                    취소
                </button>
            </div>
        </div>
    )
}

export default SignInputs;