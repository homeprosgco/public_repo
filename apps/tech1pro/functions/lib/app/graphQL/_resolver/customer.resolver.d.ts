import { Customer } from "@graphql-schema/*";
import { ServerContext } from "../_interface/server-context.interface";
import { AddressService } from "../_service/firebase/admin/firestore/address.service";
export declare class CustomerResolver {
    private addressSvc;
    constructor(addressSvc: AddressService);
    address(customer: Customer, ctx: ServerContext): Promise<import("@graphql-schema/*").Address>;
}
