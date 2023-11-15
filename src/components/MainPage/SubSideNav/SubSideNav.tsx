import React from 'react';
import SideNavTwo from './SideNavTwo';

export default function SubSideNav(){
    return(
        <div className='bg-primary bg-gradient rounded-end-3
        d-lg-none d-md-block d-sm-block d-xs-block
        text-white text-center'
        style={{width:'70px', height:'100vh'}}>
            <a className='btn btn-lg fs-1 text-white' 
            data-bs-toggle='offcanvas' href='#sideMenu' role='button'>
                <i className="bi bi-list"></i>
            </a>
            <SideNavTwo />
        </div>
    )
}