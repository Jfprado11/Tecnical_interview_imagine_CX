import { useParams, useNavigate } from 'react-router-dom';
import Button from '../../../components/general/Button';
import { useFetchContact } from '../../../hooks/useFetchContact';
import ContactService from '../../../services/contacts.service';

import './style.css';

const baseUrl = import.meta.env.VITE_API;

function ViewContact() {
  const service = new ContactService();

  const { contactId } = useParams();
  const navigate = useNavigate();

  const { data, setData, error, loading } = useFetchContact(service.getDataByUrl, `${baseUrl}/contacts/${contactId}`);

  return (
    <div className="contact-page">
      {loading ? (
        <span className="loading">Loading...</span>
      ) : (
        <>
          <h1>Perfil de {data.lookupName}</h1>
          <div className="contact__body">
            <div className="body__Personal">
              <h2>información Personal</h2>
              <div className="Personal__container">
                <div className="Personal-cells">
                  <h3>Nombre</h3>
                  <p>{data.name.first}</p>
                </div>
                <div className="Personal-cells">
                  <h3>Apellido</h3>
                  <p>{data.name.last}</p>
                </div>
                <div className="Personal-cells">
                  <h3>Telefono</h3>
                  <p>{data.phone}</p>
                </div>
                <div className="Personal-cells">
                  <h3>Email</h3>
                  <p>{data.email}</p>
                </div>
              </div>
            </div>
            <div className="body__address">
              <h2>Dirección</h2>
              <div className="address__container">
                <div className="address-cells">
                  <h3>País</h3>
                  <p>{data.country}</p>
                </div>
                <div className="address-cells">
                  <h3>Ciudad</h3>
                  <p>{data.address.city}</p>
                </div>
                <div className="address-cells">
                  <h3>Código Postal</h3>
                  <p>{data.address.postalCode}</p>
                </div>
                <div className="address-cells">
                  <h3>Calle</h3>
                  <p>{data.address.street}</p>
                </div>
              </div>
            </div>
            <div className="body__moreInfo">
              <h2>Mas información</h2>
              <div className="moreInfo__container">
                <div className="moreInfo-cells">
                  <h3>Tipo de Documento</h3>
                  <p>{data.customFields.c.identification_type?.lookupName}</p>
                </div>
                <div className="moreInfo-cells">
                  <h3>Número de Identificación</h3>
                  <p>{data.customFields.c.identification_number}</p>
                </div>
                <div className="moreInfo-cells">
                  <h3>Compañía</h3>
                  <p>{data.customFields.c.company}</p>
                </div>
                <div className="moreInfo-cells">
                  <h3>Organización</h3>
                  <p>{data.organization.lookupName}</p>
                </div>
                <div className="moreInfo-cells">
                  <h3>Posición</h3>
                  <p>{data.customFields.c.position}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact__btn-container">
            <Button className="btn--light" onClick={() => navigate('/dashboard/contacts')}>
              Ir a atras
            </Button>
            <Button className="btn--red" onClick={() => navigate('/dashboard/contacts')}>
              Eliminar
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default ViewContact;
