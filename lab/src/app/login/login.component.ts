import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  uname: string
  pwd: string
  error: string
  test = [{username: 'Saad', Password: '123'}, { username: 'John', Password: '123'} , {username: 'Smith', Password: '123'}];
  validuser = 'false';
  errors = false;
  onSubmit() {
    for (let value of this.test) {
      if(this.uname == value.username && this.pwd == value.Password) {
        this.validuser = 'true';
        this.errors = false;
        this.router.navigateByUrl('/account');
      }

    }
    if(this.validuser == 'false') {
      this.error= 'User is not valid';
      this.errors = true;
    }
  }
  ngOnInit() {
  }

}
