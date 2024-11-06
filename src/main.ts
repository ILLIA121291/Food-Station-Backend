// @app - подключение абсолютных путей в dev режиме;
if (!process.env.IS_TS_NODE) {
  require('module-alias/register');
}

// Необходимый импорт;
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app.module';

async function bootstrap() {
  // В данном действии Nest.js создает приложение;
  const app = await NestFactory.create(AppModule);

  // В данном дейстивии происходит прослушка порта;

  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
  //await app.listen(3000);
}
bootstrap();
