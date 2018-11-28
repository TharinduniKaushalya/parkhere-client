import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { FileSelectDirective } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';


import {ValidateService} from './services/validate.service';
import { FlashMessagesService, FlashMessagesModule } from 'angular2-flash-messages';
import {AuthService} from './services/auth.service';
//import { DetailsComponent } from './details/details.component';
import { DetailsComponent } from './components/details/details.component';


//import {AuthGuard} from './guards/auth.guards';



const appRoutes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'details', component: DetailsComponent},
  //{path: 'profile', component: ProfileComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    DetailsComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    // FlashMessagesService,
    FlashMessagesModule
  ],
  providers: [ValidateService,FlashMessagesService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
