import { Controller, Get } from '@nestjs/common';
import { ExtraIngredientsService } from './extraIngredient.service';

@Controller('extra_ingredients')
export class ExtraIngredientsController {
  constructor(
    // Подключение ExtraIngredientsService
    private readonly extraIngredientsService: ExtraIngredientsService,
  ) {}

  // GET ALL EXTRA INGREDIENTS FROM SERVICE ----
  @Get('')
  async getAllExtraIngredients() {
    return await this.extraIngredientsService.getAllExtraIngredients();
  }
}
