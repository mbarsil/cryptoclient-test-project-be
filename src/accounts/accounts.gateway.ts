import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Socket } from 'socket.io';
import Timeout = NodeJS.Timeout;

import { AccountsService } from './accounts.service';
import { Account } from './account.model';
import {
  ACCOUNT_DETAIL_CHANNEL,
  ACCOUNTS_BALANCE_CHANNEL,
  BITCOIN_RATE_CHANNEL,
  EXCHANGE_RATE_PUSH_INTERVAL,
} from './accounts.constant';

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

  @SubscribeMessage(ACCOUNT_DETAIL_CHANNEL)
  async onRequestAccountDetail(client: Socket, id: number){
    console.log(`[INFO] ===> Received message in channel ${ACCOUNT_DETAIL_CHANNEL} for account ${id}`);
    this.accountsService
      .getUpdatedAccountSubscription()
      .subscribe((account: Account) => {
        if (account.id === id) {
          console.log('[INFO] ===> Pushing new account detail for account with id ', id);
          this.server.emit(ACCOUNT_DETAIL_CHANNEL, account);
        }
      });
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
    this.server.emit(ACCOUNTS_BALANCE_CHANNEL, this.accountsService.getAllAccounts());

    this.timer = setTimeout(
      () => this.initAccountBalancePush(),
      this.accountsService.getRandomeValue(EXCHANGE_RATE_PUSH_INTERVAL)
    );
  }
}
