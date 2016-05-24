// import {Presentation} from '../../fake_data/presentation';
import {PRESENTATIONS} from '../../fake_data/mock_presentation';
import {Injectable} from 'angular2/core';

@Injectable()
export class GondolaArchiveService {
    getPresentations(){
        return new Promise<Presentation[]>(resolve =>
            setTimeout(()=>resolve(PRESENTATIONS), 1000)
        );
    }
};