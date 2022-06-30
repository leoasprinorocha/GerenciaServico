import { CustomResponse } from './../home/custom-response';
export class SerializationHelper {
  static toInstance<CustomResponse>(json: string): CustomResponse {
    let response = new CustomResponse();
    var jsonObj = JSON.parse(json);
    let customResponse: CustomResponse = Object.assign(response, jsonObj);
    return customResponse;
  }
}
