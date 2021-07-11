import { Component, OnInit } from '@angular/core'
import { createOrder } from 'src/app/mocks'
import { Order } from 'src/app/models/order'

@Component({
  selector: 'app-list-order-items',
  templateUrl: './list-order-items.component.html',
  styleUrls: ['./list-order-items.component.scss'],
})
export class ListOrderItemsComponent implements OnInit {
  displayedColumns: string[] = ['item', 'quantity', 'price']
  footerColumns: string[] = ['item', 'price']

  order: Order = createOrder(6)

  constructor() {}

  ngOnInit(): void {
    console.log(this.order)
  }
}
