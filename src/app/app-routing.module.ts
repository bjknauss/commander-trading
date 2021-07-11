import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AddProductComponent } from './admin/add-product/add-product.component'
import { AddStockComponent } from './admin/add-stock/add-stock.component'
import { EditProductComponent } from './admin/edit-product/edit-product.component'
import { NewOrderComponent } from './user/new-order/new-order.component'

const routes: Routes = [
  { path: 'add-product', component: AddProductComponent },
  { path: 'edit-product', component: EditProductComponent },
  { path: 'add-stock', component: AddStockComponent },
  { path: 'new-order', component: NewOrderComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
