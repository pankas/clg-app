import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './authgaurd';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path : '',
        redirectTo : 'main',
        pathMatch : 'full'
      },
      {
        path : 'login',
        loadChildren : 'app/components/login/login.module#LoginModule',
      },
      {
        path : 'main',
        loadChildren : 'app/components/main/main.module#MainModule',
        // canLoad : [AuthGuard]    
      }
    ])
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
