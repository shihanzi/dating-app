import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private http:HttpClient){}

  ngOnInit(): void {
     this.getCurrentUser();
  }

  registerMode = false;
  users:any;

  registerToggle() {
    this.registerMode = !this.registerMode;
  }
  getCurrentUser(){
    this.http.get('https://localhost:7119/api/user').subscribe({
      next : response =>  this.users = response,
      error : error => console.log(error),
      complete : () => console.log('Request Completed')
    })
  }
  cancelRegisterMode(event :boolean){
    this.registerMode=event;
  }
}
