const { BaseException } = require('./baseException');

export class ValidationException extends BaseException {
  constructor(message, data = null) {
    super();
    this.status = 400;
    this.code = 'VALIDATION_EXCEPTION';
    this.message = message;
    this.data = data;
  }
}

export class NotFoundException extends BaseException {
  constructor(message, data = null) {
    super();
    this.status = 404;
    this.code = 'NOT_FOUND_EXCEPTION';
    this.message = message;
    this.data = data;
  }
}

export class ConflictException extends BaseException {
  constructor(message, data = null) {
    super();
    this.status = 409;
    this.code = 'CONFLICT_EXCEPTION';
    this.message = message;
    this.data = data;
  }
}

export class InternalException extends BaseException {
  constructor(message, data = null) {
    super();
    this.status = 500;
    this.code = 'INTERNAL_EXCEPTION';
    this.message = message;
    this.data = data;
  }
}
