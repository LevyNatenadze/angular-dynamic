import {
  Component,
  effect,
  inject,
  OnDestroy,
  OnInit,
  output,
  signal,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
  CdkPortal,
  CdkPortalOutlet,
  Portal,
  PortalModule,
} from '@angular/cdk/portal';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';

@Component({
  selector: 'base-dialog',
  templateUrl: 'base-dialog.component.html',
  imports: [PortalModule],
})
export class BaseDialogComponent implements OnDestroy {
  private readonly overlay = inject(Overlay);
  portal = viewChild(CdkPortal);
  closeModal = output<void>();

  private overlayRef = signal(
    this.overlay.create(
      new OverlayConfig({
        hasBackdrop: true,
        positionStrategy: this.overlay
          .position()
          .global()
          .centerHorizontally()
          .centerVertically(),
        scrollStrategy: this.overlay.scrollStrategies.block(),
        minWidth: 500,
      })
    )
  );

  constructor() {
    effect(() => {
      const ref = this.overlayRef();
      ref.backdropClick().subscribe(() => this.closeModal.emit());
      ref.attach(this.portal());
    });
  }

  ngOnDestroy(): void {
    const ref = this.overlayRef();
    ref.detach();
    ref.dispose();
  }
}
