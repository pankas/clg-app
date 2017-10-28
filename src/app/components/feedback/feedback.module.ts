import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeedbackComponent } from './feedback.component';
import { AddFeedback } from './add-feedback/add-feedback.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports : [ CommonModule ,FormsModule, RouterModule.forChild([
        {
            path : '',
            component : FeedbackComponent
        },
        {
            path : 'add-feedback',
            component : AddFeedback
        }
    ]) ],
    declarations : [ FeedbackComponent, AddFeedback]
})
export class FeedbackModule{}
