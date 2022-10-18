import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import './App.css';
import Authentication from './routes/auth/Authentication';

const env = import.meta.env.VITE_API;

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const credentials = localStorage.getItem('accessCredential');
    if (credentials) {
    }
  }, []);

  return (
    <div className="App">
      {/* {!isLoggedIn ? () : () } */}
      <Authentication setUser={setUser} />
    </div>
  );
}

export default App;
