import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import{RegistrationComponent} from './registration/registration.component';
import { LoginComponent} from './login/login.component';
import { FundooNotesComponent } from './FundooNotes/FundooNotes.component';
import { ForgotPasswordComponent } from './ForgotPassword/ForgotPassword.component';
import { NotesComponent } from './notes/notes.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';





@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent },
      { path: 'ForgotPassword', component: ForgotPasswordComponent },
      { path: 'resetpassword', component: ResetpasswordComponent },
      { path: 'FundooNotes', component: FundooNotesComponent,children:[{
        path:'',component: NotesComponent}] }
    
    ])
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
