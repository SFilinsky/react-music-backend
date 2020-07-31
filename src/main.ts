import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule),
    port = 30000;
  app.enableCors({
    origin: ['http://localhost:3000'],
  });
  await app.listen(port);
}
bootstrap();
