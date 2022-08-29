import Product from "../../../../domain/product/entity/product"
import ProductRepositoryInterface from "../../../../domain/product/repository/product-repository.interface"
import ProductModel from "./product.model"

export default class ProductRepository implements ProductRepositoryInterface {
  async create(product: Product): Promise<void> {
    await ProductModel.create({
      id: product.id,
      name: product.name,
      price: product.price
    })
  } 
  async update(product: Product): Promise<void> {
    throw new Error("Method not implemented.")
  }
  async find(id: string): Promise<Product> {
    throw new Error("Method not implemented.")
  }
  async findAll(): Promise<Product[]> {
    throw new Error("Method not implemented.")
  }
}