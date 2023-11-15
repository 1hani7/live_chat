import React from 'react';
import LogoImage from '../LoginPage/LogoImage';

export default function SignInputs(){
    return(
        <div className="d-flex flex-column row-gap-3 px-lg-5">
            <LogoImage/>
             {/* 아이디 비번 입력창 */}
            <input type="text" name='id' placeholder='User Name' autoComplete='off'
                className='form-control border-bottom' />
            <input type="text" name='pw' placeholder='Password' autoComplete='off'
                className='form-control border-bottom' />
            <input type="text" name='pw' placeholder='Password 확인' autoComplete='off'
                className='form-control border-bottom' />
            <div className='d-flex'>
                {/* 회원가입 */}
                <button className='btn btn-primary fw-bold w-50 me-3'>
                    회원가입
                </button>
                {/* 취소 */}
                <button className='btn btn-outline-secondary fw-bold w-50'>
                    취소
                </button>
            </div>
        </div>
    )
}