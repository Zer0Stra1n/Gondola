import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {GondolaHeaderComponenet} from './header/header';
import {GondolaFooterComponenet} from './footer/footer';
import gondolaTmpl from './gondola.html';

@Component({
    selector: 'my-gondola',
    template: gondolaTmpl,
    directives: [GondolaHeaderComponenet, GondolaFooterComponenet],
    providers: [ROUTER_PROVIDERS]
})

// @RouteConfig([
//     {
//         path: '/',
//         name: '',
//         component: 
//     }
// ])

export class Gondola { 
    public title = 'Tour of Heroes';
    public hero = 'Windstorm';
}