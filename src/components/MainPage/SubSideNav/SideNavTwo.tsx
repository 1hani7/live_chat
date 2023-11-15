import React from 'react';

import Profile from '../SideNav/Profile';
import NavMenus from '../SideNav/NavMenus';
import ExtraMenus from '../SideNav/ExtraMenus';

export default function SideNavTwo() {
    return (
        <div className='offcanvas offcanvas-start h-100 bg-primary
        bg-gradient py-4 rounded-end-3 shadow
        flex-column justify-content-start'
            id='sideMenu'
            style={{ width: '250px', maxWidth: '250px' }}>
            <button type='button'
                className='btn-close position-absolute top-0 end-0 me-2 mt-2'
                data-bs-dismiss='offcanvas' aria-label='Close'>
            </button>
            <Profile />
            <NavMenus />
            <ExtraMenus />
        </div>
    )
}