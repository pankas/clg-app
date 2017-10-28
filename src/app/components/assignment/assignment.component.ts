import { Component } from '@angular/core';
import { AssignmentService } from '../../providers/assignment.service';
declare let $ : any;
@Component({
    selector : 'assignment',
    templateUrl : 'assignment.component.html',
    styleUrls : ['assignment.component.css'],
    providers : [AssignmentService]
})

export class AssignmentComponent{

    public assignments : any [] = [];
    public teachers : any []=[];
    public isTeacher : boolean = false;
    public selectedAssignment : any = {};
    constructor( private as : AssignmentService){
        if(localStorage.getItem('semester') == '0'){
            this.isTeacher = true;
        }
        this.getAssignments();
        this.getTeacherDetail(1);
    }

    getAssignments(){
        this.as.getAssignments().subscribe( (res :any) => {
            console.log(res);
            this.assignments = res;
        }, (err:any) =>{

        })
    }

    getTeacherDetail(pgNo){
        this.as.getTeacherDetails(pgNo).subscribe( (res:any) => {
            console.log(res);
            this.teachers = res;
        }, (err : any) => {

        })
    }

    getTeacherName(teacherId){
        console.log(teacherId);
        for(let teacher of this.teachers ){
            if(teacher.teacherId == teacherId){
                return teacher.teacherName;
            }
        }
    }

    openAssignment(assignment){
        this.selectedAssignment = assignment;
        $('#openAssignment').modal('show');
    }
}