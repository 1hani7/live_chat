import React from 'react';

export default function LoginImage(){
    const Public = process.env.PUBLIC_URL;
    return(
        <div className='col-md-6 col-sm-4 d-none d-sm-block rounded shadow p-0
        overflow-hidden position-relative'
        style={{
            backgroundImage:`url(${Public}/images/LoginCoverImage.jpg)`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
        }}
        >
            <div className='bg-primary opacity-25'
            style={{width:'100%', height:'100%'}}>
            </div>
        </div>
    )
}