import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { RequestModel } from '../models/AuthenticateModel';
import { OpenAccessResultModel } from '../models/OpenAcessResultModel';

export class OpenAccessService {

  /**
   * @param requestBody 
   * @returns AuthenticateRequestModel Success
   * @throws ApiError
   */
  public static postApiServicesAppOpenAccessCreateAsyc(
requestBody?: RequestModel,
): CancelablePromise<OpenAccessResultModel> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v2/DemoSystem/Open',
      body: requestBody,
      mediaType: 'application/x-www-form-urlencoded',
    });
  }


}
