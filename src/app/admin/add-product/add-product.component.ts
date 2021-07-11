import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Product } from 'src/app/models/product'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  product: Product

  constructor() {
    this.product = this.createEmptyProduct()
  }

  ngOnInit(): void {}

  createEmptyProduct(): Product {
    return {
      name: '',
      code: '',
      price: 0,
      unit: '',
    }
  }

  onSubmit(f: NgForm) {
    window.alert(JSON.stringify(this.product))
  }
}
