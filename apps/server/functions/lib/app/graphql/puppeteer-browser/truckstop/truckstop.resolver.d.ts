import { OriginLocationInput, Truckstop } from '../../../graphql.schema.interface';
import { TruckstopService } from './truckstop.service';
export declare class TruckstopResolver {
    private truckstopSvc;
    constructor(truckstopSvc: TruckstopService);
    truckstop(): Promise<Truckstop>;
    login(): Promise<Truckstop>;
    loadSearch({ city, state }: OriginLocationInput): Promise<Truckstop>;
}
