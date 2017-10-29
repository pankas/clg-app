import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentFormComponent } from './studentForm.component';
import { CommonModule } from '@angular/common';
import { CustomHttpService } from '../../providers/customHttp.service';
import { Urls } from '../../providers/urls';
import { HttpModule } from '@angular/http';
import { Shared } from '../../shared.module'
import { FormsModule } from '@angular/forms';

@NgModule({
    imports : [Shared, FormsModule,  HttpModule,CommonModule,RouterModule.forChild([
        {
            path : '',
            component : StudentFormComponent
        }
    ])],
    declarations : [ StudentFormComponent ],
    providers : [ Urls, CustomHttpService]

})
export class StudentFormModule{
    constructor(){

    }
}