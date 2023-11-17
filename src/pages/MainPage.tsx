import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from '../components/MainPage/SideNav/SideNav';
import SubSideNav from '../components/MainPage/SubSideNav/SubSideNav';
import Contents from '../components/MainPage/Contents/Contents';

export default function MainPage() {
    return (
        <div className="fadeIn container-fluid p-0 d-flex w-100 vh-100">
            <div>
                <SideNav />
                <SubSideNav />
            </div>
            <Contents />
        </div>
    )
}