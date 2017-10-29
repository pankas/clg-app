import { Component } from '@angular/core';
import { LoginService } from '../../providers/login.service';
import { Router } from '@angular/router';
@Component({
    selector : 'login',
    templateUrl : 'login.component.html',
    styleUrls : ['login.component.css'],
    providers : [ LoginService ]
})
export class LoginComponent{
    public username : any;
    public password : any;
    public error : boolean = false;
    constructor( private ls : LoginService, private router : Router ){ }
    
    userLogin(){
        this.ls.userLogin( this.username, this.password).subscribe( (res :any) => {
            console.log(res);
            if(res.access_token){
                localStorage.setItem('access_token', res.access_token);
                localStorage.setItem('email', res.email);
                localStorage.setItem('id', res.id);
                localStorage.setItem('semester', res.semester);
                localStorage.setItem('name', res.name);
                if(res.department){
                    localStorage.setItem('department', res.department);
                }
                
                this.getUserInfo();
            }
            else{
                this.error = true;
            }
        }, (err :any) => {

        })
    }

    getUserInfo(){
        this.router.navigate(['/main']);
    }
}