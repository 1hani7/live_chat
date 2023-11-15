import React, { Suspense } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const LoginPage = React.lazy(() => import('./pages/LoginPage'));


function App() {
  return (
    <div className="App">
      <Suspense fallback={
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      }>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
