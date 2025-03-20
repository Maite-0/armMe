import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { RequestModel } from '../models/AuthenticateModel';
import { PartitionStatusResultModel } from '../models/PartitionStatusResultModel';

export class PartitionStatusService {

  /**
   * @param requestBody 
   * @returns AuthenticateRequestModel Success
   * @throws ApiError
   */
  public static postApiServicesAppPartitionStatusCreateAsyc(
requestBody?: RequestModel,
): CancelablePromise<PartitionStatusResultModel> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v2/DemoSystem/PartitionStatus',
      body: requestBody,
      mediaType: 'application/x-www-form-urlencoded',
    });
  }
}
