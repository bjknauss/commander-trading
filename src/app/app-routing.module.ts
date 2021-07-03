import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddStockComponent } from './admin/add-stock/add-stock.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';

const routes: Routes = [
  { path: 'add-product', component: AddProductComponent },
  { path: 'edit-product', component: EditProductComponent },
  { path: 'add-stock', component: AddStockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
