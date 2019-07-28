import {ItshareApiService} from './services/itshare-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import { DBservices } from './my-first-comp/db.services';
import { CourseComponent } from './course/course.component';
import { from } from 'rxjs';
import { FavoriteComponent } from './favorite/favorite.component';
import { DinaComponent } from './dina/dina.component';
import { SummaryPipe } from './summary.pipe';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CustomFormsModule } from 'ng2-validation'
import {bootstrap}

@NgModule({
  declarations: [
    AppComponent,
    MyFirstCompComponent,
    CourseComponent,
    FavoriteComponent,
    DinaComponent,
    SummaryPipe,
    LoginComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    [BrowserModule,
       FormsModule,
    CustomFormsModule
  ],

  providers: [
    DBservices,
    ItshareApiService
    
  ],

  bootstrap: [AppComponent]
  
})
export class AppModule { }
