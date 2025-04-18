import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { envs } from './config';
import { RcpCustomExceptionFilter } from './common';

async function bootstrap() {

  const logger = new Logger('Main-Gateway')

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalFilters(new RcpCustomExceptionFilter);

  await app.listen(envs.port);
  logger.log(`Running on port ${envs.port}`)
}
bootstrap();
