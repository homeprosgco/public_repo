import { Injectable } from '@angular/core';
import faker from '@faker-js/faker';
import { format } from 'date-fns'
import { of } from 'rxjs';

const jobLeadStatuses: string[] = ['new', 'estimate scheduled', 'estimate completed', 'estimate sent', 'estimate expired', 'estimate accepted', 'converted to job'];

@Injectable({
  providedIn: 'root'
})
export class JobLeadsService {

  constructor() { }

  #mockJobLeads$() {
    const mockLeads = Array.from({ length: faker.datatype.number({ max: 50 }) }).map(_ => {
      const poNumber = faker.random.numeric(4);
      const index = faker.datatype.number({ max: jobLeadStatuses.length - 1 });
      return {
        po: faker.random.numeric(4),
        customer: {
          firstname: faker.name.firstName(),
          lastname: faker.name.lastName()
        },
        status: jobLeadStatuses[index],
        actinRequired: faker.datatype.boolean(),
        category: faker.commerce.department(),
        dateCreated: format(faker.date.recent(), 'MM/dd/yyyy')
      }
    });
    return of(mockLeads);
  }

  jobLeads$() {
    return this.#mockJobLeads$();
  }

}
