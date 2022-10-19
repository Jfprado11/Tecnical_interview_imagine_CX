import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import './App.css';

import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';

const env = import.meta.env.VITE_API;

function App() {
  const [user, setUser] = useState({ isLoggedIn: false });

  useEffect(() => {
    const credentials = localStorage.getItem('accessCredential');
    if (credentials) {
      const data = window.atob(credentials);
      const userName = data.split(':');
      setUser({ username: userName[0], isLoggedIn: true });
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Authentication setUser={setUser} user={user} />} />
        <Route path="dashboard" element={<Dashboard setUser={setUser} user={user} />}>
          <Route index element={<Navigate to="contacts" />} />
          <Route path="contacts" element={<h2>Hola contactos</h2>} />
          <Route path="staff" element={<h2>Hola Staff</h2>} />
        </Route>
        <Route path="*" element={<Navigate to="login" replace />} />
      </Routes>
    </div>
  );
}

export default App;
