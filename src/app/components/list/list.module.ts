import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list.component';
import { StudentList } from './student-list/student.component';
import { TeacherList } from './teacher-list/teacher.component';
import { CustomHttpService } from '../../providers/customHttp.service';
import { Urls } from '../../providers/urls';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Shared } from '../../shared.module';


@NgModule({
    imports : [ FormsModule ,HttpModule,Shared, CommonModule, RouterModule.forChild([
        {
            path : '',
            redirectTo : 'student-list',
            pathMatch : 'full'
        },
        {
            path : '',
            component : ListComponent,
            children : [
                {
                    path : 'student-list',
                    component : StudentList 
                },
                {
                    path: 'teacher-list',
                    component : TeacherList
                }
            ]
        }
    ])],
    declarations : [ ListComponent, StudentList, TeacherList ],
    providers : [ CustomHttpService,Urls]
})
export class ListModule{

}