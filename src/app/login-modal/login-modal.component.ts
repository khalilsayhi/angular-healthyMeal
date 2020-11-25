import {Component, destroyPlatform, OnInit} from '@angular/core';
import {Router} from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})


export class LoginModalComponent implements OnInit {

  constructor(private _ROUTER: Router) { }

  ngOnInit(): void {
  }
  goTo(){
    this._ROUTER.navigate(['/foo']);
    $('#exampleModal').modal('hide');
  }

}
