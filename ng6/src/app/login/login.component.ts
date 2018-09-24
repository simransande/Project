import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataserviceService } from '../service/dataservice.service';
import { Router } from '@angular/router';
import { RouterModule, Routes} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  model:any={}
  Error: boolean = false;
  constructor(private service:DataserviceService,private router:Router) { }

  ngOnInit() {
  }
  flag:any;
  mail:any;

  MailIdFormControl=new FormControl('',[
    Validators.required
  ]);
  PasswordFormControl=new FormControl('',[
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(8)
  ]);

  s_login() {
    
   
   // debugger;
    this.model;
  
    let data = [
      {'email': this.model.email, 'password': this.model.pass  }
    ];

    this.service.Login(data).subscribe((Statusdata: any) => {      
    //debugger;
    console.log(Statusdata);
    this.flag=Statusdata.status;
    this.mail=Statusdata.email;
   

      if (this.flag == 1) 
      {
        localStorage.setItem('email', this.mail);
        this.router.navigate(['/FundooNotes']);
      }
      else
      {
       this.Error = true;
      }
    });

  }
  }





