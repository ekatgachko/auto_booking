import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isWeekend', async: false })
export class isWeekend implements ValidatorConstraintInterface {
  validate(propertyValue: string, args: ValidationArguments) {
    const date = new Date(propertyValue);
    return !([6, 0].includes(date.getDay()));
  }
  defaultMessage(args: ValidationArguments): string {
    return 'Booking must not be on weekend';
  }
}
