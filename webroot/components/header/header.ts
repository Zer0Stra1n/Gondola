import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

import headerTmpl from './header.html';
import headerStyles from './header.css';

@Component({
    selector: 'my-header',
    styles: [headerStyles],
    template: headerTmpl
})


export class GondolaHeaderComponenet {
    constructor( private _router: Router ){}
    
    activeNav: string = '';
    
    setActive(item: string){
        this.activeNav = item;
        this.gotoLink(item);
    }
    
    gotoLink(route: string){
        let link = [route];
        this._router.navigate(link);
    }
}