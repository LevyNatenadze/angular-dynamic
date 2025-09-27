import { Component, signal } from '@angular/core';
import { DynamicHostComponent } from "./simple-dynamic/dynamic-host.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [DynamicHostComponent]
})
export class App {
  title = signal('Angular Signal Starter');
}
