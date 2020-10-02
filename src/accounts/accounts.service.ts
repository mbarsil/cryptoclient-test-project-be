import { Injectable } from '@nestjs/common';

import { Account } from '../shared/common.constant';
import { ACCOUNT_DATA } from './data';

@Injectable()
export class AccountsService {
  private _accounts = ACCOUNT_DATA;

  get accounts(): Account[] {
    return this._accounts;
  }
}
