import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const SignPage = React.lazy(() => import('./pages/SignPage'));
const PwSearch = React.lazy(() => import('./pages/PwSearch'));
const MainPage = React.lazy(() => import('./pages/MainPage'));

const Chat = React.lazy(() => import('./components/MainPage/Contents/Chat/Chat'));
const Friends = React.lazy(() => import('./components/MainPage/Contents/Friends/Friends'));
const ProfileSetting = React.lazy(() => import('./components/MainPage/Contents/ProfileSetting/ProfileSetting'));


function App() {
  const Public = process.env.PUBLIC_URL;

  return (
    <div className="App
      d-flex justify-content-center align-items-center p-0"
      style={{
        width: '100%', height: '100vh',
        backgroundImage: `url(${Public}/images/Background.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>

      <Suspense fallback={
        <Spinner className='text-light' animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      }>

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Sign" element={<SignPage />} />
          <Route path="/pwSearch" element={<PwSearch />} />
          <Route path="/MainPage//*" element={<MainPage />}>
            <Route path="Chat" element={<Chat />} />
            <Route path="Friends" element={<Friends />} />
            <Route path="ProfileSetting" element={<ProfileSetting />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
