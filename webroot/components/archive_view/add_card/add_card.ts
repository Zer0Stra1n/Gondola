import {Component} from '@angular/core';
import { Router } from '@angular/router-deprecated';

import addTmpl from './add_card.html';
import addStyles from './add_card.css';

@Component({
    selector: 'gondola-add-card',
    styles: [addStyles],
    template: addTmpl
})

export class GondolaAddCardComponenet {
    constructor(private _router: Router) { }
}