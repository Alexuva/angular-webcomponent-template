import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'main-component',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class App {
}
