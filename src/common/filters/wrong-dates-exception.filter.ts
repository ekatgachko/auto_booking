import { Catch } from '@nestjs/common';
import { WrongDatesException } from '../exceptions';
import { RootExceptionFilter } from "./root-exception.filter";

@Catch(WrongDatesException)
export class WrongDatesExceptionFilter extends RootExceptionFilter<WrongDatesException> {}
