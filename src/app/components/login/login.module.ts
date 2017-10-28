import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Urls } from '../../providers/urls';
import { CustomHttpService } from '../../providers/customHttp.service';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations : [LoginComponent],
    imports : [ HttpModule,FormsModule, CommonModule,RouterModule.forChild([
        {
            path : '',
            component : LoginComponent
        }
    ]) 
],
providers : [Urls, CustomHttpService]
})
export class LoginModule{ }