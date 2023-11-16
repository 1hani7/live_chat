import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Chat = React.lazy(() => import('./Chat/Chat'))
const Friends = React.lazy(() => import('./Friends/Friends'))

export default function Contents() {
    return (
        <div className='w-100 rounded-start overflow-hidden'
        style={{height:'100vh'}}>
            <Routes>
                <Route path="Chat" element={<Chat />}></Route>
                <Route path="Friends" element={<Friends />}></Route>
            </Routes>
        </div>
    )
}