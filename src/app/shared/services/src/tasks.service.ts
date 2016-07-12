import { Injectable } from '@angular/core';

@Injectable()
export class TasksService {

    tasks: string[] = ['abc', 'def'];
     
    constructor() { 

    }

    add(item: string) {
        this.tasks.push(item);
    }

    remove(index: number) {
        this.tasks.splice(index, 1);
    }

    get() {
        return this.tasks;
    }
}

