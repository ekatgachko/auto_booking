import { Controller, Get, Param, UseFilters } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountResponseDto } from './account-response.dto';
import { DatabaseExceptionFilter } from '../../common/filters';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get('/:id')
  @UseFilters(new DatabaseExceptionFilter())
  async getAccountById(
    @Param('id') autoId: number,
  ): Promise<AccountResponseDto[]> {
    return this.accountService.getAccountById(autoId);
  }

  @Get('')
  @UseFilters(new DatabaseExceptionFilter())
  async getAccountAllAuto(): Promise<AccountResponseDto[]> {
    return this.accountService.getAccountAllAuto();
  }
}
