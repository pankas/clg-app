import { Injectable } from '@angular/core';
import { CustomHttpService } from './customHttp.service';
import { Urls } from './urls';

@Injectable()
export class AssignmentService {
    constructor( private urls : Urls, private http : CustomHttpService){

    }

    getAccountType(){
        if(localStorage.getItem('semester') == '0'){
            return 'teacher';
        }
        else return 'student';
    }

    getSemester(){
        return localStorage.getItem('semester');
    }

    getId(){
        return localStorage.getItem('id');
    }
    
    getAssignments(){
        return this.http.get( this.urls.url + `/assignment/semester/${this.getSemester()}/${this.getAccountType()}/${this.getId()}`);
    }

    getTeacherDetails(pgNo){
        return this.http.get( this.urls.url + `/details/teacher/page/${pgNo}`);
    }
}
