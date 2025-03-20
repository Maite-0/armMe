import { createContext } from 'react';
import { IRequestResult } from '../../../utils/index';
import { OpenAccessResultModel } from 'src/services/api';
import { RequestModel } from 'src/services/api/models/AuthenticateModel';

export interface IOpenAccessStateContext{
    openAccess?: IRequestResult<OpenAccessResultModel>;
}

export interface IOpenAccessErrorResponse {
    error: string;
    error_description: string;
    error_uri: string;
  }
  
export interface IOpenAccessActionContext{
  createOpenAccess?:(payload:RequestModel)=>void;
}

export const OpenAccessState  = createContext<IOpenAccessStateContext>({} as IOpenAccessStateContext);

export const OpenAccessActions  = createContext<IOpenAccessActionContext>({} as IOpenAccessActionContext);
