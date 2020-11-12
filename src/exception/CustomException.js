import BaseException from '@src/exception/BaseException';

export class ValidationException extends BaseException {
  constructor(message, data = null) {
    super(400, 'VALIDATION_EXCEPTION', message, data);
  }
}

export class NotFoundException extends BaseException {
  constructor(message, data = null) {
    super(404, 'NOT_FOUND_EXCEPTION', message, data);
  }
}

export class ConflictException extends BaseException {
  constructor(message, data = null) {
    super(409, 'CONFLICT_EXCEPTION', message, data);
  }
}

export class InternalException extends BaseException {
  constructor(message, data = null) {
    super(500, 'INTERNAL_EXCEPTION', message, data);
  }
}

export class TokenExpiredException extends BaseException {
  constructor(message, data = null) {
    super(401, 'TOKEN_EXPIRED_EXCEPTION', message, data);
  }
}

export class ExternalApiException extends BaseException {
  constructor(message, data = null) {
    super(502, 'EXTERNAL_EXCEPTION', message, data);
  }
}
