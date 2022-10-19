import { faArrowRight, faUsers, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

function SideBar() {
  const [selected, setSelected] = useState('Contactos');
  const [small, setSmall] = useState(true);

  const setPage = (pageName) => {
    setSelected(pageName);
  };

  const handleMouseOver = () => {
    setSmall(false);
  };

  const handleMouseOut = () => {
    setSmall(true);
  };

  return (
    <nav className={`sidebar ${small ? 'small' : ''}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <ul className="sidebar__navigation">
        <Link
          className={`li ${selected === 'Contactos' && 'selected-page'}`}
          onClick={() => setPage('Contactos')}
          to="contacts"
        >
          <FontAwesomeIcon className="navigation__icon" icon={faUsers} />
          <span className="navigation__text">Contactos</span>
          {selected === 'Contactos' && <FontAwesomeIcon icon={faArrowRight} className="select-icon" />}
        </Link>
        <Link className={`li ${selected === 'Staff' && 'selected-page'}`} onClick={() => setPage('Staff')} to="staff">
          <FontAwesomeIcon className="navigation__icon" icon={faUserTie} />
          <span className="navigation__text">Staff Miembros</span>
          {selected === 'Staff' && <FontAwesomeIcon icon={faArrowRight} className="select-icon" />}
        </Link>
      </ul>
    </nav>
  );
}

export default SideBar;
