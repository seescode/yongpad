import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {TasksService} from '../../shared/services/src/tasks.service'

@Component({
  selector: 'home',
  moduleId: module.id,
  directives: [ROUTER_DIRECTIVES],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  notes: string[]

  constructor(tasksSvc: TasksService) {
    this.notes = tasksSvc.get();
  }

  delete(index: number) {
    this.notes.splice(index, 1);
  }
}
