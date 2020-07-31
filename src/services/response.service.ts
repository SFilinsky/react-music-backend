import { Injectable } from '@nestjs/common';
import { Response } from 'express';

export class ResponseData<T> {
  body?: T;

  message?: string;
}

@Injectable()
export class ResponseService {
  build<T>(
    res: Response,
    options: { body?: T; status?: number; message?: string },
  ): Response<ResponseData<T>> {
    return res.status(options.status ? options.status : 200).json(
      options.body || options.message
        ? {
            body: options.body,
            message: options.message,
          }
        : null,
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
