import {Component} from "@angular/core";
import {CardComponent} from "../core/card/card.component";

@Component({
    selector: 'edit',
    moduleId: module.id,
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css'],
    directives: [CardComponent]
})
export class EditComponent {
}