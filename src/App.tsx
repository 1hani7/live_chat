import React, { Suspense } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const SignPage = React.lazy(() => import('./pages/SignPage'));


function App() {
  const Public = process.env.PUBLIC_URL;
  return (
    <div className="App
      d-flex justify-content-center align-items-center"
      style={{
        width: '100%', height: '100vh',
        backgroundImage: `url(${Public}/images/Background.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>

      <Suspense fallback={
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      }>

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Sign" element={<SignPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
