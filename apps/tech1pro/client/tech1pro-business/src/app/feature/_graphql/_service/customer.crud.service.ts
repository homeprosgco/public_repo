import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { map } from "rxjs";
import { CustomerByIdGQL, CustomerInput, CustomersGQL } from "src/generated/graphql";
import { addCustomerGql, removeCustomerGql, updateCustomerGql} from '../_input/mutation/customer.mutation';

@Injectable({
  providedIn: 'root'
})
export class CustomerCrudService {

  constructor(
    private apollo: Apollo,
    private customersGQL: CustomersGQL,
    private customerByIdGQL: CustomerByIdGQL
  ) {}

  addCustomer$(customerInput: CustomerInput) {
    return this.apollo.mutate({
      mutation: addCustomerGql,
      variables: {customerInput}
    }).pipe(
      map( (res: any) => res.data?.addCustomer.customerLastAdded)
    );
  }

  updateCustomer$(customerIdInput: string, updateCustomerInput: CustomerInput) {
    this.apollo.mutate({
      mutation: updateCustomerGql,
      variables: { customerIdInput, updateCustomerGql}
    }).pipe(
      map(( res: any) => res.data?.updateCustomer.customerLastUpdated)
    );
  }

  removeCustomer$(customerIdInput: string) {
    this.apollo.mutate({
      mutation: removeCustomerGql,
      variables: {customerIdInput }
    }).pipe(
      map( (res: any) => res.data?.removeCustomer.customers)
    );
  }

  fetchCustomers$() {
    return this.customersGQL.fetch().pipe(
      map(res => res.data.account.customers)
    );
  }

  fetchCustomerById$(customerId: string) {
    return this.customerByIdGQL.fetch({customerId}).pipe(
      map(res => res.data.account.customerById)
    )
  }
  
}