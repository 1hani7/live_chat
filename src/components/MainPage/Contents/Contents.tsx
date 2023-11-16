import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./Home/Home'))
const Chat = React.lazy(() => import('./Chat/Chat'))
const Friends = React.lazy(() => import('./Friends/Friends'))
const Notification = React.lazy(() => import('./Notification/Notification'))

export default function Contents() {
    return (
        <div className='w-100 rounded-start overflow-hidden'
        style={{height:'100vh'}}>
            <Routes>
                <Route path="Home" element={<Home />}></Route>
                <Route path="Chat" element={<Chat />}></Route>
                <Route path="Friends" element={<Friends />}></Route>
                <Route path="Notification" element={<Notification />}></Route>
            </Routes>
        </div>
    )
}