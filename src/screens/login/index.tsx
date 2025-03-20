import React, { FC, useState } from 'react';
import { useLogin } from './util';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from '../login/style';
import Toast from 'react-native-toast-message';
import ShaImage from '../../components/image/shaImage';
import ShaIcon from '../../components/icon/shaIcon';

const Login: FC<any> = (props) => {
  const { navigation } = props;
  const { setEmail, setPassword, email, password, handleLogin } = useLogin(navigation);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <ShaImage source={require('../../assets/icon.png')} style={styles.icon} />
        <Text style={styles.title}>
          <Text style={styles.armText}>ARM</Text>
          <Text style={styles.meText}>ME</Text>
        </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
          <ShaIcon
            name={isPasswordVisible ? "eye-off" : "eye"}
            type="feather"
            size={25}
            color="gray"
            style={styles.eyeIcon}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)} />

      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={handleLogin} title="Login" color="#007BFF" />
      </View>
      <Toast />
    </View>
  );
};

export default Login;