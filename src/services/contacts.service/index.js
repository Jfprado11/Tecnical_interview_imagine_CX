import axios from 'axios';

const credential = localStorage.getItem('accessCredential');
const urlApi = import.meta.env.VITE_API;
const urlProxy = import.meta.env.VITE_PROXY_CORS;

class ContactService {
  async getAll() {
    try {
      const res = await axios({
        method: 'get',
        url: `${urlApi}/contacts?totalResults=true&limit=6`,
        headers: { Authorization: `Basic ${credential}`, 'Content-Type': 'application/json' },
      });
      return res;
    } catch (error) {
      console.error('error on getting data', error);
      throw error;
    }
  }

  async getDataByUrl(url) {
    try {
      const res = await axios({
        method: 'get',
        url: `${urlProxy}/${url}`,
        headers: { Authorization: `Basic ${credential}`, 'Content-Type': 'application/json' },
      });
      return res;
    } catch (error) {
      console.error('error on getting data', error);
      throw error;
    }
  }

  async deleteContact(id) {
    try {
      const res = await axios({
        method: 'delete',
        url: `${urlApi}/contacts/${id}`,
        headers: { Authorization: `Basic ${credential}`, 'Content-Type': 'application/json' },
      });
      return res;
    } catch (error) {
      console.error('error on getting data', error);
      throw error;
    }
  }
}

export default ContactService;
