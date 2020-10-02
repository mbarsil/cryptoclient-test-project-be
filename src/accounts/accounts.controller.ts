import { Controller, Get } from '@nestjs/common';

import { AccountsService } from './accounts.service';
import { Account } from '../shared/common.constant';

@Controller('accounts')
export class AccountsController {
  constructor(
    private accountsService: AccountsService
  ) {}

  @Get()
  getAllAccounts(): Account[] {
    return this.accountsService.accounts;
  }
}
