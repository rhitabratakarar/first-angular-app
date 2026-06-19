import { Component } from '@angular/core';
import { Home } from './home/home';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-root',
  template: ` <main>
    <header class="brand-name">
      <img class="brand-logo" [ngSrc]="logoPath" aria-hidden="true" aria-hidden="true" width="150" height="60">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>`,
  styleUrls: ['./app.css'],
  imports: [Home, NgOptimizedImage],
})
export class App {
  logoPath: string = "logo.svg";
}
