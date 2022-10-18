const login = async (username, password) => {
  if (username === 'Felipe' && password === 'prado123') {
    localStorage.setItem('credentials', window.btoa(`${username}:${password}`));
    return true;
  }
  return false;
};

export { login };
