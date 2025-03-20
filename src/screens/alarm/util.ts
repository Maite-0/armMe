import {useEffect, useState} from 'react';
import {usePartitionStatus} from '../../services/providers/partitionStatus';
import {useAwayArm} from '../../services/providers/awayArm';
import {useOpenAccess} from '../../services/providers/OpenAccess';
import {PAYLOAD} from '../../utils/constants/index';
import Toast from 'react-native-toast-message';

export const useAlarm = () => {
  const {partitionStatus, createPartitionStatus} = usePartitionStatus();
  const {awayArm, createAwayArm} = useAwayArm();
  const {openAccess, createOpenAccess} = useOpenAccess();
  const [alarmStatus, setAlarmStatus] = useState<boolean | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [canExecuteArm, setCanExecuteArm] = useState<boolean>(false);

  useEffect(() => {
    const initializeSystem = async () => {
      await openConnection();
    };
    initializeSystem();
  }, []);

  useEffect(() => {
    if (openAccess?.state === 'success') {
      fetchAlarmStatus();
    }
  }, [openAccess]);

  useEffect(() => {
    if(canExecuteArm === true){
    if (awayArm?.state === 'success') {
      fetchAlarmStatus();
    } else {
      setTimeout(() => {
        Toast.show({
          type: 'error',
          text1: 'Failed to Arm the alarm',
          text2: 'Please try again!',
        });
      }, 1000);
    }};
  }, [awayArm]);

  useEffect(() => {
    if (partitionStatus?.state === 'success') {
      setAlarmStatus(true);
    } else {
      setAlarmStatus(false);
      setLoading(false);
    }
  }, [partitionStatus]);

  const openConnection = async () => {
    createOpenAccess(PAYLOAD);
  };

  const fetchAlarmStatus = async () => {
    setLoading(true);
    await createPartitionStatus(PAYLOAD);
  };

  const armSystem = async () => {
    setCanExecuteArm(true)
    await createAwayArm(PAYLOAD);
  };

  return {
    isLoading,
    armSystem,
    alarmStatus,
    setAlarmStatus,
  };
};
