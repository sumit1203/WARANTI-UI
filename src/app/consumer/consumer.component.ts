import { Component, OnInit } from '@angular/core';
import { IConsumer } from '../core/models/consumer-model';
// Import EmployeeService
import { ConsumerService } from '../core/services/consumer/consumer.service';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css'],
  providers: [ConsumerService]
})
export class ConsumerComponent implements OnInit {
  consumers: IConsumer[];
  constructor(private _consumerService: ConsumerService) { }

  ngOnInit() {
    this.consumers = this._consumerService.getConsumers();
  }

}
