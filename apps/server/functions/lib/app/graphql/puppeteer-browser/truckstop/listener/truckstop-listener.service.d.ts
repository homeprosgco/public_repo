import { TruckstopService } from "../truckstop.service";
export declare class TruckstopListenerService {
    #private;
    private truckstopSvc;
    constructor(truckstopSvc: TruckstopService);
    registerRequestListener(): {
        requestListenerEnabled: boolean;
    };
    registerResponseListener(): {
        responseListenerEnabled: boolean;
    };
    registerListeners(): {
        requestListener: {
            requestListenerEnabled: boolean;
        };
        responseListener: {
            responseListenerEnabled: boolean;
        };
    };
}
