import { Component } from '@angular/core';
import { FeedbackService } from '../../providers/feedback.service';

@Component({
    selector : 'feedback',
    templateUrl : 'feedback.component.html',
    providers : [FeedbackService]
})
export class FeedbackComponent{
    isMore: boolean;
    pgNo : number = 1;
    feedbacks : any [] = []; 
    constructor( private fs : FeedbackService ){
        this.getFeedback();
    } 

    getFeedback(){
        this.fs.getFeedbacks(this.pgNo).subscribe( (res:any) => {
           console.log(res);
            
            if(this.pgNo == 1){
                this.feedbacks = res;
            }
            else{
                this.feedbacks = this.feedbacks.concat(res);
            }
            if(res.length < 12){
                this.isMore = false;
            }
            else{
                this.isMore = true;
            }
            this.pgNo++;
        }, (err :any) => {

        })
    }
}