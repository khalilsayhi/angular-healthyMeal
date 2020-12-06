import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  error = false;
  user: User;
  userList: User[];
  constructor(private _ROUTE: Router, private _USER: UserService) {
    this.user = new User();
  }

  ngOnInit(): void {
    this._USER.getUsers().subscribe(data => this.userList = data);
  }
  close(){
    this._ROUTE.navigate(['/Home']);
  }
  signIn(){
    if (this.authenticate(this.user)){
      localStorage.setItem('loggedIn', 'true');
      this._ROUTE.navigate(['/Home']);
    }
    else {
      this.error = true;
    }
  }

  authenticate(u: User){
    for (const item of this.userList){
      if ((item.email === u.email) && (item.password === u.password)){
        return true;
      }
    }
    return false;
  }

}
