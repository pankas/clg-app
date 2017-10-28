import { NgModule } from '@angular/core';
import { MainComponent } from './main.component'; 
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {  Urls } from "../../providers/urls";
import { CustomHttpService } from "../../providers/customHttp.service";
import { HttpModule } from '@angular/http';
@NgModule({
    imports : [ HttpModule, CommonModule,RouterModule.forChild([
        {
            path : '',
            component : MainComponent,
            children : [
                {
                    path : 'student-form',
                    loadChildren : "app/components/student-form/studentForm.module#StudentFormModule"
                },
                {
                    path : 'assignment',
                    loadChildren : 'app/components/assignment/assignment.module#AssignmentModule'
                },
                {
                    path : 'list',
                    loadChildren : 'app/components/list/list.module#ListModule',                
                },
                {
                    path : 'create',
                    loadChildren : 'app/components/create/create.module#CreateModule'
                },
                {
                    path : 'feedback',
                    loadChildren : 'app/components/feedback/feedback.module#FeedbackModule'
                }
            ]
        }
    ]) ],
    declarations : [ MainComponent ],
    providers : [ Urls,CustomHttpService]
})
export class MainModule{
    constructor(){
        console.log("check");
    }
} 