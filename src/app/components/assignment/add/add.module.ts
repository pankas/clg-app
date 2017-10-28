import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddAssignmentComponent } from './add.component';

@NgModule({
    imports : [ RouterModule.forChild([
        {
            path : 'add-assignment',
            component : AddAssignmentComponent
        }
    ])],
    declarations : [ AddAssignmentComponent ]
})
export class AddAssignment{

}