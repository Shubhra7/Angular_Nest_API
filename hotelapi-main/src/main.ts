import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
  origin: 'http://localhost:4200', // allow only Angular frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // allow cookies/auth headers
});


  await app.listen(process.env.PORT || 3000);
}
bootstrap();
