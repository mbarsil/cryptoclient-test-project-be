import { Injectable } from '@nestjs/common';

import { BehaviorSubject } from 'rxjs';
const uniqid = require('uniqid');
const moment = require('moment');

import { Account, Transaction } from './account.model';
import { ACCOUNT_DATA, EXCHANGE_RATE } from './data';
import { TRANSACTION_TYPE } from './accounts.constant';

@Injectable()
export class AccountsService {
  private updatedAccountSubject$ = new BehaviorSubject<Account>(null);
  private accounts: Account[] = ACCOUNT_DATA;
  private exchangeRate: number = EXCHANGE_RATE;

  getExchangeRate(): number {
    this.exchangeRate = this.getRandomeValue(this.exchangeRate);

    return this.exchangeRate;
  }

  getAllAccounts(): Account[] {
    this.accounts = this.accounts.map((account: Account) => {
      const addTransaction = Math.random() < 0.5;

      if (addTransaction) {
        account.transactions.push(this.generateNewTransaction(account));
        account.balance = account.transactions.reduce(
          (acc, curr) => acc + curr.credit,
          account.balance
        );

        if(this.updatedAccountSubject$) {
          this.updatedAccountSubject$.next(account);
        }

        console.log('[INFO] ===> Pushing new account balance');
      }

      return account;
    });

    return this.accounts;
  }

  getAccountById(id: string): Account {
    if (!id) { return; }

    return this.accounts.find((account: Account) => account.id === Number(id));
  }

  getRandomeValue(originalValue: number, includeNegatives = false): number {
    // Random values between -0.8 and 1.2
    if (includeNegatives) {
      return originalValue * (Math.random() * 2 - 0.8);
    }
    // Random values between 0.8 and 1.2

    return originalValue * (Math.random() * 0.7 + 0.8);
  }

  getUpdatedAccountSubscription(): BehaviorSubject<Account> {
    this.updatedAccountSubject$ = null;
    this.updatedAccountSubject$ = new BehaviorSubject<Account>(null);

    return this.updatedAccountSubject$;
  }

  stopUpdatedAccountSubscription(): void {
    this.updatedAccountSubject$.complete();

    this.updatedAccountSubject$ = null;
  }

  private generateNewTransaction(account: Account): Transaction {
    const transactionCredit = this.getRandomeValue(1, true);

    return {
      id: uniqid(),
      confirmedDate: `${moment().format('l')}  ${moment().format('H:mm')}`,
      type: TRANSACTION_TYPE[Math.floor(Math.random() * TRANSACTION_TYPE.length)],
      credit: transactionCredit,
      balance: account.balance - transactionCredit
    };
  }
}
