import { Injectable } from '@angular/core';
import { Urls } from './urls';
import { CustomHttpService } from './customHttp.service';

@Injectable()
export class FeedbackService{
    constructor( private urls : Urls, private http : CustomHttpService ){

    }

    postFeedback(data){
        return this.http.post(this.urls.url + '/feedback/submit' ,data)
    }

    getFeedbacks(pgNo){
        return this.http.get( this.urls.url + `/feedback/detail/page/${pgNo}`);
    }
}