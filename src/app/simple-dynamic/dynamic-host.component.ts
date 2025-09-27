import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  inject,
  OnInit,
  signal,
  Type,
  ViewChild,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { RandomComponent } from './random.component';
import { RandomTwoComponent } from './random-two.component';

@Component({
  selector: 'app-dynamic-host',
  template: `
    <button (click)="load(randomComponent)">Load Random</button>
    <button (click)="load(randomTwoComponent)">Load Random Two</button>

    <ng-container #outlet>
      <h1>hello component</h1>
    </ng-container>
  `,
})
export class DynamicHostComponent {
  viewContainerRef = viewChild('outlet', { read: ViewContainerRef });
  private readonly current = signal<Type<unknown> | null>(null);

  readonly randomComponent = RandomComponent;
  readonly randomTwoComponent = RandomTwoComponent;

  constructor() {
    effect(() => {
      const view = this.viewContainerRef();
      const component = this.current();

      if (view && component) {
        view.clear();
        view.createComponent(component);
      }
    });
  }

  load(component: Type<unknown>) {
    this.current.set(component);
  }
}
