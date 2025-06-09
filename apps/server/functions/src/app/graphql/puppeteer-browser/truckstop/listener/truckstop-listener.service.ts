import { Injectable } from "@nestjs/common";
import { Page } from "puppeteer";
import { TruckstopService } from "../truckstop.service";
import { TruckstopRequestListener } from "./request/truckstop-request.listener";
import { TruckstopResponseListener } from "./response/truckstop-response.listener";

@Injectable()
export class TruckstopListenerService {

  #loadboardPage: Page;

  constructor(private truckstopSvc: TruckstopService){
    this.truckstopSvc.on('loadboardLoaded', (loadboardPage) => {
      this.#loadboardPage = loadboardPage;
      this.registerListeners();
    })
  }

  registerRequestListener() {
    TruckstopRequestListener(this.#loadboardPage);
    return {
      requestListenerEnabled: true,
    }
  }

  registerResponseListener() {
    TruckstopResponseListener(this.#loadboardPage);
    return {
      responseListenerEnabled: true
    }
  }

  registerListeners() {
    const requestListener = this.registerRequestListener();
    const responseListener = this.registerResponseListener();
    return {
      requestListener,
      responseListener
    };
  }

}