// import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@mfe-one/app",
//   app: () =>
//     System.import(
//       "http://localhost:9999/js/app.js"
//     ),
//   activeWhen: ["/"],
// });

// // registerApplication({
// //   name: "@org/navbar",
// //   app: () => System.import("@org/navbar"),
// //   activeWhen: ["/"]
// // });

// start({
//   urlRerouteOnly: true,
// });

import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

const routes = constructRoutes(document.querySelector("#single-spa-layout"));
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);

start({
  urlRerouteOnly: true,
});
