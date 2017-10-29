import { Component } from '@angular/core';
import { AssignmentService } from '../../../providers/assignment.service';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

declare let $ :any;
@Component({
    selector : 'add-assignment',
    templateUrl : 'add.component.html',
    providers : [AssignmentService]
})
export class AddAssignmentComponent{
    subjectList : any [];
    assignment : FormGroup;
    
    question : any[] = [{}];
    constructor( private as : AssignmentService){
        var date : any = new Date();
        console.log(date);
        this.getTeacherSubject();
        this.assignment = this.getForm();
    }
    
    getForm(){
        return new FormGroup({
            date : new FormControl('',[]),
            dateOfTest : new FormControl('',[]),
            stTime : new FormControl('',[]),
            endTime : new FormControl('',[]),
            semester : new FormControl('',[]),
            subject : new FormControl('',[]),
            department : new FormControl('',[]),
            heading : new FormControl('',[]),
            teacherId : new FormControl('',[]),
            teacherName : new FormControl('',[]),
            instructions : new FormControl('',[]),
            ques : new FormArray([
                new FormGroup({
                    qu1 : new FormControl('',[]),
                    op1 : new FormControl('',[]),
                    op2 : new FormControl('',[]),
                    op3 : new FormControl('',[]),
                    op4 : new FormControl('',[]),
                    answer : new FormControl('',[])
                })
            ])  
        })
    }

    get formData(){
        return <FormArray> this.assignment.get('ques')
    }

    getTeacherSubject(){
        this.as.getTeacherSubjects().subscribe((res:any) => {
            console.log(res);
            this.subjectList = res;
        }, (err :any) => {

        })
    }

    submit(){
        var date : any = new Date();
        console.log(date);
        var dd = date.getDate();
        var mm = date.getMonth();
        var yyyy = date.getFullYear();
        date =  yyyy + '-' + mm + '-' + dd;
        this.assignment.get('date').patchValue(date);
        this.assignment.get('teacherId').patchValue(localStorage.getItem('id'));
        this.assignment.get('teacherName').patchValue(localStorage.getItem('name'));
        for(let sub of this.subjectList){
            console.log(this.assignment.get('subject').value);
            if(sub.subName == this.assignment.get('subject').value){
                this.assignment.get('semester').patchValue(sub.semester);
            }
        }
        console.log(this.assignment);
        this.as.postAssignment(this.assignment.value).subscribe((res:any)=>{
            console.log(res);
            $('#message').modal('show');
        },(err:any)=>{

        })
    }

    add(){
        (<FormArray>this.assignment.get('ques')).push( new FormGroup({
            qu1 : new FormControl('',[]),
            op1 : new FormControl('',[]),
            op2 : new FormControl('',[]),
            op3 : new FormControl('',[]),
            op4 : new FormControl('',[]),
            answer : new FormControl('',[])
        }));
        console.log((<FormArray>this.assignment.get('ques')).length);
        console.log(this.assignment.get('ques'));
    }

    remove(index :any){
        (<FormArray>this.assignment.get('ques')).removeAt(index);
    }

}