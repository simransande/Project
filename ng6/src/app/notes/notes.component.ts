import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [DataserviceService]  

})
export class NotesComponent implements OnInit {
  model:any={}
  notes:any={}
  Card: boolean = true;
  createCard : boolean = false;

  constructor(private service:DataserviceService) { 
    // this.service.getnotes()
    // .subscribe(notesData => {
    //   this.notes = notesData;
    //   console.log(notesData);
    // });
  }

  ngOnInit() {
  }


select:boolean=true;
  showHideMain() {
    this.Card = false;
    this.createCard = true;
  }
  selectdate(){

  }
  showHideImp() {
   // debugger;

    this.Card = true;
    this.createCard = false;
    this.model;

    let data = [
      {'title': this.model.title, 'description': this.model.description}
    ];
    this.service.Notes({ data})
    

    .subscribe(
      response => this.handleResponse(response),
      error => this.handleResponse(error)
     
    );   
}
handleResponse(response) {
   if (response.success) {
     //console.log("success");
   } else if (response.error) {
    // console.log("errror");
   } 

 }
  }
  

