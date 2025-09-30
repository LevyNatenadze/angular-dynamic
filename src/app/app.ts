import { Component } from '@angular/core';
import { UseDialogSimpleComponent } from './demo-components/dialog-simple/use-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [UseDialogSimpleComponent]
})
export class App {
}
