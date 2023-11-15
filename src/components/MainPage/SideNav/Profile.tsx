import React from 'react';

export default function Profile(){
    const Public = process.env.PUBLIC_URL;
    return(
        <div className="px-4 d-flex column-gap-3
        align-items-center">
            <div className='rounded-circle overflow-hidden bg-white'
            style={{
                backgroundImage:`url(${Public}/images/basicProfile.png)`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
                width: `50px`, height: `50px`,
            }}>
            </div>
            <h6 className='text-white my-1'>
                Profile Name <br/>
                <small className='text-white-50'>@name</small>
            </h6>
        </div>
    )
}