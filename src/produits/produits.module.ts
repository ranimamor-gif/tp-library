import { Module } from '@nestjs/common';
import { ProduitsService } from './produits.service.js';
import { ProduitsController } from './produits.controller.js';

@Module({
  controllers: [ProduitsController],
  providers: [ProduitsService],
})
export class ProduitsModule {}