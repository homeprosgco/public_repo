import { Injectable } from '@angular/core';
import { Estimate, Invoice, LineItem, LineWorkService } from 'src/generated/graphql';
import { parseBase10Int, totalNumbers } from '../_lib/util/util';

@Injectable({
  providedIn: 'root'
})
export class SaleAccountService {

  #tax = 0.07;

  constructor() { }

  lineItemsTotal(lineItems: LineItem[]) {
    const lineItemsTotals = lineItems.map( lineItem => parseBase10Int(lineItem.item.salePrice) * lineItem.quantity);
    return totalNumbers(lineItemsTotals);
  }

  lineWorkServicesTotal(lineWorkServices: LineWorkService[]) {
    const lineItems = lineWorkServices
    .filter(lineWorkService => lineWorkService.workService.lineItems?.length)
    .map( lineWorkServiceWithLineItems => (lineWorkServiceWithLineItems.workService.lineItems as LineItem[])).flat();
    const lineItemsTotals = this.lineItemsTotal(lineItems);
    const lineWorkServiceLaborTotals = lineWorkServices
    .map( lineWorkService => parseBase10Int(lineWorkService.workService.salePrice) * lineWorkService.quantity);
    return totalNumbers([lineItemsTotals, ...lineWorkServiceLaborTotals]);
  }

  saleAccountTotal(saleAccount: Estimate | Invoice) {
    const lineItemsTotal = saleAccount.lineItems ? this.lineItemsTotal(saleAccount.lineItems) : 0;
    const lineWorkServicesTotal = saleAccount.lineWorkServices ? this.lineWorkServicesTotal(saleAccount.lineWorkServices) : 0;
    return totalNumbers([lineItemsTotal, lineWorkServicesTotal]);
  }

  subTotal(saleAccount: Estimate | Invoice) {
    return this.saleAccountTotal(saleAccount);
  }

  tax(saleAccount: Estimate | Invoice) {
    return this.subTotal(saleAccount) * this.#tax;
  }

  total(saleAccount: Estimate | Invoice) {
    return this.subTotal(saleAccount) + this.tax(saleAccount);
  }

}
