import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { EmplistComponent, DialogOverviewExampleDialog } from './component/emplist/emplist.component';

import { CreateempComponent } from './component/createemp/createemp.component';
import { EmployeeService } from './share/emp.ser';
import { DisplayEmpComponent } from './component/display-emp/display-emp.component'
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
const appRoutes: Routes = [
  { path: 'list', component: EmplistComponent },
  { path: '', redirectTo: '/list', pathMatch: "full" },
  {path: 'edit/:id', component: CreateempComponent},
  {path: '**', component: PageNotFoundComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent,
    CreateempComponent,
    DisplayEmpComponent,
    PageNotFoundComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule,
    FormsModule,
    MatDialogModule,

    RouterModule.forRoot(
      appRoutes
    )

  ],
    entryComponents: [ DialogOverviewExampleDialog],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
