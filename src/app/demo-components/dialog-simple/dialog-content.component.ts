import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dialog-content',
    template: `
        Hello user {{user}}
    `
})

export class DialogContentComponent {
    user = 'name';
}