import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

const data = {
  props: {},
  loaders: {
    mainContentLoader: `<div class="content"><div class="wrapper"><h1 class="placeholder-loading">LOADING<span>.</span><span>.</span><span>.</span></h1></div></div>`,
  },
};

const routes = constructRoutes(
  document.querySelector("#single-spa-layout"),
  data
);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);

/* System.import("@react-mf/styleguide").then(() => {
  // Activate the layout engine once the styleguide CSS is loaded
  layoutEngine.activate();
  start();
}); */

layoutEngine.activate();
start();
