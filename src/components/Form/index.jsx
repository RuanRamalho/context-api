import React from 'react';
import { useAuth } from '../../providers/auth';

function Form() {
  const { user, setUser } = useAuth();
  const { nameLabel } = useAuth();

  return (
    <>
      <label>{nameLabel}</label>
      <input
        type="text"
        value={user.name}
        onChange={(event) => setUser({ name: event.target.value })}
      />
    </>
  );
}

export default Form;
