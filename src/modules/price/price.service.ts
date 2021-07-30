import { Injectable } from '@nestjs/common';
import { PriceDto } from './price.dto';
import { RateRepository } from './rate.repository';
import { PriceInterface } from './price.interface';
import { DiscountRepository } from './discount.repository';
import { DateConstant } from '../../common';

@Injectable()
export class PriceService {
  constructor(
    private readonly rateRepository: RateRepository,
    private readonly discountRepository: DiscountRepository,
  ) {}

  public async calculatePrice(PriceDto: PriceDto): Promise<PriceInterface> {
    const start = new Date(PriceDto.startDate);
    const end = new Date(PriceDto.endDate);

    const days =
      (end.getTime() - start.getTime()) / DateConstant.MILLISECONDS_IN_DAY;
    const discount = await this.discountRepository.getDiscountByDays(days);
    const discountCoefficient = 1 - discount.rate / 100;
    const rate = await this.rateRepository.getRateById(PriceDto.rateId);

    return {
      days: days,
      price: days * rate.price * discountCoefficient,
      rate: rate.price,
      discount: discount.rate,
    };
  }
}
