import { Component } from '@angular/core';
import { FormService } from '../../providers/student-form.service';

declare let $: any;
@Component({
    selector: 'student-form',
    templateUrl: 'studentForm.component.html',
    styleUrls: ['studentForm.component.css'],
    providers: [FormService]
})
export class StudentFormComponent {
    colName: any = '';
    message: any;
    col: any;
    public enrNo: any;
    public studentDetails: any = {};
    public editMode: boolean = false;
    isStudent: boolean;
    columnList: any[] = [];
    delete: boolean = false;
    constructor(private fs: FormService) {
        this.enrNo = localStorage.getItem('id');
        if (localStorage.getItem('id') == 'admin') {
            this.isStudent = false;
            this.getCol();
        }
        else {
            this.isStudent = true;
            this.getStudentById();
        }

    }

    getCol() {
        this.fs.columnList().subscribe((res: any) => {
            console.log(res);
            this.columnList = res;
        }, (err: any) => {

        })
    }

    getStudentById() {
        this.fs.getStudentById(this.enrNo).subscribe((res: any) => {
            console.log(res);
            this.studentDetails = res;
        }, (err: any) => {

        })
    }

    onChange(property: any, val: any) {
        this.studentDetails[property] = val.value;
    }

    saveChanges() {
        console.log(this.studentDetails);
        this.editMode = false;
        this.fs.updateStudent(this.studentDetails.Enrollment_No, this.studentDetails).subscribe((res: any) => {
            console.log(res);
        }, (err: any) => {

        })
    }

    removeUnderScore(label: any) {
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

    nameChange(col: any) {
        return col.split('_').join(' ');
    }
    deleteItem(col?: any) {

        console.log(col);
        console.log('working');
        if (this.delete == true) {
            console.log(this.columnList.indexOf(this.col));
            console.log(this.col);
            this.columnList.splice(this.columnList.indexOf(this.col), 1);
            this.fs.deleteCol(this.col).subscribe((res: any) => {
                this.message = "Deletion Succesful";
                $('#message').modal('show');
            }, (err: any) => {

            })
        }
        else {
            this.col = col;
            $('#delete').modal('show');
        }
    }

    addCol() {
        console.log("vduuhf");
        if (this.colName != '') {
            var obj = {
                column: this.colName.split(' ').join('_')
            }
            this.fs.addCol(obj).subscribe((res:any)=>{
                this.message = 'Column Added Successfully';
                this.columnList.push(this.colName);
                $('#message').modal('show');    
            },(err:any)=>{

            })
            console.log(obj);
        }else{
            this.message = 'Field Name Cannot be empty';
            $('#message').modal('show');
        }
    }
}