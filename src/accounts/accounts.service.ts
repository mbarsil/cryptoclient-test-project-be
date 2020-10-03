import { Injectable } from '@nestjs/common';

import { Account } from './account.model';
import { ACCOUNT_DATA, EXCHANGE_RATE } from './data';

@Injectable()
export class AccountsService {
  private accounts: Account[] = ACCOUNT_DATA;
  private exchangeRate: number = EXCHANGE_RATE;

  getExchangeRate(): number {
    this.exchangeRate = this.getRandomeValue(this.exchangeRate);

    return this.exchangeRate;
  }

  getAllAccounts(): Account[] {
    this.accounts = this.accounts.map((account: Account) => {
      const newBalance = this.getRandomeValue(account.balance);

      return {
        ...account,
        balance: newBalance,
        availableBalance: newBalance - newBalance / 10
      }
    });

    return this.accounts;
  }

  getAccountById(id: string): Account {
    if (!id) { return; }

    return this.accounts.find((account: Account) => account.id === Number(id));
  }

  getRandomeValue(originalValue: number): number {
    // Random values between 0.8 and 1.2
    return originalValue * (Math.random() * 0.4 + 0.8);
  }
}
