import {Component} from 'angular2/core';
import gondola from './gondola.html';

@Component({
    selector: 'my-gondola',
    template: gondola
})

export class Gondola { 
    public title = 'Tour of Heroes';
    public hero = 'Windstorm';
}