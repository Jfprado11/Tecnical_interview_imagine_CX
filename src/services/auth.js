import axios from 'axios';

const URL = import.meta.env.VITE_API;

const login = async (username, password) => {
  try {
    const credential = window.btoa(`${username}:${password}`);
    const res = await axios({
      method: 'get',
      url: URL,
      headers: { Authorization: `Basic ${credential}`, 'Content-Type': 'application/json' },
    });
    console.log(res);

    if (res.status === 200) {
      localStorage.setItem('accessCredential', credential);
      return { logged: true, status: 200 };
    }
    return { logged: false, status: res.status };
  } catch (error) {
    return { logged: false, status: error.response.status };
  }
};

export { login };
