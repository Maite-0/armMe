export const AUTH_TOKEN = '52wjMmbZcqDlZ1n62Vegp';
export const AUTH_TOKEN_EXPIRY = 's8DhIJQQdCGA2xVn0FOCf';
export const AUTH_TOKEN_REFRESH_TOKEN = 'T_bcPqmWaXAyys3EXdU9O';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToken = async (
  token: string,
  expiresIn: number,
  refreshToken: string,
) => {
  const expiryTimestamp = new Date().getTime() + expiresIn * 1000;
  await AsyncStorage.setItem(AUTH_TOKEN, token);
  await AsyncStorage.setItem(AUTH_TOKEN_EXPIRY, expiryTimestamp.toString());
  await AsyncStorage.setItem(AUTH_TOKEN_REFRESH_TOKEN, refreshToken);
};

export const getAuthToken = async () => {
  const storedToken = await AsyncStorage.getItem(AUTH_TOKEN);
  const storedExpiryTimestamp = await AsyncStorage.getItem(AUTH_TOKEN_EXPIRY);
  if (storedToken && storedExpiryTimestamp) {
    if (new Date().getTime() > Number(storedExpiryTimestamp)) {
      await AsyncStorage.removeItem(AUTH_TOKEN);
      await AsyncStorage.removeItem(AUTH_TOKEN_EXPIRY);
      return null;
    } else {
      return storedToken;
    }
  }
};

export const removeAuthToken = async () => {
  await AsyncStorage.removeItem(AUTH_TOKEN);
  await AsyncStorage.removeItem(AUTH_TOKEN_EXPIRY);
  await AsyncStorage.removeItem(AUTH_TOKEN_REFRESH_TOKEN);
};
