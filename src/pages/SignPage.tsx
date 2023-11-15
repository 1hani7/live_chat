import React from 'react';
import '../PageChange.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignImage from '../components/SignPage/SignImage';
import SignInputs from '../components/SignPage/SignInputs';
import LogoImage from '../components/LoginPage/LogoImage';

export default function SignPage(){
    return(
        <div className="fadeEnt row shadow rounded-3 p-5 mw-50 bg-white" // LoginBox
            style={{ width: '100%', maxWidth: '1000px', height: '550px' }}>
            <SignImage />
            <div className='col-md-6 col-sm-8 p-0 ps-sm-5
                                d-flex flex-column justify-content-center'>
                <LogoImage/>
                <SignInputs/>
            </div>
        </div>
    )
}