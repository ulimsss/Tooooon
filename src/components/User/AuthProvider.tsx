import { User } from '@firebase/auth';
import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { firebaseAuth } from '../../config';

function AuthProvider({ children }: { children: any }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const subscribe = firebaseAuth.onAuthStateChanged((fbUser) => {
      setUser(fbUser);
    });
    return subscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
