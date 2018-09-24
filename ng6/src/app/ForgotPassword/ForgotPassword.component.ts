import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataserviceService } from '../service/dataservice.service';


@Component({
  selector: 'app-ForgotPassword',
  templateUrl: './ForgotPassword.component.html',
  styleUrls: ['./ForgotPassword.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  model:any={}
  constructor(private service:DataserviceService) { }

  ngOnInit() {
  }
  emailFormControl=new FormControl('',[
    Validators.required
  ]);
  s_forgotpass() {
    //debugger;
    this.model;
    let data = [
      {'email': this.model.email}
    ];
    this.service.ForgotPass({ data })
      .subscribe(
        response => this.handleResponse(response)
      );
  }

  handleResponse(response) {
     if (response.success) {
    //  // console.log("success");
     } else if (response.error) {
    //   //console.log("errror");
     } 

  }

}
