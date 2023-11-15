import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginLinks() {
    return (
        <div className="text-secondary text-center mt-5">
            <Link to='/sign'
            className='form-text text-decoration-none'>
                회원가입
            </Link>
            &nbsp;|&nbsp;
            <Link to='/idSearch'
            className='form-text text-decoration-none'>
                아이디 찾기
            </Link>
            &nbsp;|&nbsp;
            <Link to='/pwSearch'
            className='form-text text-decoration-none'>
                비밀번호 찾기
            </Link>
        </div>
    )
}