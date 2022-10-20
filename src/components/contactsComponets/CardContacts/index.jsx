import { useRef, useState } from 'react';

import Modal from '../../general/Modal';
import Button from '../../general/Button';
import ContactService from '../../../services/contacts.service';
import { faEye, faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './style.css';
import Snackbar from '../../general/Snackbar';

const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

function CardContacts({ info }) {
  const [isOpen, setIsOpen] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const snackBarRefDel = useRef(null);
  const snackBarRefError = useRef(null);

  const created = new Date(info.createdTime).toLocaleString('es', dateOptions);
  const updated = new Date(info.updatedTime).toLocaleString('es', dateOptions);

  const handleDelete = () => {
    const service = new ContactService();
    const deleteContact = async () => {
      const res = await service.deleteContact(info.id);
      if (res.status === 200) {
        setDeleted(true);
        snackBarRefDel.current.show();
      } else {
        snackBarRefError.current.show();
      }
      setIsOpen(false);
    };
    deleteContact();
  };

  return (
    <li className="card-contacts">
      <div className="card-id">{info.id}</div>
      <div className="card-name">{info.lookupName}</div>
      <div className="card-created">{created}</div>
      <div className="card-updated">{updated}</div>
      <div className="card-actions">
        <Link to={`${info.id}`}>
          <FontAwesomeIcon className="icon-view" icon={faEye} />
        </Link>
        <FontAwesomeIcon className="icon-edit" icon={faUserPen} />
        <FontAwesomeIcon
          className="icon-delete"
          icon={faTrash}
          onClick={() => {
            setIsOpen(true);
          }}
        />
      </div>
      <Modal open={isOpen}>
        <span className="modal-header">Eliminar Usuario</span>
        <p>estas seguro que quiere eliminar a {info.lookupName} </p>
        <div className="btn-container">
          <Button className="btn--light" onClick={() => setIsOpen(false)}>
            Atras
          </Button>
          <Button className="btn--red" onClick={handleDelete}>
            Eliminar
          </Button>
        </div>
      </Modal>
      <Snackbar ref={snackBarRefDel} message="Se ha Eliminado el contacto" />
      <Snackbar ref={snackBarRefError} message="Ocurrio un problema no se pudo eliminar el usuario" type="error" />
    </li>
  );
}

export default CardContacts;
