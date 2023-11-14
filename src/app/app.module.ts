import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SampleCheckPipe } from './sample1/sample-check.pipe';
import { Sample1Component } from './sample1/sample1.component';
import { Sample2Component } from './sample2/sample2.component';
import { EmployeeAdd } from './sample2/EmployeeAdd/employee-add.component';
import { EmployeeList } from './sample2/EmployeeList/employee-list.component';
import { Sample3Component } from './sample3/sample3.component';
import { Sample4Component } from './sample4/sample4.component';
import { Sample5Component } from './sample5/sample5.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleCheckPipe,
    Sample1Component,
    Sample2Component,
    EmployeeAdd,
    EmployeeList,
    Sample3Component,
    Sample4Component,
    Sample5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
