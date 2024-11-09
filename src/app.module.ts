import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/product/product.module';

// Подключение базы данных к приложению;
import DatabaseConnection from './database/databaseConnection';
import { ExtraIngredientsModule } from './modules/extraIngredient/extraIngredient.module';

@Module({
  imports: [DatabaseConnection, ProductModule, ExtraIngredientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
