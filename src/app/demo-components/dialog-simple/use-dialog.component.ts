import { Component } from '@angular/core';
import { DialogContentComponent } from './dialog-content.component';
import { DialogSimpleComponent } from "../../core/dialog-simple/dialog-simple.component";

@Component({
    selector: 'use-dialog-simple',
    template: `
        <div>
            <h2>Child</h2>
            <button (click)="openModal()">Open Modal</button>
        </div>
        @if (isModalOpen) {
            <simple-dialog (closeModal)="closeModal()">
                <ng-container modal-header>The Modal Header</ng-container>
                <ng-container modal-body>
                    <dialog-content />
                </ng-container>
            </simple-dialog>
        }
    `,
    imports: [DialogContentComponent, DialogSimpleComponent]
})

export class UseDialogSimpleComponent {
    isModalOpen = false;

    openModal(): void {
        this.isModalOpen = true;
    }

    closeModal(): void {
        this.isModalOpen = false;
    }
}