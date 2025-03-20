import { createContext } from 'react';
import { IRequestResult } from '../../../utils/index';
import { RequestModel } from 'src/services/api/models/AuthenticateModel';
import { AwayArmResultModel } from 'src/services/api';

export interface IAwayArmStateContext{
    awayArm?: IRequestResult<AwayArmResultModel>;
}

export interface IAwayArmErrorResponse {
    error: string;
    error_description: string;
    error_uri: string;
  }
  
export interface IAwayArmActionContext{
   createAwayArm?:(payload:RequestModel)=>void;
}

export const AwayArmState  = createContext<IAwayArmStateContext>({} as IAwayArmStateContext);

export const AwayArmActions  = createContext<IAwayArmActionContext>({} as IAwayArmActionContext);
