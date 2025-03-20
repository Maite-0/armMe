import React from 'react';
import {View, Text, Button, ActivityIndicator} from 'react-native';
import {useAlarm} from './util';
import {getStyling} from './style';
import Toast from 'react-native-toast-message';
import ShaImage from '../../components/image/shaImage';

const Alarm = () => {
  const {isLoading, alarmStatus, armSystem} = useAlarm();
  const styles = getStyling(alarmStatus);

  return (
    <View style={styles.container}>
       <View style={styles.titleContainer}>
        <ShaImage source={require('../../assets/icon.png')} style={styles.icon} />
        <Text style={styles.armMetitle}>
          <Text style={styles.armText}>ARM</Text>
          <Text style={styles.meText}>ME</Text>
        </Text>
      </View>

      <Text style={styles.title}>Alarm System Status</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : (
        <View style={styles.statusContainer}>
          <Text style={styles.statusLabel}>Current Alarm Status:</Text>
          <Text style={[styles.status,{color: alarmStatus  ? "green" : "red"}]}>
            Alarm is {alarmStatus ? 'ON' : 'OFF'}
          </Text>
        </View>
      )}

      <View style={styles.buttonContainer}>
        <Button title="Arm/Disarm Alarm" onPress={armSystem} color="#007BFF" />
      </View>
      <Toast />
    </View>
  );
};

export default Alarm;
