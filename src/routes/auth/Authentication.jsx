import { faKey, faLockOpen, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { login } from '../../services/auth';

import './auth.css';

const usernameAttr = { autoComplete: 'username', labelFor: 'username' };
const passwordAttr = { autoComplete: 'current-password', labelFor: 'password' };

function Authentication({ user, setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (onSubmit) => {
    onSubmit.preventDefault();
    const isValid = await login(username, password);
    if (isValid) {
      setUser(username);
    }
    if (!isValid) {
      alert('there is not a correct credential');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="auth-header">
        <h2>Iniciar Sesion</h2>
      </div>
      <div className="auth-container">
        <Input
          inputAttributes={usernameAttr}
          icon={faUser}
          label={'Usuario'}
          className={'input--dark'}
          value={username}
          setValue={setUsername}
        />
        <Input
          inputAttributes={passwordAttr}
          icon={faKey}
          label={'Contraseña'}
          className={'input--dark'}
          type={'password'}
          value={password}
          setValue={setPassword}
        />
        <Button type={'submit'} icon={faLockOpen} className={'btn--light'}>
          Ingresar
        </Button>
      </div>
    </form>
  );
}

export default Authentication;
