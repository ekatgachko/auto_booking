import { Injectable } from '@nestjs/common';
import { AutoRepository } from './auto.repository';
import { AutoResponseDto } from './auto.dto';

@Injectable()
export class AutoService {
  constructor(private autoRepository: AutoRepository) {
  }

  async getAutoById(autoId: number): Promise<AutoResponseDto> {
    return  await this.autoRepository.getAutoById(autoId);
  }

  async getAll(): Promise<AutoResponseDto[]> {
    return  await this.autoRepository.getAll();
  }
}
