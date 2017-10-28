import { Component } from '@angular/core';
import { ListService } from '../../../providers/list.service';
declare let $ :any;

@Component({
    selector : 'student-list',
    templateUrl : 'student.component.html',
    providers : [ ListService ]
})
export class StudentCreate{
    public pgNo : number = 1;
    public pgNoT : number = 1;
    public sem : number = 1;
    public message : any = '';
    constructor( private ls : ListService){
    
    }   
    
    onSubmit(value:any){
        console.log(value);
        this.ls.postNewStudent(value.value).subscribe( (res : any) => {
            console.log(res);
            this.message = 'Successfully Created';
            $('#message').modal('show');
        }, (err:any) => {

        })
    }
}