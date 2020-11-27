import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/Dashboard/dashboard.component';
import { SignInComponent } from './pages/SignIn/signin.component';

import { NavbarComponent } from './components/Navbar/navbar.component';
import { BoardComponent } from './components/Board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    DashboardComponent,
    NavbarComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
