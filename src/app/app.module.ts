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

@NgModule({
  declarations: [
    AppComponent,
    MyFirstCompComponent,
    CourseComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DBservices,
    ItshareApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
