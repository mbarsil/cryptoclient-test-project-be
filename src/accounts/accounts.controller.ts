import { Controller, Get, Param } from '@nestjs/common';

import { AccountsService } from './accounts.service';
import { Account, ExchangeRate } from './account.model';

@Controller('accounts')
export class AccountsController {
  constructor(
    private accountsService: AccountsService
  ) {}

  @Get()
  getExchangeRate(): ExchangeRate {
    return this.accountsService.getExchangeRate();
  }

  @Get()
  getAllAccounts(): Account[] {
    return this.accountsService.getAllAccounts();
  }

  @Get('/:id')
  getAccountById(@Param('id') id: string): Account {
    return this.accountsService.getAccountById(id);
  }
}
