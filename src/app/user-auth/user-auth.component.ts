import { Component, OnInit } from '@angular/core';
import { warn } from 'console';
import { signUp } from '../data-type';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-auth',
  standalone: false,
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css',
})
export class UserAuthComponent implements OnInit {
  constructor(private user: UsersService) {}

  ngOnInit(): void {
    this.user.userAuthReload();
  }

  signUp(data: signUp) {
    this.user.userSignUp(data);
  }
}
