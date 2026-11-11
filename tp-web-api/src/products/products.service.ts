import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';

@Injectable()
export class ProductsService {
   private products: Product[] = [
    { id: 1, name: "Clavier", price: 80, stock: 12,
      category: "Informatique", isActive: true },
    { id: 2, name: "Souris", price: 35, stock: 0,
      category: "Informatique", isActive: true },
    { id: 3, name: "Bureau", price: 420, stock: 5,
      category: "Mobilier", isActive: false },
  ];
  private nextId = 4;
  create(createProductDto: CreateProductDto) {

    return 'This action adds a new product';
  }

  
     findAll(category?: string, search?: string): Product[] {
    return this.products.filter((product) => {
      const categoryOk = !category ||
        product.category.toLowerCase() === category.toLowerCase();
      const searchOk = !search ||
        product.name.toLowerCase().includes(search.toLowerCase());
      return categoryOk && searchOk;
    });
  }
  

  findOne(id: number) {
    
     
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new NotFoundException(`Produit ${id} introuvable`);
    }
    return product;
  
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
