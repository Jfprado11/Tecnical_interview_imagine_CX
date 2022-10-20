import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, memo } from 'react';
import CardContacts from '../../../components/contactsComponets/CardContacts';
import Button from '../../../components/general/Button';
import Modal from '../../../components/general/Modal';
import { useFetch } from '../../../hooks/useFetch';
import ContactService from '../../../services/contacts.service';
import './style.css';

function Contacts() {
  const service = new ContactService();
  const { data, setData, error, loading } = useFetch(service.getAll);

  const handleNextClick = () => {
    const sendUrl = data.links.filter((item) => item.rel === 'next');
    const sendData = async () => {
      const res = await service.getDataByUrl(sendUrl[0].href);

      setData(res.data);
    };
    sendData();
  };

  const handleBackClick = () => {
    const sendUrl = data.links.filter((item) => item.rel === 'prev');
    const sendData = async () => {
      const res = await service.getDataByUrl(sendUrl[0].href);
      setData(res.data);
    };
    sendData();
  };

  const handleDisabledNext = () => {
    const result = data.links.filter((item) => item.rel === 'next');
    if (result.length !== 0) return false;
    return true;
  };
  const handleDisabledBack = () => {
    const result = data.links.filter((item) => item.rel === 'prev');
    if (result.length !== 0) return false;
    return true;
  };

  return (
    <div className="contacts">
      <h1>Contactos</h1>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div className="contacts-container">
          <ul className="cards-container">
            <li className="card-container__header">
              <div className="card-header-id">
                <b>Id</b>
              </div>
              <div className="card-header-name">
                <b>Nombre</b>
              </div>
              <div className="card-header-created">
                <b>Fecha de Creación</b>
              </div>
              <div className="card-header-updated">
                <b>Fecha de Actualización</b>
              </div>
              <div className="card-header-actions">
                <b>Acción</b>
              </div>
            </li>
            {data.items.map((item) => (
              <CardContacts key={item.id} info={item} />
            ))}
          </ul>
          <div className="card-footer">
            <span className="card-footer__total-results">
              Resultados Totales <strong>{data.totalResults}</strong>
            </span>
            <div className="card-footer__arrows">
              <Button
                icon={faArrowLeft}
                className="btn--light "
                onClick={handleBackClick}
                isDisabled={handleDisabledBack()}
              >
                Atras
              </Button>
              <Button
                icon={faArrowRight}
                className="btn--light"
                onClick={handleNextClick}
                isDisabled={handleDisabledNext()}
              >
                Siguiente
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contacts;
