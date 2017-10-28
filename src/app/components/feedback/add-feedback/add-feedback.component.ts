import { Component } from '@angular/core';
import { FeedbackService } from '../../../providers/feedback.service';

@Component({
    selector : 'add-feedback',
    templateUrl : 'add-feedback.component.html',
    providers : [ FeedbackService ]
})
export class AddFeedback{
    heading : string;
    message : string;
    constructor( private fs : FeedbackService){

    }

    submit(form:any){
        var obj = {
            heading : this.heading,
            message : this.message,
            id : localStorage.getItem('id'),
            name : localStorage.getItem('name')
        } 
        this.fs.postFeedback(obj).subscribe( (res : any) => {
            console.log(res);
            form.reset();
        }, (err : any) => {

        })
    }
}