import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from '../components/MainPage/SideNav/SideNav';
import SubSideNav from '../components/MainPage/SubSideNav/SubSideNav';
import Contents from '../components/MainPage/Contents/Contents';

export default function MainPage() {
    return (
        <div className="fadeIn container-fluid p-0 d-flex" // 틀
            style={{ width: '100%', height: '100vh' }}>
            <div>
                <SideNav />
                <SubSideNav />
            </div>
            <Contents />
        </div>
    )
}