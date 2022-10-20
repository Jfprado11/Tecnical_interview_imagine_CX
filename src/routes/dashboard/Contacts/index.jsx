import { useEffect, useState, memo } from 'react';
import { useFetch } from '../../../hooks/useFetch';
import axios from 'axios';
import ContactService from '../../../services/contacts.service';
import './style.css';

const credential = localStorage.getItem('accessCredential');
const urlApi = import.meta.env.VITE_API;

function Contacts() {
  const service = new ContactService();
  const { data, error, loading } = useFetch(service.getAll);

  if (!loading) {
    console.log(data.items);
  }

  return (
    <div className="contacts">
      <h1>Contactos</h1>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <p>
          {data.items.map((item) => (
            <b>{item.lookupName}</b>
          ))}
        </p>
      )}
    </div>
  );
}

export default Contacts;
