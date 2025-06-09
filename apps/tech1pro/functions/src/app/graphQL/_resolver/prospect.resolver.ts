import { Prospect } from "@graphql-schema/*";
import { Resolver, ResolveField, Parent, Context } from "@nestjs/graphql";
import { ServerContext } from "../_interface/server-context.interface";
import { AddressService } from "../_service/firebase/admin/firestore/address.service";

@Resolver('Prospect')
export class ProspectResolver {

  constructor(private addressSvc: AddressService) {}

  @ResolveField('address')
  async address(@Parent() prospect: Prospect, @Context() ctx: ServerContext) {
    const { addressId } = prospect;
    return this.addressSvc.getAddress(ctx.accountId, (addressId as string));
  }
}