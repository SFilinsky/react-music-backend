import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { ResponseModule } from '../../response.module';

@Module({
  imports: [ResponseModule],
  controllers: [SearchController],
})
export class SearchModule {}
