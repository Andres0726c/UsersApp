import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  username!: string;
  password!: string;

  ngOnInit(): void {
  }

  login() {
    if(this.username === 'admin' && this.password === 'admin'){
      this.router.navigate(["usuarios"]);
    }else {
      alert("Credenciales Inválidas");
    }
  }

}
