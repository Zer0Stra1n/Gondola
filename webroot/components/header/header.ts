import {Component} from 'angular2/core';
import headerTmpl from './header.html';
import headerStyles from './header.css';

@Component({
    selector: 'my-header',
    styles: [headerStyles],
    template: headerTmpl
})

export class GondolaHeaderComponenet { }