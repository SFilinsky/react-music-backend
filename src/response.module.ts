import { Module } from '@nestjs/common';
import { ResponseService } from './services/response.service';

@Module({
  exports: [ResponseService],
  providers: [ResponseService],
})
export class ResponseModule {}
