import { Injectable } from '@angular/core';
import { Urls } from '../providers/urls';
import { CustomHttpService } from '../providers/customHttp.service';

@Injectable()
export class ListService{
    constructor( private urls : Urls, private http :CustomHttpService){

    }

    getStudentList(sem,pgNo){
        return this.http.get( this.urls.url + `/details/student/semester/${sem}/page/${pgNo}` );
    }

    getTeacherList(pgNo){
        return this.http.get( this.urls.url + `/details/teacher/page/${pgNo}`) 
    }

    postNewStudent(obj){
        console.log(obj);
        return this.http.post( this.urls.url + `/form/insert/student`, obj);
    }

    postNewTeacher(obj){
        console.log(obj);
        return this.http.post( this.urls.url + `/form/insert/teacher`, obj);
    }

    deleteStudent(stId){
        return this.http.delete( this.urls.url + `/form/delete/student/${stId}`);
    }

    deleteTeacher(tId){
        return this.http.delete( this.urls.url + `/form/delete/teacher/${tId}`)
    }

    getStudentListById(id){
        return this.http.get( this.urls.url + `/details/teacher/sem/subject/${id}`)
    }
}
