import { createApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import {createCustomElement} from '@angular/elements';
import { App } from "./app/app";

createApplication(appConfig)
  .then(appRef => {
    customElements.define('main-component', createCustomElement(App, {injector: appRef.injector}))
  })
