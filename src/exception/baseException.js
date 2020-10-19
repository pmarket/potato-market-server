export class BaseException extends Error {
  constructor(status, code, message, data) {
    super();
    this.status = status;
    this.code = code;
    this.message = message;
    this.data = data;
    Error.captureStackTrace(this, this.constructor);
  }
}
