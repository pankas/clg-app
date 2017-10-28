import { Component } from '@angular/core';
import { ListService } from '../../../providers/list.service';
declare let $ : any;
@Component({
    selector : 'student-list',
    templateUrl : 'student.component.html',
    providers : [ ListService ]
})
export class StudentList{
    public pgNo : number = 1;
    public sem : number = 5;
    public students :any [] = [];
    public semesters : any [] = [1,2,3,4,5,6,7,8];
    public isMore : boolean = false; 
    public selectedStudent : any = {};
    public toDelete : any = 0 ;
    public isAdmin :boolean = false;
    constructor( private ls : ListService){
        if(localStorage.getItem('id') == 'admin'){
            this.isAdmin = true;
        }
        if(this.isAdmin == false){
            this.getSemList();
        }
        this.getStudentList();

    }   
    
    getSemList(){
        this.ls.getStudentListById(localStorage.getItem('id')).subscribe( (res:any) => {
            console.log(res);
        }, (err :any) => {

        })
    }

    getStudentList (){
        this.ls.getStudentList(this.sem, this.pgNo).subscribe( (res :any) => {
            console.log(res);
            if(res.length < 12){
                this.isMore = false;
            }
            else{
                this.isMore = true;
            }
            this.students = res;
        }, (err :any) => {

        })
    }

    more(){
        this.pgNo++;
        this.getStudentList();
    }

    openStudent(student : any){
        this.selectedStudent = student;
        $('#studentDetail').modal('show');
        
    }

    deleteStu(roll:any){
        this.toDelete = roll;
        $('#delete').modal('show');
    }

    removeUnderScore(label : any){
        return label.split('_').join(" ");
    }

    sure(){
        this.ls.deleteStudent(this.toDelete).subscribe( (res : any) => {
            console.log(res);
            
        }, (err : any) => {

        })
    }
}