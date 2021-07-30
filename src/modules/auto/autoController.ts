import { Controller, Get, Param } from '@nestjs/common';
import { AutoService } from './auto.service';
import { AutoResponseDto } from './auto.dto';

@Controller('auto')
export class AutoController {
  constructor(private readonly autoService: AutoService) {}

  @Get('/:autoId')
  public async getAutoById(@Param('autoId') autoId: number): Promise<AutoResponseDto> {
    return this.autoService.getAutoById(autoId);
  }

  @Get()
  public async getAll(): Promise<AutoResponseDto[]> {
    return this.autoService.getAll();
  }
}
