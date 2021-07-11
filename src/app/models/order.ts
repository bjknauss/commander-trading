import { Product } from './product'

export interface OrderItem {
  product: Product
  quantity: number
  discount: number
  price: number
}

export interface Order {
  items: OrderItem[]
  discount: number
  note: string
  price: number
}
