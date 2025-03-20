import React, {
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import { AuthenticateModel, AuthenticateResultModel, TokenAuthService } from "../../api";
import { AxiosError } from "axios";
import {
  IAuthErrorResponse,
  IAuthStateContext,
  AuthActions,
  AuthState,
} from "./context";
import { saveToken } from "../../../utils/token";


const AuthProvider: FC<PropsWithChildren<any>> = ({ children }) => {
  const [auth, setAuth] = useState<IAuthStateContext["auth"]>();

 const login = (payload: AuthenticateModel) : Promise<AuthenticateResultModel> =>
    new Promise((resolve, reject) => {
      setAuth({ state: "loading" });
    TokenAuthService.postApiTokenAuthAuthenticate(payload)
      .then((res) => {
        setAuth({ state: "success", value: res});
         saveToken(res.access_token,res.expires_in,res.refresh_token)
        resolve(res)
      }).catch((error: AxiosError<IAuthErrorResponse>) => {
        setAuth({ state: "error", error: error?.response?.data });
        reject(error?.response?.data)
      });
     });

  const memoizedState = useMemo(() => {
    return { auth};
  }, [auth]);

  const memoizedActions = useMemo(() => {
    return {
       login
    };
  }, [login]);

  return (
    <AuthState.Provider value={memoizedState}>
      <AuthActions.Provider value={memoizedActions}>
        {children}
      </AuthActions.Provider>
    </AuthState.Provider>
  );
};

const useAuthState = () => {
  const context = useContext(AuthState);
  return context;
};

const useAuthActions = () => {
  const context = useContext(AuthActions);
  return context;
};

const useAuth = () => {
  return { ...useAuthState(), ...useAuthActions() };
};

export { AuthProvider, useAuth };
