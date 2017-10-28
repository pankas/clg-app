import { Component } from '@angular/core';
import { FormService } from '../../providers/student-form.service';

@Component({
    selector : 'student-form',
    templateUrl : 'studentForm.component.html',
    styleUrls : ['studentForm.component.css'],
    providers : [ FormService ] 
})
export class StudentFormComponent{
    public enrNo : any;
    public studentDetails : any = {};
    public editMode : boolean = false;
    constructor( private fs : FormService ){
        this.enrNo = localStorage.getItem('id');
        this.getStudentById();
    }

    getStudentById(){
        this.fs.getStudentById(this.enrNo).subscribe( (res:any) => {
            console.log(res);
            this.studentDetails = res;
        }, (err :any) => {

        })
    }

    onChange( property : any, val :any ){
        this.studentDetails[property] = val.value;
    }

    saveChanges(){
        console.log(this.studentDetails);
        this.editMode = false;
        this.fs.updateStudent( this.studentDetails.Enrollment_No,this.studentDetails).subscribe( (res:any) => {
            console.log(res);
        }, (err : any) => {

        })
    }

    removeUnderScore(label : any){
        return label.split('_').join(" ");
    }

    print(): void {
        let printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write(`
          <html>
            <head>
              <title>Print tab</title>
              <style>
              //........Customized style.......
              </style>
            </head>
        <body onload="window.print();window.close()">${printContents}</body>
          </html>`
        );
        popupWin.document.close();
    }
}