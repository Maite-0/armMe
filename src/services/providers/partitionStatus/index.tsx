import React, {
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from 'react';
import {AxiosError} from 'axios';
import {
  IPartitionStatusErrorResponse,
  IPartitionStatusStateContext,
  PartitionStatusActions,
  PartitionStatusState,
} from './context';
import {RequestModel} from '../../api/models/AuthenticateModel';
import {PartitionStatusService} from '../../api/services/PartitionStatusService';

const PartitionStatusProvider: FC<PropsWithChildren<any>> = ({children}) => {
  const [partitionStatus, setPartitionStatus] =
    useState<IPartitionStatusStateContext['partitionStatus']>();

  const createPartitionStatus = (payload: RequestModel) => {
    setPartitionStatus({state: 'loading'});
    PartitionStatusService.postApiServicesAppPartitionStatusCreateAsyc(payload)
      .then(res => {
        setPartitionStatus({
          state: 'success',
          value: res,
        });
      })
      .catch((error: AxiosError<IPartitionStatusErrorResponse>) => {
        setPartitionStatus({state: 'error', error: error?.response?.data});
      });
  };

  const memoizedState = useMemo(() => {
    return {partitionStatus};
  }, [partitionStatus]);

  const memoizedActions = useMemo(() => {
    return {
      createPartitionStatus,
    };
  }, [createPartitionStatus]);

  return (
    <PartitionStatusState.Provider value={memoizedState}>
      <PartitionStatusActions.Provider value={memoizedActions}>
        {children}
      </PartitionStatusActions.Provider>
    </PartitionStatusState.Provider>
  );
};

const usePartitionStatusState = () => {
  const context = useContext(PartitionStatusState);
  return context;
};

const usePartitionStatusActions = () => {
  const context = useContext(PartitionStatusActions);
  return context;
};

const usePartitionStatus = () => {
  return {...usePartitionStatusState(), ...usePartitionStatusActions()};
};

export {PartitionStatusProvider, usePartitionStatus};
