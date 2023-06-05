import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor o realizar la autenticación.
    // Por simplicidad, solo se establecerá el estado de "isRegistered" en verdadero.
    setIsRegistered(true);
  };

  return (
    <div className='login_container'>
      {isRegistered ? (
        <h2>Se Registro {' '}
        <span className='username'>{username}</span> con Exito</h2>
      ) : (
        <div className='login_form'>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Usuario </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <label htmlFor="password">Contra </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button className='login_b' type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
