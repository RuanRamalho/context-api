import React from 'react';
import { useAuth } from '../../providers/auth';

function Profile() {
  const { user } = useAuth();

  return <h1>{user.name}</h1>;
}

export default Profile;
