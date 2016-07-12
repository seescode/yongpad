import {Component} from "@angular/core";
import {CharacterCheckService} from "../../shared/services/src/character-check.service";
import {TasksService} from '../../shared/services/src/tasks.service';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';


@Component({
    selector: 'edit',
    moduleId: module.id,
    directives: [ROUTER_DIRECTIVES],    
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css'],
    providers: [
        CharacterCheckService,
        TasksService
    ]
})
export class EditComponent {
    title: string;

    constructor(private svc: CharacterCheckService, private tasksSvc: TasksService) {
    }

    save() {
        this.title = this.svc.check(this.title);
        this.tasksSvc.add(this.title);
    }


}