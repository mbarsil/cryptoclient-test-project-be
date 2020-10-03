import { Injectable } from '@nestjs/common';

import { Account } from './account.model';
import { ACCOUNT_DATA, EXCHANGE_RATE } from './data';

const VARIATION_MAX_THRESHOLD = 1;
const VARIATION_MIN_THRESHOLD = 0.5;

@Injectable()
export class AccountsService {
  private accounts: Account[] = ACCOUNT_DATA;
  private exchangeRate: number = EXCHANGE_RATE;

  getExchangeRate(): number {
    this.exchangeRate = this.getRandomeValue(this.exchangeRate);

    return this.exchangeRate;
  }

  getAllAccounts(): Account[] {
    return this.accounts;
  }

  getAccountById(id: string): Account {
    if (!id) { return; }

    return this.accounts.find((account: Account) => account.id === Number(id));
  }

  private getRandomeValue(originalValue: number): number {
    return originalValue * (Math.random() * (VARIATION_MAX_THRESHOLD - VARIATION_MIN_THRESHOLD) + VARIATION_MAX_THRESHOLD);
  }
}
