 export interface IConsumer {
    code: string;
    name: string;
    gender: string;
    annualSalary: number;
    dateOfBirth: string;
}

export class Consumer implements IConsumer {

    constructor(public code: string, public name: string, public gender: string,
        public annualSalary: number, public dateOfBirth: string) {
    }

}