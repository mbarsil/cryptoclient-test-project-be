import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { AccountsService } from './accounts.service';

const BITCOIN_RATE_CHANNEL = 'bitcoinRate';
const EXCHANGE_RATE_PUSH_INTERVAL = 15000;

@WebSocketGateway()
export class AccountsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(
    private accountsService: AccountsService
  ) { }

  @WebSocketServer() server;

  async handleConnection(): Promise<void> {
    console.log('[INFO] ===> Connection established by client');
    this.initExchangeRatePush();
  }

  async handleDisconnect(){
    console.log('[INFO] ===> Connection closed by client');
  }

  // @SubscribeMessage(BITCOIN_RATE_CHANNEL)
  // async handleEvent(client, message): Promise<void> {
  //   console.log('[INFO] ===> Handling event');
  //   this.initExchangeRatePush();
  // }

  private initExchangeRatePush(): void {
    console.log('[INFO] ===> Pushing new Bitcoin exchange rate');
    this.server.emit(BITCOIN_RATE_CHANNEL, this.accountsService.getExchangeRate());

    setTimeout(() => {
      this.initExchangeRatePush();
    }, EXCHANGE_RATE_PUSH_INTERVAL);
  }
}
