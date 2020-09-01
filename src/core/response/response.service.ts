import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { ResponseData } from './response-data.entity';

@Injectable()
export class ResponseService {
  build<T>(
    res: Response,
    options?: { body?: T; status?: number; message?: string },
  ): Response<ResponseData<T>> {
    let body,
      status = 200,
      message;
    if (options) {
      body = options.body ? options.body : body;
      status = options.status ? options.status : status;
      message = options.message ? options.message : message;
    }
    return res.status(status).json(
      body || message
        ? {
            body,
            message,
          }
        : undefined,
    );
  }

  error(
    res: Response,
    err: Error,
    message?: string,
  ): Response<ResponseData<string>> {
    console.error(err);
    return res.status(500).json(message ? { message } : undefined);
  }
}
