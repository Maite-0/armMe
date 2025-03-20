import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../screens';
import Header from '../components/header';
import Alarm from '../screens/alarm';
import Login from '../screens/login';

const Stack = createNativeStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Screens.Login}
          component={Login}
          options={{headerShown: false}}
        />
       <Stack.Screen
            name={Screens.Alarm}
            component={Alarm}
            options={{ header: () => <Header title={''} /> }}
          />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
