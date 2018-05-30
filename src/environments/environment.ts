// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import * as firebase from 'firebase/app'
export const environment = {
  production: false,
  config : {
    apiKey: "AIzaSyAb6rTFCFFX2e-U5Mnn0ip0qGDke9eRVw4",
    authDomain: "dvt-snowball.firebaseapp.com",
    databaseURL: "https://dvt-snowball.firebaseio.com",
    projectId: "dvt-snowball",
    storageBucket: "dvt-snowball.appspot.com",
    messagingSenderId: "251207193051"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
