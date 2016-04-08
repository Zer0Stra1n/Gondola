import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

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