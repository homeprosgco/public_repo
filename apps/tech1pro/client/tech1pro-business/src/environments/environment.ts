// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  uri: 'http://localhost:3250/tech1-pro-infrastructure/us-central1/api/graphql',
  baseURL: 'http://localhost:3250/tech1-pro-infrastructure/us-central1/api',
  firebaseConfig: {
    apiKey: "AIzaSyC3M9EP2eDhNc_qZteVbrIYIoj3x7BijT4",
    authDomain: "tech1-pro-infrastructure.firebaseapp.com",
    projectId: "tech1-pro-infrastructure",
    storageBucket: "tech1-pro-infrastructure.appspot.com",
    messagingSenderId: "420051489403",
    appId: "1:420051489403:web:2fe88773a2acd10e6e88de"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
