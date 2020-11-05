export default class BaseException extends Error {
  constructor(status, code, message, error, data) {
    super();
    this.status = status;
    this.code = code;
    this.message = message;
    this.error = error;
    this.data = data;
    Error.captureStackTrace(this, this.constructor);
  }
}
