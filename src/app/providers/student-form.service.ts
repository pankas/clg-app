import { Injectable } from '@angular/core';
import { CustomHttpService } from './customHttp.service';
import { Urls } from './urls';

@Injectable()
export class FormService{
    constructor( private http : CustomHttpService, private urls : Urls){

    }

    getStudentById(id :any){
        return this.http.get( this.urls.url + `/form/fetch/student/${id}`);
    }

    updateStudent(id:any, obj:any){
        return this.http.post( this.urls.url + `/form/update/student/${id}`,obj);
    }
}