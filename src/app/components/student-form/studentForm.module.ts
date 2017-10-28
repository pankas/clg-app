import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentFormComponent } from './studentForm.component';
import { CommonModule } from '@angular/common';
import { CustomHttpService } from '../../providers/customHttp.service';
import { Urls } from '../../providers/urls';
import { HttpModule } from '@angular/http';
import { ObjNgFor } from '../../pipe/obj.pipe';

@NgModule({
    imports : [  HttpModule,CommonModule,RouterModule.forChild([
        {
            path : '',
            component : StudentFormComponent
        }
    ])],
    declarations : [ ObjNgFor,StudentFormComponent ],
    providers : [ Urls, CustomHttpService]

})
export class StudentFormModule{
    constructor(){

    }
}