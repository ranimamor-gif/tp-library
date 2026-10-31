
import { Injectable, NotFoundException } from '@nestjs/common';
import { Produit } from './entities/produit.entity.js';
import { CreateProduitDto } from './dto/create-produit.dto.js';
import { UpdateProduitDto } from './dto/update-produit.dto.js';

@Injectable()
export class ProduitsService {
  private produits: Produit[] = [];
  private nextId = 1;

  // CREATE
  create(dto: CreateProduitDto) {
    const produit: Produit = {
      id: this.nextId++,
      ...dto,
    };

    this.produits.push(produit);
    return produit;
  }

  // READ ALL
  findAll() {
    return this.produits;
  }

  // READ ONE
  findOne(id: number) {
    const produit = this.produits.find(p => p.id === id);

    if (!produit) {
      throw new NotFoundException(`Produit ${id} introuvable`);
    }

    return produit;
  }

  // UPDATE
  update(id: number, dto: UpdateProduitDto) {
    const produit = this.findOne(id);
    Object.assign(produit, dto);
    return produit;
  }

  // DELETE
  remove(id: number) {
    const index = this.produits.findIndex(p => p.id === id);

    if (index === -1) {
      throw new NotFoundException(`Produit ${id} introuvable`);
    }

    return this.produits.splice(index, 1);
  }
}
