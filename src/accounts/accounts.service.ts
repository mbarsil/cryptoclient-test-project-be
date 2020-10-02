import { Injectable } from '@nestjs/common';

import { Account, ExchangeRate } from './account.model';
import { ACCOUNT_DATA, EXCHANGE_RATE } from './data';

@Injectable()
export class AccountsService {
  private accounts: Account[] = ACCOUNT_DATA;
  private exchangeRate: ExchangeRate = EXCHANGE_RATE;

  getExchangeRate(): ExchangeRate {
    return this.exchangeRate;
  }

  getAllAccounts(): Account[] {
    return this.accounts;
  }

  getAccountById(id: string): Account {
    if (!id) { return; }

    return this.accounts.find((account: Account) => account.id === Number(id));
  }
}
