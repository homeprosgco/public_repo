import { EventEmitter, HTTPRequest, Page } from "puppeteer";

export function TruckstopRequestListener(truckstopPage: Page): EventEmitter {
  console.log(truckstopPage);
  return truckstopPage.on('request', onRequest);
}

export function RemoveTruckstopRequestListener(truckstopPage: Page) {
  return truckstopPage.off('request', onRequest);
}

function onRequest(request: HTTPRequest) {
  const isXhr = ['xhr', 'fetch'].includes(request.resourceType());

  if(isXhr) {
    console.log('================== REQUEST INFO ============================');

    console.log(`request made: ${request.url()}`);
    if(request.url() === 'https://loadsearch-graphql-api-prod.truckstop.com/v1/graphql?loadSearchDefaultSortQuery') {
      
    }
    // console.log(`request made: ${request.postData()}`);
    // console.log(`request made: ${JSON.stringify(request.headers(), null, 2)}`);

    console.log('\n\n')
  }
}