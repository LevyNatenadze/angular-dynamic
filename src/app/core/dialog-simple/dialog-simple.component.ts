import {
  Component,
  effect,
  inject,
  OnDestroy,
  output,
  signal,
  viewChild,
} from '@angular/core';
import {
  CdkPortal,
  PortalModule,
} from '@angular/cdk/portal';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';

@Component({
  selector: 'simple-dialog',
  templateUrl: './dialog-simple.component.html',
  imports: [PortalModule],
})
export class DialogSimpleComponent implements OnDestroy {
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
