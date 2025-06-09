import { Beneficiary } from "@graphql-schema/*";
import { Resolver, ResolveField, Parent, Context } from "@nestjs/graphql";
import { ServerContext } from "../_interface/server-context.interface";
import { AddressService } from "../_service/firebase/admin/firestore/address.service";

@Resolver('Beneficiary')
export class BeneficiaryResolver {

  constructor(private addressSvc: AddressService) {}

  @ResolveField('address')
  async address(@Parent() beneficiary: Beneficiary, @Context() ctx: ServerContext) {
    const { addressId } = beneficiary;
    return this.addressSvc.getAddress(ctx.accountId, (addressId as string));
  }
}