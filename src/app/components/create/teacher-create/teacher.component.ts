import { Component } from '@angular/core';
import { ListService } from '../../../providers/list.service';

@Component({
    selector : 'teacher-list',
    templateUrl : 'teacher.component.html',
    providers : [ ListService]
})
export class TeacherCreate{
    
    public pgNo : number = 1;
    constructor( private ls : ListService){
    }
    onSubmit(val : any){

        console.log(val);
        this.ls.postNewTeacher(val.value).subscribe( (res : any) => {
            console.log(res);
        }, (err:any) => {

        })
    }
}