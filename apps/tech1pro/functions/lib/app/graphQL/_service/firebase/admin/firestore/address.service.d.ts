import { Address, AddressInput } from "@graphql-schema/";
import { FirestoreService } from "../firestore.service";
export declare class AddressService {
    #private;
    private readonly firestoreSvc;
    constructor(firestoreSvc: FirestoreService);
    addAddress(accountId: string, address: AddressInput): Promise<Address>;
    getAddress(accountId: string, addressId: string): Promise<Address>;
    updateAddress(accountId: string, addressId: string, address: AddressInput): Promise<import("../../_types/types").TypeDataWithId<Address>>;
}
