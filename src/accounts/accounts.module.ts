import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { AccountsGateway } from './accounts.gateway';

@Module({
  controllers: [AccountsController],
  providers: [
    AccountsService,
    AccountsGateway
  ]
})
export class AccountsModule {}
