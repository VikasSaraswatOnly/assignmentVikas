import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { getUser, logout } from './auth';

const MusicLibrary = React.lazy(() => import('musicLibrary/MusicLibrary'));

const App: React.FC = () => {
  const user = getUser();

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        {user ? (
          <button
            onClick={() => {
              logout();
              window.location.reload();
            }}
          >
            Logout ({user.username})
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MusicLibrary />
            </Suspense>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

const Login: React.FC = () => {
  const handleLogin = () => {
    login('admin', 'admin');
    window.location.href = '/';
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login as Admin</button>
    </div>
  );
};

export default App;
