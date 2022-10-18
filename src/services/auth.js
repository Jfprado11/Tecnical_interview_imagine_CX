const login = async (username, password) => {
  if (username === 'Felipe' && password === 'prado123') {
    localStorage.setItem('accessCredential', window.btoa(`${username}:${password}`));
    return true;
  }
  return false;
};

export { login };
