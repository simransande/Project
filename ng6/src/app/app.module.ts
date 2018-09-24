import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
//import {FormsModule} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DataserviceService } from './service/dataservice.service';
import { FundooNotesComponent } from './FundooNotes/FundooNotes.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ForgotPasswordComponent } from './ForgotPassword/ForgotPassword.component';
import { NotesComponent } from './notes/notes.component';
// import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';






//import { ConstantsComponent } from './constants/constants.component';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    RegistrationComponent,
    FundooNotesComponent,
    ForgotPasswordComponent,
    NotesComponent,
    ResetpasswordComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatButtonModule,
    MatDividerModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule,
    MatMenuModule,
    MatDatepickerModule
  
  ],
  providers: [DataserviceService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
