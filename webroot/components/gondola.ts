import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

//Shell template
import gondolaTmpl from './gondola.html';

//Child Components
import {GondolaHeaderComponenet} from './header/header';
import {GondolaFooterComponenet} from './footer/footer';

//Route Components
import {ArchiveViewComponenet} from './archive_view/archive_view';

@Component({
    selector: 'my-gondola',
    template: gondolaTmpl,
    directives: [GondolaHeaderComponenet, GondolaFooterComponenet, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    {
        path: '/',
        name: 'Archive',
        component: ArchiveViewComponenet
    },
        {
        path: '/boop',
        name: 'Boop',
        component: ArchiveViewComponenet
    },
        {
        path: '/test',
        name: 'Test',
        component: ArchiveViewComponenet
    }
])

export class Gondola {
    public title = 'Tour of Heroes';
    public hero = 'Windstorm';
}