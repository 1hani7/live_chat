import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PwSearchInputs from '../components/PwSearchPage/PwSearchInputs';
import LogoImage from '../components/LoginPage/LogoImage';

export default function PwSearch() {
    return (
        <div className="fadeEnt row shadow rounded-3 p-5 mw-50 bg-white" // LoginBox
            style={{ width: '100%', maxWidth: '500px', height: '400px' }}>
            <LogoImage />
            <PwSearchInputs />
        </div>
    )
}