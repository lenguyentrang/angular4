import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppHomeComponent } from './app-home.component';
import { AppAboutComponent } from './app-about.component';
import { AppContactComponent } from './app-contact.component';

const routes : Routes = [
    { path:'', redirectTo:'/home', pathMatch:'full'},
    { path:'home', component:AppHomeComponent},
    { path:'about/:id', component:AppAboutComponent },
    { path:'contact/:keyword', component:AppContactComponent }
]

@NgModule({
    imports : [ RouterModule.forRoot( routes ) ] ,
    exports : [ RouterModule ]
})

export class AppRouter{ }