export interface CustomResponse {
  timeStamp: Date;
  httpStatus: string;
  message: String;
  error: String;
  data: { [key: string]: any };
}
