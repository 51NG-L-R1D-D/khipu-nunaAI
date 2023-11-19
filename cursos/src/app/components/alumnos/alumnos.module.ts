import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import  {HttpClientModule} from '@angular/common/http';

import {AlumnosComponent} from './alumnos.component';


@NgModule({

declarations: [
  AlumnosComponent
],
imports: [
  BrowserModule,
  HttpClientModule
],
providers: [

],
bootstrap: [
  AlumnosComponent]


})

export class AlumnosModule {

}
