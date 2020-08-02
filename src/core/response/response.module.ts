import { Module } from '@nestjs/common';
import { ResponseService } from './response.service';

@Module({
  exports: [ResponseService],
  providers: [ResponseService],
})
export class ResponseModule {}
