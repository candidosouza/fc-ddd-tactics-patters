import Address from '../value-object/address'

export class Customer {
  private readonly _id: string
  private _active: boolean = false
  private address!: Address

  constructor (public name: string) {
    this.validate()
  }

  id (): string {
    return this._id
  }

  changeName (name: string): any {
    this.name = name
    this.validate()
  }

  isActive (): boolean {
    return this._active
  }

  activate (): any {
    if (this.address === undefined) {
      throw new Error('Address is mandatory to activate a customer')
    }
    this._active = true
  }

  deactivate (): any {
    this._active = false
  }

  validate (): any {
    if (this.name.length < 3) {
      throw new Error('Name is required')
    }
  }

  set Address (address: Address) {
    this.address = address
  }

  get Address (): Address {
    return this.address
  }
}
