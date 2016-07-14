import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {HeaderComponent} from './components/header/index';
import {HomeComponent} from './components/+home/index';
import {EditComponent} from './components/edit/index';
import {TasksService} from './shared/services/src/tasks.service';

@Component({
    selector: 'app',
    moduleId: module.id,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        HeaderComponent        
    ],
    providers: [
        TasksService
    ]
})
@RouteConfig([
    {path: '/', name: 'Home', component: HomeComponent},
    {path: '/edit', name: 'Edit', component: EditComponent}    
])
export class AppComponent {
}