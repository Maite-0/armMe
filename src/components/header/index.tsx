import React from 'react';
import {View, Text} from 'react-native';
import {Screens} from '../../screens';
import ShaView from '../view/shaView';
import ShaIcon from '../icon/shaIcon';
import {styles} from './style';
import { useNavigation } from '@react-navigation/native';
import { removeAuthToken } from '../../utils/token';

const Header = ({title}) => {
   const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <ShaView style={styles.headerIconsContainer}>
        <ShaIcon
          name={title === '' ? 'menu' : 'arrow-left'}
          type="feather"
          size={25}
          color="white"
          style={{padding: 0}}
          onPress={() => {
            if (!Screens.Alarm || title !== Screens.Alarm) {
              // navigation.goBack();
            } else {
              null;
            }
          }}
        />
        <ShaIcon
          name={title === '' ? 'log-out' : 'menu'}
          type="feather"
          size={25}
          color="white"
          style={{padding: 0}}
          onPress={async() => {
            if (!Screens.Alarm || title !== Screens.Alarm) {
               await removeAuthToken()
               navigation.goBack();
            } else {
              null;
            }
          }}
        />
      </ShaView>
    </View>
  );
};

export default Header;
