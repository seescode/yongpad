import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    selector: 'home',
    moduleId: module.id,
    directives: [ROUTER_DIRECTIVES],    
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public pathImage:string;

    constructor(){
        this.pathImage="../../../../assets/home/picture.png";
    }
}