import { Injectable } from '@angular/core';
import { CustomHttpService } from './customHttp.service';
import { Urls } from './urls';

@Injectable()
export class LoginService{
    constructor( private urls : Urls, private http : CustomHttpService){
    }  

    userLogin(username : any, password : any){

        return this.http.post( this.urls.url + `/login?id=${username}&pass=${password}`,{});
    }
}