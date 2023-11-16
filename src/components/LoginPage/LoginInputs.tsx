import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginInputs() {
    const nav = useNavigate();
    return (
        <div className="d-flex flex-column row-gap-3 px-lg-5"> 
             {/* 아이디 비번 입력창 */}
            <form>
                <input type="email" name='email' placeholder='Email' autoComplete='off'
                    className='form-control border-bottom mb-3' />
                <input type="password" name='pw' placeholder='Password' autoComplete='off'
                    className='form-control border-bottom mb-3' />
            </form>
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
                <button className='btn btn-primary fw-bold'
                onClick={() => nav('/MainPage/Chat')}>
                    LOGIN
                </button>
                {/* 게스트 계정으로 */}
                <button className='btn btn-outline-secondary fw-bold'
                onClick={() => nav('/MainPage/Chat')}>
                    게스트
                </button>
            </div>
        </div>
    )
}