import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../model/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
declare var $: any;
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})


export class LoginModalComponent implements OnInit {
  error: string;
  user: User;
  signupForm: FormGroup;
  userList: User[];
  constructor(private _ROUTER: Router, private _USERS: UserService) { }

  ngOnInit(): void {
    this.user = new User();
    this._USERS.getUsers().subscribe(data => this.userList = data);
    this.signupForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  /*goTo(){
    this._ROUTER.navigate(['/foo']);
    $('#exampleModal').modal('hide');
  }*/
  get email(){return this.signupForm.get('email'); }
  get password(){return this.signupForm.get('password'); }

  close(){
    this.signupForm.reset();
  }
  signup(){
    this.user.email = this.email.value;
    this.user.password = this.password.value;
    if (this.verifyUserExistance(this.user)){
      this.error = 'User already exists';
    }
    else {
      this._USERS.addUser(this.user).subscribe(() =>
      {
      $('#exampleModal').modal('hide'); this.signupForm.reset(); this.user = new User();
      });
    }
  }
  verifyUserExistance(user: User){
    console.log(this.userList);
    for (const item of this.userList){
      if (item.email === user.email){
        return true;
      }
    }
    return false;
  }
}
