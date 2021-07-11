import { Product } from '../models/product'
import { createAction, createReducer, on, props } from '@ngrx/store'
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity'

export interface ProductsEntity extends EntityState<Product> {}

export const productsAdapter: EntityAdapter<Product> = createEntityAdapter({
  selectId: (p: Product) => p.id,
})

export interface CreateProductProps {
  name: string
  unit: string
  code: string
  price: string
}

export const loadAllProducts = createAction('[Product] Load All')
export const setAllProducts = createAction(
  '[Product] Set All',
  props<{ products: Product[] }>()
)
export const createNewProduct = createAction(
  '[Product] Create New Product',
  props<{ product: CreateProductProps }>()
)
export const addProduct = createAction(
  '[Product] Add Product',
  props<{ product: Product }>()
)
export const requestProductDelete = createAction(
  '[Product] Request Product Delete',
  props<{ productId: string }>()
)
export const deleteProduct = createAction(
  '[Product] Delete Product',
  props<{ productId: string }>()
)

export const productsReducer = createReducer(
  productsAdapter.getInitialState(),

  on(setAllProducts, (state, { products }) => {
    return productsAdapter.setAll(products, state)
  }),

  on(addProduct, (state, { product }) => {
    return productsAdapter.addOne(product, state)
  }),

  on(deleteProduct, (state, { productId }) => {
    return productsAdapter.removeOne(productId, state)
  })
)
