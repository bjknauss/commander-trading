import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { createNumOfItems, createProduct } from 'src/app/mocks'
import { Product } from 'src/app/models/product'
import { filter, map, startWith } from 'rxjs/operators'
import { Observable, of } from 'rxjs'

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.scss'],
})
export class SearchProductsComponent implements OnInit {
  allProducts = createNumOfItems(30, createProduct)
  filteredProducts: Observable<Product[]> = of([])

  searchControl = new FormControl('')

  constructor() {}

  ngOnInit(): void {
    this.filteredProducts = this.searchControl.valueChanges.pipe(
      startWith(''),
      filter((v) => typeof v === 'string'),
      map((v) => {
        if (v === '') {
          return this.allProducts
        }
        return this.allProducts.filter((p) => p.name.includes(v))
      })
    )
  }

  selectProduct(p: Product) {
    window.alert(JSON.stringify(p))
  }
}
