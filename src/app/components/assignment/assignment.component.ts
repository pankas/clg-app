import { Component } from '@angular/core';
import { AssignmentService } from '../../providers/assignment.service';
import {Observable} from 'rxjs/Rx';
declare let $: any;
@Component({
    selector: 'assignment',
    templateUrl: 'assignment.component.html',
    styleUrls: ['assignment.component.css'],
    providers: [AssignmentService]
})

export class AssignmentComponent {
    questions: any[]=[];
    index : number;
    public assignments: any[] = [];
    public teachers: any[] = [];
    public isTeacher: boolean = false;
    public selectedAssignment: any = {};
    public selectedAssignmentCopy: any = {};
    public questionData: any[] = [];
    public editMode: boolean = false;
    pgNo: number = 1;
    editDet: boolean = false;
    isStart: boolean = false;
    isStarted : boolean = false;
    isRunning : boolean = false;
    answers : any = {};

    constructor(private as: AssignmentService) {
        if (localStorage.getItem('semester') == '0') {
            this.isTeacher = true;
        }
        this.getAssignments();
        this.getTeacherDetail(1);
    }

    getAssignments() {
        this.as.getAssignments(5, this.pgNo).subscribe((res: any) => {
            console.log(res);
            this.assignments = res;
        }, (err: any) => {

        })
    }

    getTeacherDetail(pgNo) {
        this.as.getTeacherDetails(pgNo).subscribe((res: any) => {
            console.log(res);
            this.teachers = res;
        }, (err: any) => {

        })
    }

    getAssignmentData(assId) {
        this.as.getAssignmentData(assId).subscribe((res: any) => {
            this.questionData = res;
        }, (err: any) => {

        })
    }

    getTeacherName(teacherId) {
        for (let teacher of this.teachers) {
            if (teacher.teacherId == teacherId) {
                return teacher.teacherName;
            }
        }
    }

    openAssignment(assignment,i) {
        this.index = i;
        this.isStart = false;
        this.answers = {};
        this.questions = [];
        this.questionData = [];
        this.editMode = false;
        if(this.isTeacher){
            this.getAssignmentData(assignment.assid);
        }
        this.selectedAssignment = assignment;
        this.selectedAssignmentCopy = JSON.parse(JSON.stringify(assignment));
        $('#openAssignment').modal('show');
        var date = new Date();
        var yy = date.getFullYear();
        var mm = date.getMonth();
        var dd = date.getDate();
        var now = `${yy}-${mm + 1}-0${dd}`;
        var dOT = this.selectedAssignment.dateOfTest.substring(0, this.selectedAssignment.dateOfTest.indexOf('T'));
        console.log(dOT);

        console.log(now);

        console.log(date);
        console.log(this.selectedAssignment.dateOfTest);
        if (!this.isTeacher && dOT == now) {
            this.start();
        }
    }

    save() {
        console.log(this.questionData);
    }
    trackByFn(index, item) {
        return index; // or item.id
    }

    start() {
        var date = new Date();
        var hh = (date.getHours() < 10 ? '0' : '') + date.getHours();
        var mm = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
        var ss = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
        var time = `${hh}:${mm}:${ss}`;
        if (this.selectedAssignment.startTime == time || (this.selectedAssignment.startTime < time && this.selectedAssignment.endTime > time)) {
            this.isStart = true;
        }
    }

    getQuestions(id) {
        this.isStarted = true;
        this.as.getQuestions(id).subscribe((res: any) => {
            console.log(res);
            this.isRunning = true;
            this.questions = res;
            
            this.answers['studentId']=localStorage.getItem('id');
            for(let i=1;i<=res.length;i++){
                this.answers[`ques${i}`]=null;
            }
            console.log(this.answers);
            this.startTimer();
        }, (err: any) => {

        })
    }

    startTimer(){
        var date = new Date("01:00:00");
        console.log(date);
    }

    answered(answer:any,index:any){
        this.answers[`ques${index}`] = answer;
        console.log(this.answers);
    }

    submitAnswers(id){
        this.as.submitAnswers(id,this.answers).subscribe((res:any) => {
            console.log(res);
        }, (err:any) => {

        })
    }

    updateAssignment(){
        console.log("csd");
        console.log(this.selectedAssignment);
        this.as.updateAssignment(this.selectedAssignment.assid,this.selectedAssignment).subscribe((res:any)=>{
            console.log(res);
            this.assignments.splice(this.index,1,this.selectedAssignment);
        },(err:any)=>{

        })
    }



}
