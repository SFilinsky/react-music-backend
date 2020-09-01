import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResponseService } from '../../services/response.service';

@Controller('search')
export class SearchController {
  items: { name: string; price: number; image: string }[] = [
    {
      name: 'Acoustic Guitar',
      price: 200,
      image: '',
    },
    {
      name: 'Electric Guitar',
      price: 500,
      image: '',
    },
    {
      name: 'Piano',
      price: 700,
      image: '',
    },
    {
      name: 'Drums',
      price: 1000,
      image: '',
    },
  ];

  constructor(private responseService: ResponseService) {}

  @Post('query')
  doQuery(
    @Body('query') query: string,
    @Res() response: Response,
  ): Promise<Response> {
    return Promise.resolve().then(() =>
      this.responseService.build(response, {
        body: {
          items: this.items.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase()),
          ),
        },
      }),
    );
  }
}
