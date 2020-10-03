import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { AccountsService } from './accounts.service';
import Timeout = NodeJS.Timeout;

const BITCOIN_RATE_CHANNEL = 'bitcoinRate';
const ACCOUNTS_BALANCE_CHANNEL = 'accountsBalance';
const EXCHANGE_RATE_PUSH_INTERVAL = 15000;

@WebSocketGateway()
export class AccountsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  timer: Timeout;

  constructor(
    private accountsService: AccountsService
  ) { }

  @WebSocketServer() server;

  async handleConnection(): Promise<void> {
    console.log('[INFO] ===> Connection established by client');
    this.initExchangeRatePush();
    this.initAccountBalancePush();
  }

  async handleDisconnect() {
    console.log('[INFO] ===> Connection closed by client');
    clearTimeout(this.timer);
  }

  private initExchangeRatePush(): void {
    console.log('[INFO] ===> Pushing new Bitcoin exchange rate');
    this.server.emit(BITCOIN_RATE_CHANNEL, this.accountsService.getExchangeRate());

    this.timer = setTimeout(
      () => this.initExchangeRatePush(),
      EXCHANGE_RATE_PUSH_INTERVAL
    );
  }

  private initAccountBalancePush(): void {
    console.log('[INFO] ===> Pushing new account balance');
    this.server.emit(ACCOUNTS_BALANCE_CHANNEL, this.accountsService.getAllAccounts());

    this.timer = setTimeout(
      () => this.initAccountBalancePush(),
      this.accountsService.getRandomeValue(EXCHANGE_RATE_PUSH_INTERVAL)
    );
  }
}
