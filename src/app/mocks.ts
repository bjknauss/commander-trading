import { Product } from './models/product'
import { commerce, random, datatype } from 'faker'
import { Order, OrderItem } from './models/order'

export const mockProducts: Product[] = [
  {
    id: datatype.uuid(),
    name: 'Cement 205',
    unit: 'kg',
    code: 'ABC',
    price: 72,
  },
  {
    id: datatype.uuid(),
    name: 'Nylon wire',
    unit: 'meters',
    code: 'CDE',
    price: 28,
  },
  {
    id: datatype.uuid(),
    name: 'Bolt 1/2',
    unit: 'pc',
    code: 'ES',
    price: 5,
  },
]

const units = ['pc', 'meters', 'kg', 'g', 'cm']

export function createProduct(): Product {
  return {
    id: datatype.uuid(),
    name: commerce.productName(),
    unit: random.arrayElement(units),
    code: random.alpha({ count: 3, upcase: true }),
    price: datatype.number({ min: 1, max: 9999 }),
  }
}

export function createOrderItem(): OrderItem {
  const quantity = datatype.number({ min: 1, max: 10 })
  const product = createProduct()
  return {
    product,
    quantity,
    discount: 0,
    price: product.price * quantity,
  }
}

export function createNumOfItems<T>(n: number, fn: () => T): T[] {
  return new Array(n).fill(0).map(() => fn())
}

export function createOrder(numOfItems: number): Order {
  const items = createNumOfItems(numOfItems, createOrderItem)
  const price = items.reduce((sum, item) => sum + item.price, 0)

  return {
    items,
    discount: 0,
    note: '',
    price,
  }
}
