import { Component, signal } from '@angular/core';
import { UseDialogComponent } from "./demo-components/dialog-simple/use-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [UseDialogComponent, UseDialogComponent]
})
export class App {
}
