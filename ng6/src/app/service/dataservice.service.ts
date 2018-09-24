import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { text } from '@angular/core/src/render3/instructions';
import { pipe } from '@angular/core/src/render3/pipe';



@Injectable({
  providedIn: 'root'
  
})
export class DataserviceService {
private _contactUrl = 'http://localhost:8080/html/codeigniter/register';
private _contactUrl1='http://localhost:8080/html/codeigniter/login';
// private _contactUrl1='http://localhost:8080/login';
private _contactUrl2='http://localhost:8080/html/codeigniter/forgotpassword';
private _contactUrl3='http://localhost:8080/html/codeigniter/resetpassword';
// private _contactUrl4='http://localhost:8080/html/codeigniter/notes';
// private _contactUrl4='http://localhost:8080/html/notes';
private _contactUrl4='http://localhost:8080/html/codeigniter/notes';
private _contactUrl5='http://localhost:8080/html/codeigniter/getnotes';



  constructor(private http: HttpClient) {

   }
    Register(value: any): Observable<{}>
    {
     // debugger;
      let register = new FormData();
      register.append('username', value.data[0].username);
      register.append('password', value.data[0].password);
      register.append('email', value.data[0].email);
      register.append('phone', value.data[0].phone);
    
      let otheroption: any = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      return this.http.post(this._contactUrl, register, otheroption);
    }


    Login(value: any): Observable<{}>
    {
     //debugger;
      let login = new FormData();
   
      login.append('email',value[0].email);
      login.append('password', value[0].password);
       let otheroption: any = {
         'Content-Type': 'application/x-www-form-urlencoded'
       }

      // return this.http.post(this._contactUrl1, login, otheroption).pipe(
      // map((res: Response) => res)
      // );

      return this.http.post(this._contactUrl1, login, otheroption).pipe(
        map((Response)=>Response)
        );
  

    }


     ForgotPass(value: any): Observable<{}>
    {
      debugger;
      let forgot = new FormData();
      forgot.append('email', value.data[0].email);
      let otheroption: any = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    return this.http.post(this._contactUrl2, forgot, otheroption);
    }

    RessetPass(value: any): Observable<{}> {
       //debugger;
       let reset = new FormData();
       reset.append('email', value.data[0].email);
       reset.append('password', value.data[0].password);

       let otheroption: any = {
         'Content-Type': 'application/x-www-form-urlencoded'
       }
     return this.http.post(this._contactUrl3, reset, otheroption);
     }

    //  Notes(value: any,archive:number,): Observable<{}> {
     Notes(value: any): Observable<{}> {
      //debugger;
       let note = new FormData();
       let email=localStorage.getItem('email');
       note.append('title', value.data[0].title);
       note.append('description', value.data[0].description);
       note.append('email', email);
      //   note.append('reminder',null);
      //   note.append('pin', null);
      //  // note.append('archive', archive);
      //  note.append('trash',null);
      //  note.append('colorcode', null);
      //   note.append('image', null);
      
       let otheroption: any = {
         'Content-Type': 'application/x-www-form-urlencoded'
       }
      
       return this.http.post(this._contactUrl4, note, otheroption);//.subscribe(data => {
       //alert(data);
       //});
     }
     getnotes() {
      // let getnote = new FormData();

      //  let email=localStorage.getItem('email');
       let email = localStorage.getItem('email')
      //  getnote.append('email', email);
       let otheroption: any = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      // return this.http.get(this._contactUrl5+"/"+email,otheroption).pipe(
      //   map((res: Response) => res)
      //   );
      
    }

   }
  

