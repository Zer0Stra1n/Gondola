import {Component} from '@angular/core';
import archiveTmpl from './archive_view.html';

import {GondolaAddCardComponenet} from './add_card/add_card'

@Component({
    selector: 'gondola-archive',
    template: archiveTmpl,
    directives: [GondolaAddCardComponenet]
})

export class ArchiveViewComponenet { }