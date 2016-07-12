import { Injectable } from '@angular/core';

@Injectable()
export class CharacterCheckService {
     
    constructor() { 
    }

    check(str : string) { 
        return str.replace(/-/g, " ");
    }

}