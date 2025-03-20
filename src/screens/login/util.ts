import {useEffect, useState} from 'react';
import {useAuth} from '../../services/providers/auth';
import {AuthenticateModel} from '../../services/api';
import Toast from 'react-native-toast-message';
import {CLIENT_SECRETE} from '../../utils/constants';

export const useLogin = navigation => {
  const {auth, login} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (auth?.state === 'success') {
      navigation.navigate('AlarmScreen');
    } else if (auth?.state === 'error') {
      setTimeout(() => {
        Toast.show({
          type: 'error',
          text1: 'Failed to Login',
          text2: 'please make sure you fill correct details and try again!',
        });
      }, 1000);
    }
  }, [auth]);

  const handleLogin = () => {
    const loginPayload: AuthenticateModel = {
      client_id: 'test',
      client_secret: CLIENT_SECRETE,
      grant_type: 'password',
      username: email,
      password: password,
    };
    login(loginPayload);
  };

  return {
    setEmail,
    setPassword,
    email,
    password,
    handleLogin,
  };
};
