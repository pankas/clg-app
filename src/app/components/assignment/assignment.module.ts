import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AssignmentComponent } from './assignment.component';
import { Urls } from '../../providers/urls';
import { CustomHttpService } from '../../providers/customHttp.service';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AddAssignmentComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports : [ ReactiveFormsModule ,HttpModule, CommonModule, RouterModule.forChild([
        {
            path : '',
            component : AssignmentComponent
        },
        {
            path : 'add-assignment',
            component : AddAssignmentComponent
        }
    ]) ],
    declarations : [AssignmentComponent,AddAssignmentComponent],
    providers : [CustomHttpService , Urls]

})
export class AssignmentModule{

}