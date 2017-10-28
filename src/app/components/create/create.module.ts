import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create.component';
import { StudentCreate } from './student-create/student.component';
import { TeacherCreate } from './teacher-create/teacher.component';
import { CustomHttpService } from '../../providers/customHttp.service';
import { Urls } from '../../providers/urls';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports : [ FormsModule, HttpModule, CommonModule, RouterModule.forChild([
        {
            path : '',
            redirectTo : 'student-create',
            pathMatch : 'full'
        },
        {
            path : '',
            component : CreateComponent,
            children : [
                {
                    path : 'student-create',
                    component : StudentCreate 
                },
                {
                    path: 'teacher-create',
                    component : TeacherCreate
                }
            ]
        }
    ])],
    declarations : [ CreateComponent, StudentCreate, TeacherCreate ],
    providers : [ CustomHttpService,Urls]
})
export class CreateModule{

}