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
    
    getAssignments(sem?:any){
        if(this.getAccountType() == 'teacher'){
            return this.http.get( this.urls.url + `/assignment/semester/${sem || 5}/${this.getAccountType()}/${this.getId()}`);
        }
        else{
            return this.http.get( this.urls.url + `/assignment/semester/${localStorage.getItem('semester')}/department/${localStorage.getItem('department') || 'it'}`);
        }
        
    }

    getTeacherDetails(pgNo){
        return this.http.get( this.urls.url + `/details/teacher/page/${pgNo}`);
    }

    getTeacherSubjects(){
        return this.http.get( this.urls.url + `/details/teacher/sem/subject/${localStorage.getItem('id')}`)
    }

    postAssignment(data){
        return this.http.post( this.urls.url + '/assignment',data);
    }
}
