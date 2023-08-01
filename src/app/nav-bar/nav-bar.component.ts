import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  model : any={}
  isLogged = false;

constructor(private accountService:AccountService){}

  login(){
    this.accountService.login(this.model).subscribe({
      next: Response => {
        console.log(Response);
        this.isLogged= true;
      },
      error: error => console.log(error)
    })
  }
  getCurrentUser(){
    this.accountService.currentUser$.subscribe({
      next: user => this.isLogged= !!user,
      error: error => console.log(error)
    })
  }
  logout(){
    this.accountService.logout();
    this.isLogged = false;
  }
}
