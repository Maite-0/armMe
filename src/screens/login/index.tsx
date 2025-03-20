import React, {FC} from 'react';
import {useLogin} from './util';
import {View, Text, TextInput, Button,Image} from 'react-native';
import {styles} from '../login/style';
import Toast from 'react-native-toast-message';
import ShaImage from '../../components/image/shaImage';

const Login: FC<any> = (props) => {
  const {navigation} = props;
  const {setEmail, setPassword, email, password, handleLogin} = useLogin(navigation);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <ShaImage source={require('../../assets/icon.png')} style={styles.icon} />
        <Text style={styles.title}>
          <Text style={styles.armText}>ARM</Text>
          <Text style={styles.meText}>ME</Text>
        </Text>
      </View>

      {/* <Text style={styles.welcomeText}>
        Welcome to the ARMME, please login to continue
      </Text> */}

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      <View style={styles.buttonContainer}>
        <Button onPress={handleLogin} title="Login" color="#007BFF" />
      </View>
      <Toast />
    </View>
  );
};

export default Login;
