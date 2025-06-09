import { Prospect } from "@graphql-schema/*";
import { ServerContext } from "../_interface/server-context.interface";
import { AddressService } from "../_service/firebase/admin/firestore/address.service";
export declare class ProspectResolver {
    private addressSvc;
    constructor(addressSvc: AddressService);
    address(prospect: Prospect, ctx: ServerContext): Promise<import("@graphql-schema/*").Address>;
}
