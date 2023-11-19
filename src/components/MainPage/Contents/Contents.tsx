import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Chat = React.lazy(() => import('./Chat/Chat'))
const Friends = React.lazy(() => import('./Friends/Friends'))
const ProfileSetting = React.lazy(() => import('./ProfileSetting/ProfileSetting'))

export default function Contents() {
    return (
        <div className='w-100 rounded-start overflow-hidden vh-100'>
            <Routes>
                <Route path="Chat" element={<Chat />}></Route>
                <Route path="Friends" element={<Friends />}></Route>
                <Route path="ProfileSetting" element={<ProfileSetting />}></Route>
            </Routes>
        </div>
    )
}