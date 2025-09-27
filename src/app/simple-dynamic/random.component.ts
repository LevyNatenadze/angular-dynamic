import { Component } from '@angular/core';
import { DYNAMIC_COMPONENT } from './dynamic.token';

@Component({
  selector: 'app-random',
  template: ` <div style="border: 1px solid green">🌿 Random Component</div> `,
  providers: [
    {
      provide: DYNAMIC_COMPONENT,
      useValue: RandomComponent,
    },
  ],
})
export class RandomComponent {}
