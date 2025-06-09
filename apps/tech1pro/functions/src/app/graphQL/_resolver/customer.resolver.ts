import { Customer } from "@graphql-schema/*";
import { Resolver, ResolveField, Parent, Context } from "@nestjs/graphql";
import { ServerContext } from "../_interface/server-context.interface";
import { AddressService } from "../_service/firebase/admin/firestore/address.service";

@Resolver('Customer')
export class CustomerResolver {

  constructor(private addressSvc: AddressService) {}

  @ResolveField('address')
  async address(@Parent() customer: Customer, @Context() ctx: ServerContext) {
    const { addressId } = customer;
    return this.addressSvc.getAddress(ctx.accountId, (addressId as string));
  }
}