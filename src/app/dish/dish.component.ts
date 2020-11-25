import {Component, Input, OnInit} from '@angular/core';
import {Dish} from '../model/dish';
declare var $: any;
@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {
  @Input() dish: Dish;
  constructor() { }

  ngOnInit(): void {
  }

  showEditModal(){

  }
  commitChanges(){
    $('#exampleModal').modal('hide');
  }
}
