import axios from 'axios';

const credential = localStorage.getItem('accessCredential');
const urlApi = import.meta.env.VITE_API;

class ContactService {
  async getAll() {
    try {
      const res = await axios({
        method: 'get',
        url: `${urlApi}/contacts?limit=5`,
        headers: { Authorization: `Basic ${credential}`, 'Content-Type': 'application/json' },
      });
      return res;
    } catch (error) {
      console.error(error);
    }
  }
}

export default ContactService;
