import { Beneficiary } from "@graphql-schema/*";
import { ServerContext } from "../_interface/server-context.interface";
import { AddressService } from "../_service/firebase/admin/firestore/address.service";
export declare class BeneficiaryResolver {
    private addressSvc;
    constructor(addressSvc: AddressService);
    address(beneficiary: Beneficiary, ctx: ServerContext): Promise<import("@graphql-schema/*").Address>;
}
