import { Controller, Get, Param } from '@nestjs/common';

import { AccountsService } from './accounts.service';
import { Account } from './account.model';

@Controller('accounts')
export class AccountsController {
  constructor(
    private accountsService: AccountsService
  ) {}

  @Get('/:id')
  getAccountById(@Param('id') id: string): Account {
    return this.accountsService.getAccountById(id);
  }
}
