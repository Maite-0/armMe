import { createContext } from 'react';
import { AuthenticateModel, AuthenticateResultModel} from '../../api'
import { IRequestResult } from '../../../utils/index';

export interface IAuthStateContext{
    auth?: IRequestResult<AuthenticateResultModel>;
}

export interface IAuthErrorResponse {
    error: string;
    error_description: string;
    error_uri: string;
  }
  

export interface IAuthctionContext{
   login?:(payload:AuthenticateModel)=>Promise<AuthenticateResultModel>;
}

export const AuthState  = createContext<IAuthStateContext>({} as IAuthStateContext);

export const AuthActions  = createContext<IAuthctionContext>({} as IAuthctionContext);
