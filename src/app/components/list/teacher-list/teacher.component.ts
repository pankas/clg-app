import { Component } from '@angular/core';
import { ListService } from '../../../providers/list.service';

declare let $ :any;
@Component({
    selector : 'teacher-list',
    templateUrl : 'teacher.component.html',
    styleUrls : ['teacher.component.css'],
    providers : [ ListService]
})
export class TeacherList{
    selectedTeacher: any = {};
    
    public isAdmin : boolean = false;
    public pgNo : number = 1;
    public teachers : any[] = [];
    public isMore : boolean = false;
    public toDelete : any ;
    constructor( private ls : ListService){
        this.getTeacherList ();
        if(localStorage.getItem('id') == 'admin'){
            this.isAdmin = true;
        }
    }
    getTeacherList (){
        this.ls.getTeacherList(this.pgNo).subscribe( (res :any) => {
            console.log(res);
            this.teachers = res;
            if(res.length < 12){
                this.isMore = false;
            }
            else{
                this.isMore = true;
            }
        }, (err :any) => {

        })
    }

    openStudent(teacher:any){
        this.selectedTeacher = teacher;
        $('#teacherDetail').modal('show');
    }

    deleteTea(id :any){
        this.ls.deleteTeacher(id).subscribe( (res :any) => {
            console.log(res);
        }, (err : any) => {

        })
    }
}