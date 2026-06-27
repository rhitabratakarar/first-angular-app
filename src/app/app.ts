import { Component } from '@angular/core';
import { Home } from './home/home';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: ` <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img
          class="brand-logo"
          [ngSrc]="logoPath"
          aria-hidden="true"
          aria-hidden="true"
          width="150"
          height="60"
        />
      </header>
    </a>
    <section class="content">
      <router-outlet />
    </section>
  </main>`,
  styleUrls: ['./app.css'],
  imports: [Home, NgOptimizedImage, RouterLink, RouterOutlet],
})
export class App {
  logoPath: string = 'logo.svg';
}
