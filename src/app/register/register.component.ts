import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  constructor(private accountService:AccountService) {}

@Output() cancelRegister = new EventEmitter();

  ngOnInit(): void {
  }

  model:any ={}

  register(){
    this.accountService.register(this.model).subscribe({
      next: Response=>{
        console.log(Response);
        this.logout();
      },
      error: error=> console.log(error)  
    })
  }

  logout(){
    this.cancelRegister.emit(false);
  }
}
