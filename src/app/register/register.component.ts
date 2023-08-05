import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  constructor(private accountService:AccountService,private toastr:ToastrService) {}

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
      error: error=> {
        this.toastr.error(error.error)
        console.error(error)
      }
    })
  }
  logout(){
    this.cancelRegister.emit(false);
  }
}
