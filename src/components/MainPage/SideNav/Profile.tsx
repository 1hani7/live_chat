import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile(){
    const Public = process.env.PUBLIC_URL;
    const nav = useNavigate();
    return(
        <button className="btn px-4 d-flex column-gap-3
        align-items-center"
        onClick={() => nav('/MainPage/ProfileSetting')}>
            <div className='rounded-circle overflow-hidden bg-white'
            style={{
                backgroundImage:`url(${Public}/images/basicProfile.png)`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
                width: `50px`, height: `50px`,
            }}>
            </div>
            <h6 className='text-white my-1 text-start'>
                Profile Name <br/>
                <small className='text-white-50'>@name</small>
            </h6>
        </button>
    )
}