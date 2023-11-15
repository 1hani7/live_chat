import React from 'react';
import SignImage from '../components/SignPage/SignImage';
import SignInputs from '../components/SignPage/SignInputs';

export default function SignPage(){
    return(
        <div className="row shadow rounded-3 p-5 mw-50 bg-white" // LoginBox
            style={{ width: '100%', maxWidth: '1000px', height: '550px' }}>
            <SignImage />
            <div className='col-md-6 col-sm-8 p-0 ps-sm-5
                                d-flex flex-column justify-content-center'>
                <SignInputs/>
            </div>
        </div>
    )
}