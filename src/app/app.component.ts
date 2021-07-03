import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMenuOpened = true;

  pages = [
    { link: 'add-product', title: 'Add Product' },
    { link: 'edit-product', title: 'Edit Product' },
    { link: 'add-stock', title: 'Add Stock' }
  ]
}
