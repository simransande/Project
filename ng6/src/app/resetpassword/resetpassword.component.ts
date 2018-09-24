import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataserviceService } from '../service/dataservice.service';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  model:any={}
 // Error: boolean = false;

  constructor(private service:DataserviceService) { }

  ngOnInit() {
  }
  emailFormControl=new FormControl('',[
    Validators.required
  ]);
  passwordFormControl=new FormControl('',[
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(8)
  ]);
  s_reset() {
    debugger;
     this.model;
 
     let data = [
       {'password': this.model.pass, 'email': this.model.email}
     ];
     this.service.RessetPass({ data })
       .subscribe( response=>{
         console.log(response);
       }
       );
   }
  
   handleResponse(response) {
    // debugger;
     if (response.success) {
       console.log("success");
     } else if (response.error) {
       console.log("errror");
     } 
 
   }
}
