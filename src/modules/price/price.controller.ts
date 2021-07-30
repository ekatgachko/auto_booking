import { Body, Controller, Post } from '@nestjs/common';
import { PriceDto } from './price.dto';
import { PriceService } from './price.service';

@Controller('price')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @Post()
  public async calculatePrice(@Body() priceDto: PriceDto) {
    return await this.priceService.calculatePrice(priceDto);
  }
}
