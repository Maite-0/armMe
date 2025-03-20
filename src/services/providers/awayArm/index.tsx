import React, {
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from 'react';
import {AxiosError} from 'axios';
import {
  IAwayArmErrorResponse,
  IAwayArmStateContext,
  AwayArmActions,
  AwayArmState,
} from './context';
import {AwayArmService} from '../../api';
import {RequestModel} from '../../api/models/AuthenticateModel';

const AwayArmProvider: FC<PropsWithChildren<any>> = ({children}) => {
  const [awayArm, setAwayArm] = useState<IAwayArmStateContext['awayArm']>();

  const createAwayArm = (payload: RequestModel) => {
    setAwayArm({state: 'loading'});
    AwayArmService.postApiServicesAppAwayArmCreateAsyc(payload)
      .then(res => {
        setAwayArm({
          state: 'success',
          value: res,
        });
      })
      .catch((error: AxiosError<IAwayArmErrorResponse>) => {
        setAwayArm({state: 'error', error: error?.response?.data});
      });
  };

  const memoizedState = useMemo(() => {
    return {awayArm};
  }, [awayArm]);

  const memoizedActions = useMemo(() => {
    return {
      createAwayArm,
    };
  }, [createAwayArm]);

  return (
    <AwayArmState.Provider value={memoizedState}>
      <AwayArmActions.Provider value={memoizedActions}>
        {children}
      </AwayArmActions.Provider>
    </AwayArmState.Provider>
  );
};

const useAwayArmState = () => {
  const context = useContext(AwayArmState);
  return context;
};

const useAwayArmActions = () => {
  const context = useContext(AwayArmActions);
  return context;
};

const useAwayArm = () => {
  return {...useAwayArmState(), ...useAwayArmActions()};
};

export {AwayArmProvider, useAwayArm};
