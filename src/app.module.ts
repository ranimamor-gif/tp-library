import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './users/users.module.js';
import { ProduitsModule } from './produits/produits.module.js';

@Module({
  imports: [UsersModule, ProduitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
