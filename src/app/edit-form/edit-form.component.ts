import {Component, OnInit} from '@angular/core';
import {Dish} from '../model/dish';
declare var $: any;
@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
