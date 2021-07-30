import { Catch } from '@nestjs/common';
import { DatabaseException } from '../exceptions';
import { RootExceptionFilter } from "./root-exception.filter";

@Catch(DatabaseException)
export class DatabaseExceptionFilter extends RootExceptionFilter<DatabaseException> {}
