import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginInputs() {
    return (
        <div className="d-flex flex-column row-gap-3 px-lg-5"> 
             {/* 아이디 비번 입력창 */}
            <input type="text" name='id' placeholder='User Name' autoComplete='off'
                className='form-control border-bottom' />
            <input type="text" name='pw' placeholder='Password' autoComplete='off'
                className='form-control border-bottom' />
            <div>
                {/* 자동 로그인 활성화 */}
                <input type="checkbox"
                    className='form-check-input me-1' id='rememberMe' />
                <label htmlFor="rememberMe"
                    className='form-check-label text-secondary'>
                    Remember me
                </label>
            </div>
            <div className='btn-group' role='group'>
                {/* 가입한 계정으로 */}
                <button className='btn btn-primary fw-bold'>
                    LOGIN
                </button>
                {/* 게스트 계정으로 */}
                <button className='btn btn-outline-secondary fw-bold'>
                    게스트
                </button>
            </div>
        </div>
    )
}