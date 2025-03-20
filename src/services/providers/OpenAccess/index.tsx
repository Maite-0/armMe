import React, {
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from 'react';
import {AxiosError} from 'axios';
import {
  IOpenAccessErrorResponse,
  IOpenAccessStateContext,
  OpenAccessActions,
  OpenAccessState,
} from './context';
import {RequestModel} from '../../api/models/AuthenticateModel';
import {OpenAccessService} from '../../api/services/OpenAccessService';

const OpenAccessProvider: FC<PropsWithChildren<any>> = ({children}) => {
  const [openAccess, setOpenAccess] =
    useState<IOpenAccessStateContext['openAccess']>();

  const createOpenAccess = (payload: RequestModel) => {
    setOpenAccess({state: 'loading'});
    OpenAccessService.postApiServicesAppOpenAccessCreateAsyc(payload)
      .then(res => {
        setOpenAccess({
          state: 'success',
          value: res,
        });
      })
      .catch((error: AxiosError<IOpenAccessErrorResponse>) => {
        setOpenAccess({state: 'error', error: error?.response?.data});
      });
  };

  const memoizedState = useMemo(() => {
    return {openAccess};
  }, [openAccess]);

  const memoizedActions = useMemo(() => {
    return {
      createOpenAccess,
    };
  }, [createOpenAccess]);

  return (
    <OpenAccessState.Provider value={memoizedState}>
      <OpenAccessActions.Provider value={memoizedActions}>
        {children}
      </OpenAccessActions.Provider>
    </OpenAccessState.Provider>
  );
};

const useOpenAccessState = () => {
  const context = useContext(OpenAccessState);
  return context;
};

const useOpenAccessActions = () => {
  const context = useContext(OpenAccessActions);
  return context;
};

const useOpenAccess = () => {
  return {...useOpenAccessState(), ...useOpenAccessActions()};
};

export {OpenAccessProvider, useOpenAccess};
