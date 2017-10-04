import { NgModule } from '@angular/core';
import { MainComponent } from './main.component'; 
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@NgModule({
    imports : [ CommonModule,RouterModule.forChild([
        {
            path : '',
            component : MainComponent
        }
    ]) ],
    declarations : [ MainComponent ],
    providers : []
})
export class MainModule{
    constructor(){
        console.log("check");
    }
} 