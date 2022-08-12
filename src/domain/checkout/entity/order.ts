import OrderItem from './orderItem'

export default class Order {
  private readonly _total: number

  constructor (
    private readonly _id: string,
    private readonly _customerId: string,
    private readonly _items: OrderItem[] = []
  ) {
    this._total = this.total()
    this.validate()
  }

  id (): string {
    return this._id
  }

  customerId (): string {
    return this._customerId
  }

  items (): OrderItem[] {
    return this._items
  }

  validate (): boolean {
    if (this._id.length === 0) {
      throw new Error('Id is required')
    }
    if (this._customerId.length === 0) {
      throw new Error('CustomerId is required')
    }
    if (this._items.length === 0) {
      throw new Error('Items is required')
    }

    if (this._items.some((item) => item.quantity <= 0)) {
      throw new Error('Quantity must be greater than 0')
    }

    return true
  }

  total (): number {
    return this._items.reduce((acc, item) => acc + item.price, 0)
  }
}
