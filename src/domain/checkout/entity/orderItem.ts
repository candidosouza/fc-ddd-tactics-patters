export default class OrderItem {
  constructor (
    private readonly _id: string,
    private readonly _productId: string,
    private readonly _name: string,
    private readonly _price: number,
    private readonly _quantity: number
  ) {}

  id (): string {
    return this._id
  }

  get name (): string {
    return this._name
  }

  get productId (): string {
    return this._productId
  }

  get quantity (): number {
    return this._quantity
  }

  get price (): number {
    return this._price * this._quantity
  }
}
