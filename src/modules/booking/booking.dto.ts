import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  Max,
  Validate,
} from 'class-validator';
import { IsBeforeConstraint } from '../../common/constraints/isbefore.constraint';
import { IsLowerMonthConstraint } from '../../common/constraints/isLowerMonth.constraint';
import { isWeekend } from '../../common/constraints/isWeekend';

export class BookingDto {
  @IsPositive()
  @IsInt()
  @IsNotEmpty()
  @Validate(IsBeforeConstraint, ['endDate'])
  @Validate(IsLowerMonthConstraint, ['endDate'])
  @Validate(isWeekend)
  startDate: number;

  @IsPositive()
  @IsInt()
  @IsNotEmpty()
  @Validate(isWeekend)
  endDate: number;

  @IsPositive()
  @IsInt()
  @IsNotEmpty()
  @Max(3)
  rateId: number;

  @IsPositive()
  @IsInt()
  @IsNotEmpty()
  @Max(5)
  autoId: number;
}
