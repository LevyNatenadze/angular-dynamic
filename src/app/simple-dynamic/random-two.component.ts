import { Component } from '@angular/core';
import { DYNAMIC_COMPONENT } from './dynamic.token';

@Component({
  selector: 'app-random-two',
  template: ` <div style="border: 1px solid red">🌿 Random two Component</div> `,
  providers: [
    {
      provide: DYNAMIC_COMPONENT,
      useValue: RandomTwoComponent,
    },
  ],
})
export class RandomTwoComponent {}
