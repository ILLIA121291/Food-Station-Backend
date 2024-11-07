// @app - подключение абсолютных путей в dev режиме;
if (!process.env.IS_TS_NODE) {
  require('module-alias/register');
}

// Необходимый импорт;
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app.module';

// Дополнителный импорт, устанавливать дополнительно нечего ненужно;
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';


async function bootstrap() {
  // В данном действии Nest.js создает приложение;
  // <NestExpressApplication> - добовляем данный дженерик для создания публичной папки; 
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // Данне дейстиве создает публичную папку;
  app.useStaticAssets(join(__dirname, 'public'));
  
  // app.enableCors() - данная настройка необходима для того чтобы forntend и backend работали на одном ПК; 
  app.enableCors();

  // В данном дейстивии происходит прослушка порта;
  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
