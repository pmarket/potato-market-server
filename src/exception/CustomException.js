class BaseException extends Error {
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

export class ValidationException extends BaseException {
  constructor(message, error, data = null) {
    super(400, 'VALIDATION_EXCEPTION', message, error, data);
  }
}

export class NotFoundException extends BaseException {
  constructor(message, error, data = null) {
    super(404, 'NOT_FOUND_EXCEPTION', message, error, data);
  }
}

export class ConflictException extends BaseException {
  constructor(message, error, data = null) {
    super(409, 'CONFLICT_EXCEPTION', message, error, data);
  }
}

export class InternalException extends BaseException {
  constructor(message, error, data = null) {
    super(500, 'INTERNAL_EXCEPTION', message, error, data);
  }
}

export class TokenExpiredException extends BaseException {
  constructor(message, error, data = null) {
    super(401, 'TOKEN_EXPIRED_EXCEPTION', message, error, data);
  }
}

export class ExternalApiException extends BaseException {
  constructor(message, error, data = null) {
    super(500, 'EXTERNAL_EXCEPTION', message, error, data);
  }
}
