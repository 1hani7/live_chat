import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LogoImage(){
    const Public = process.env.PUBLIC_URL;
    return(
        <div style={{ // Logo Image
            backgroundImage: `url(${Public}/livechatLogo.png)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '120px', width:'80%',
        }}
            className='object-fit-cover mb-3 mx-auto'>
        </div>
    )
}