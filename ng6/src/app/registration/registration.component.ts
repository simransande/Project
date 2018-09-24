import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataserviceService } from '../service/dataservice.service';
 
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [DataserviceService]  
})
export class RegistrationComponent implements OnInit {
 model:any={}
 
  constructor(private service:DataserviceService){//private service:DataserviceService) { 

 }

  ngOnInit() {
  }
 

  UsernameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(128)
  ]);
  emailFormControl=new FormControl('',[
    Validators.required
  ]);
  PasswordFormControl=new FormControl('',[
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(8)
  ]);
  PhoneFormControl=new FormControl('',[
    Validators.required,
    Validators.pattern("[0-9]{10}")
  ]);

  s_register() {
   //debugger;
    this.model;

    let data = [
      { 'username': this.model.uname, 'password': this.model.pass, 'email': this.model.email, 'phone': this.model.phone }
    ];
    this.service.Register({data})
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleResponse(error)
      );
  }
 
   handleResponse(response) {
  //   // debugger;
      if (response.success) {
      // console.log("success");
      } else if (response.error) {
     //   console.log("errror");
     } 

    }


}
