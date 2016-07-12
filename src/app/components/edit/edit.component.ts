import {Component} from "@angular/core";
import {CharacterCheckService} from "../../shared/services/src/character-check.service";

@Component({
    selector: 'edit',
    moduleId: module.id,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css'],
    providers: [
        CharacterCheckService
    ]
})
export class EditComponent {
    title: string;

    constructor(private svc: CharacterCheckService) {
    }

    save() {
        this.title = this.svc.check(this.title);
    }


}