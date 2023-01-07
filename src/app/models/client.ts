export interface client{
  clientId: number
  firstName: string
  lastName: string
  phone: number
  email: string
  username: string
  password: string
  age: number
  clientAddress: {
    addressLine1: string
    addressLine2: string
    city: string
    state: string
    country: string
    pincode: number
  }
  dob: any
}
