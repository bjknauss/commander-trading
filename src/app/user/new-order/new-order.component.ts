import { Component, OnInit } from '@angular/core'
import { createOrder } from 'src/app/mocks'
import { Order } from 'src/app/models/order'

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],
})
export class NewOrderComponent implements OnInit {
  displayedColumns: string[] = ['item', 'quantity', 'cost']

  order: Order = createOrder(6)

  constructor() {}

  ngOnInit(): void {}
}
