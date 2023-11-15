import React from 'react';

import Profile from './Profile';
import NavMenus from './NavMenus';
import ExtraMenus from './ExtraMenus';

export default function SideNav(){
    return(
        <div className='h-100 bg-primary bg-gradient py-4 rounded-end-3 shadow
        d-none d-lg-flex flex-column justify-content-start'
        style={{width:'250px', maxWidth:'250px'}}>
            <Profile />
            <NavMenus />
            <ExtraMenus />
        </div>
    )
}