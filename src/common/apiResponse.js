export class ApiResponse {
  constructor(data, code = null, message = null) {
    this.code = code;
    this.message = message;
    this.data = data;
  }
}
