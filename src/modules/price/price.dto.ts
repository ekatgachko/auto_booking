import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  Max,
  Validate,
} from 'class-validator';
import { IsBeforeConstraint } from '../../common/constraints/isbefore.constraint';
import { IsLowerMonthConstraint } from '../../common/constraints/isLowerMonth.constraint';

export class PriceDto {
  @IsPositive()
  @IsInt()
  @IsNotEmpty()
  @Validate(IsBeforeConstraint, ['endDate'])
  @Validate(IsLowerMonthConstraint, ['endDate'])
  startDate: number;

  @IsPositive()
  @IsInt()
  @IsNotEmpty()
  endDate: number;

  @IsPositive()
  @IsInt()
  @IsNotEmpty()
  @Max(3)
  rateId: number;
}
