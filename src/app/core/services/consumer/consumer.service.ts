import { Injectable } from '@angular/core';
import { IConsumer } from '../../models/consumer-model';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {
  getConsumers(): IConsumer[] {
    return [
        {
            code: 'consumer101', name: 'Tom', gender: 'Male',
            annualSalary: 5500, dateOfBirth: '6/25/1988'
        },
        {
            code: 'consumer102', name: 'Alex', gender: 'Male',
            annualSalary: 5700.95, dateOfBirth: '9/6/1982'
        },
        {
            code: 'consumer103', name: 'Mike', gender: 'Male',
            annualSalary: 5900, dateOfBirth: '12/8/1979'
        },
        {
            code: 'consumer104', name: 'Mary', gender: 'Female',
            annualSalary: 6500.826, dateOfBirth: '10/14/1980'
        },
        {
            code: 'consumer105', name: 'Nancy', gender: 'Female',
            annualSalary: 6700.826, dateOfBirth: '12/15/1982'
        },
        {
            code: 'consumer106', name: 'Steve', gender: 'Male',
            annualSalary: 7700.481, dateOfBirth: '11/18/1979'
        },
    ];
}
  constructor() { }
}
