import { Component } from '@angular/core';
import { BaseDialogComponent } from '../../core/dialog-simple/base-dialog.component';
import { DialogContentComponent } from './dialog-content.component';

@Component({
    selector: 'use-dialog',
    template: `
        <div>
            <h2>Child</h2>
            <button (click)="openModal()">Open Modal</button>
        </div>
        @if (isModalOpen) {
            <base-dialog (closeModal)="closeModal()">
                <ng-container modal-header>The Modal Header</ng-container>
                <ng-container modal-body>
                    <dialog-content />
                </ng-container>
            </base-dialog>
        }
    `,
    imports: [BaseDialogComponent, DialogContentComponent]
})

export class UseDialogComponent {
    isModalOpen = false;

    openModal(): void {
        this.isModalOpen = true;
    }

    closeModal(): void {
        this.isModalOpen = false;
    }
}