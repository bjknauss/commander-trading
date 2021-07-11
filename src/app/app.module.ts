import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module'
import { AddProductComponent } from './admin/add-product/add-product.component'
import { EditProductComponent } from './admin/edit-product/edit-product.component'
import { AddStockComponent } from './admin/add-stock/add-stock.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NewOrderComponent } from './user/new-order/new-order.component'
import { ListOrderItemsComponent } from './component/list-order-items/list-order-items.component'
import { SearchProductsComponent } from './component/search-products/search-products.component'
import { StoreModule } from '@ngrx/store'
import { productsReducer } from './redux/products.entity'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    EditProductComponent,
    AddStockComponent,
    NewOrderComponent,
    ListOrderItemsComponent,
    SearchProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forRoot({ products: productsReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'PHP' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
