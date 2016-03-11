import {Component} from 'angular2/core';
import {GondolaHeaderComponenet} from './header/header';
import {GondolaFooterComponenet} from './footer/footer';
import gondolaTmpl from './gondola.html';

@Component({
    selector: 'my-gondola',
    template: gondolaTmpl,
    directives: [GondolaHeaderComponenet, GondolaFooterComponenet]
})

export class Gondola { 
    public title = 'Tour of Heroes';
    public hero = 'Windstorm';
}