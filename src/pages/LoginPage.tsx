import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginInputs from '../components/LoginPage/LoginInputs';
import LoginImage from '../components/LoginPage/LoginImage';
import LogoImage from '../components/LoginPage/LogoImage';
import LoginLinks from '../components/LoginPage/LoginLinks';

export default function LoginPage() {

    return (
        <div className="row shadow rounded-3 p-5 mw-50 bg-white" // LoginBox
            style={{ width: '100%', maxWidth: '1000px', height: '550px' }}>
            <LoginImage />
            <div className='col-md-6 col-sm-8 p-0 ps-sm-5
                                d-flex flex-column justify-content-center'>
                <LogoImage />{/* Logo Image */}
                <LoginInputs />{/* Login Inputs */}
                <LoginLinks />{/* 회원가입 / 아이디찾기 / 비번찾기 */}
            </div>
        </div>
    )
}