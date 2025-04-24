import { Component, OnInit } from '@angular/core';
import { login, signUp } from '../data-type';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-auth',
  standalone: false,
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css',
})
export class UserAuthComponent implements OnInit {
  showLogin: boolean = true;
  constructor(private user: UsersService) {}

  ngOnInit(): void {
    this.user.userAuthReload();
  }

  signUp(data: signUp) {
    this.user.userSignUp(data);
  }

  login(data: login) {
    console.warn(data);
  }

  openSingUp() {
    this.showLogin = false;
  }

  openLogin() {
    this.showLogin = true;
  }
}
