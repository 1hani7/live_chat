import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignInputs(){
    const nav = useNavigate();
    return(
        <div className="d-flex flex-column row-gap-3 px-lg-5">
             {/* 아이디 비번 입력창 */}
            <form>
                <input type="email" name='email' placeholder='User Email' autoComplete='off'
                    className='form-control border-bottom mb-3' />
                <input type="password" name='pw' placeholder='Password' autoComplete='off'
                    className='form-control border-bottom mb-3' />
                <input type="password" name='pwCheck' placeholder='Password 확인' autoComplete='off'
                    className='form-control border-bottom' />
            </form>
            <div className='d-flex mt-4'>
                {/* 회원가입 */}
                <button className='btn btn-primary fw-bold w-50 me-3'
                onClick={()=> nav(-1)}>
                    회원가입
                </button>
                {/* 취소 */}
                <button className='btn btn-outline-secondary fw-bold w-50'
                onClick={()=> nav(-1)}>
                    취소
                </button>
            </div>
        </div>
    )
}