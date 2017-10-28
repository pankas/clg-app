import { Component } from '@angular/core';

@Component({
    selector : 'list',
    templateUrl : 'list.component.html',
    styleUrls : ['list.component.css']
})
export class ListComponent{
    public isAdmin : boolean;
    constructor(){
        if(localStorage.getItem('id') == 'admin'){
            this.isAdmin = true;
        }
    }
}