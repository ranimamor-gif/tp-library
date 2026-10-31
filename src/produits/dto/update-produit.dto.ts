import { PartialType } from '@nestjs/mapped-types';
import { CreateProduitDto } from './create-produit.dto.js';

export class UpdateProduitDto extends PartialType(CreateProduitDto) {}