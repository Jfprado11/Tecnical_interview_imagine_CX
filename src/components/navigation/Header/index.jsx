import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

function Header({ user, setUser }) {
  const logout = () => {
    localStorage.removeItem('accessCredential');
    setUser({ username: '', isLoggedIn: false });
  };

  return (
    <header className="header">
      <span>Dashboard CRM</span>
      <nav className="nav">
        <p>¡Bienvenido {user.username}!</p>
        <span onClick={logout}>
          <FontAwesomeIcon icon={faSignOut} /> Cerrar Sesion
        </span>
      </nav>
    </header>
  );
}

export default Header;
