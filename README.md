## Angular as a Webcomponent

This repo is an Angular 20 application with Tailwind V4 that can be used as a web component to inject into any web page. To use it as a web component, you can follow these steps:

1. Change the name of the project in the `package.json` and `package-lock.json` files.
2. Change the name of the component in the `src/main.ts` with the name you want to use as a Webcomponent.
  **File: `main.ts`**
  ``` typescript
  import { createApplication } from "@angular/platform-browser";
  import { appConfig } from "./app/app.config";
  import {createCustomElement} from '@angular/elements';
  import { App } from "./app/app"; //If you changed the name of the component class, import it here;
    
  createApplication(appConfig)
    .then(appRef => {
      customElements.define('<NAME OF THE WEB COMPONENT>', createCustomElement(App, {injector: appRef.injector}))
    })

3. Put the name of the component in the `/src/index.html` file like you would do in any other web page.
  **File: `index.html`**
  ```html
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Angular WebComponent</title>
      <base href="/">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="icon" type="image/x-icon" href="favicon.ico">
    </head>
    <body>
      <YOUR-COMPONENT-NAME></YOUR-COMPONENT-NAME> <!-- HERE -->
    </body>
  </html>

4. Change the selector name in the `/src/app/app.ts` so it matches the name of the web component.
  **File: `/src/app/app.ts`**
  ```typescript
  import { Component, ViewEncapsulation } from '@angular/core';

  @Component({
    selector: '<YOUR COMPONENT NAME>', //Here
    imports: [],
    templateUrl: './app.html',
    styleUrl: './app.css',
    standalone: true,
    encapsulation: ViewEncapsulation.ShadowDom
  })
  export class App {
  }
  
5. You can see the component changes with `ng serve`
6. Lastly, you can use the component in any other web page building it with `ng build`. Then go to `dist/<YOUR-COMPONENT-NAME>/browser` and follow the example in the `index.html` file.
