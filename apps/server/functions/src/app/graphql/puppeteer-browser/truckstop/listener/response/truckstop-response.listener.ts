import { EventEmitter, HTTPResponse, Page } from "puppeteer";
import { LoadOperations } from "../../util/load-operation";
import { ILoad } from "../interface/load.interface";

const loadKeys: { [key: string]: string } = {
  'default': 'get_loads_with_extra_data_v8_sort_by_default',
  'pickupAsc': 'get_loads_with_extra_data_v8_sort_by_pickup_asc',
  'pickupDsc': 'get_loads_with_extra_data_v8_sort_by_pickup_desc',
  'deadHeadAsc': 'get_loads_with_extra_data_v8_sort_by_origin_deadhead_asc',
  'deadHeadDsc': 'get_loads_with_extra_data_v8_sort_by_origin_deadhead_desc',
  'distanceAsc': 'get_loads_with_extra_data_v8_sort_by_trip_distance_asc',
  'distanceDsc': 'get_loads_with_extra_data_v8_sort_by_trip_distance_desc',
  'updatedOnAsc': 'get_loads_with_extra_data_v8_sort_by_updated_on_asc',
  'updatedOnDsc': 'get_loads_with_extra_data_v8_sort_by_updated_on_desc'
};

const baseURL = 'https://loadsearch-graphql-api-prod.truckstop.com/v1/graphql?';

export function TruckstopResponseListener(truckstopPage: Page): EventEmitter {
  return truckstopPage.on('response', onResponse);
}

export function RemoveTruckstopRequestListener(truckstopPage: Page) {
  return truckstopPage.off('response', onResponse);
}

async function onResponse(response: HTTPResponse) {
  const isXhr = ['xhr', 'fetch'].includes(response.request().resourceType())
  if (isXhr) {
    if (response.url() === `${baseURL}loadSearchDefaultSortQuery` || response.url() === `${baseURL}loadSearchSortingQuery`) {
      console.log('================== RESPONSE INFO ============================');
      console.log(`RESPONSE URL -> ${response.url()}`);
      const respJson = await response.json();
      console.log(respJson);

      if ('data' in respJson) {
        let loads: ILoad[] = [];

        for (const key in loadKeys) {

          if (respJson.data[loadKeys[key]]) {
            loads = (respJson.data[loadKeys[key]] as ILoad[]);

            if (loads.some(load => load.originDeadhead !== null)) {

              loads = (respJson.data[loadKeys[key]] as ILoad[]).filter(load => {
                return (LoadOperations.isWorkingState(load.originState) && LoadOperations.isWorkingState(load.destinationState)) &&
                  (load.originDeadhead !== null && load.originDeadhead <= 90) && (load.tripDistance <= 1700)
              });


            }
          }
        }

      }
    }
  }
}