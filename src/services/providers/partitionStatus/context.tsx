import { createContext } from 'react';
import { IRequestResult } from '../../../utils/index';
import { RequestModel } from 'src/services/api/models/AuthenticateModel';
import { PartitionStatusResultModel } from 'src/services/api';

export interface IPartitionStatusStateContext{
    partitionStatus?: IRequestResult<PartitionStatusResultModel>;
}

export interface IPartitionStatusErrorResponse {
    error: string;
    error_description: string;
    error_uri: string;
  }
  
export interface IPartitionStatusActionContext{
   createPartitionStatus?:(payload:RequestModel)=>void;
}

export const PartitionStatusState  = createContext<IPartitionStatusStateContext>({} as IPartitionStatusStateContext);

export const PartitionStatusActions  = createContext<IPartitionStatusActionContext>({} as IPartitionStatusActionContext);
