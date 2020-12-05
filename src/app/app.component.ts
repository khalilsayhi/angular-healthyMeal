import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'fitbox';

  constructor(private r: Router) { }

  ngOnInit(): void {
    this.r.navigate(['Home']);
  }

  loginStatus(){
    if (localStorage.getItem('loggedIn')){
      return true;
    }
    else { return false; }
  }
}
