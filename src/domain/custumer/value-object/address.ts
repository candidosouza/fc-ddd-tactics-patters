export default class Address {
  constructor (
    protected readonly street: string,
    protected readonly number: number,
    protected readonly zipCode: string,
    protected readonly city: string,
    protected readonly state: string,
    protected readonly country: string
  ) {
    this.validate()
  }

  validate (): void {
    if (this.street.length < 3) {
      throw new Error('Street is required')
    }
    if (this.number < 1) {
      throw new Error('Number is required')
    }
    if (this.zipCode.length < 8) {
      throw new Error('ZipCode is required')
    }
    if (this.city.length < 3) {
      throw new Error('City is required')
    }
    if (this.state.length < 2) {
      throw new Error('State is required')
    }
    if (this.country.length < 2) {
      throw new Error('Country is required')
    }
  }

  toString (): string {
    return `${this.street}, ${this.number} - ${this.zipCode} - ${this.city} - ${this.state} - ${this.country}`
  }
}
