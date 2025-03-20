import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { RequestModel } from '../models/AuthenticateModel';
import { AwayArmResultModel } from '../models/AwayArmResultModel';

export class AwayArmService {

  /**
   * @param requestBody 
   * @returns AuthenticateRequestModel Success
   * @throws ApiError
   */
  public static postApiServicesAppAwayArmCreateAsyc(
requestBody?: RequestModel,
): CancelablePromise<AwayArmResultModel> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v2/DemoSystem/AwayArm',
      body: requestBody,
      mediaType: 'application/x-www-form-urlencoded',
    });
  }
}
