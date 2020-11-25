import { Component, OnInit } from '@angular/core';
import {DishesService} from '../services/dishes.service';
import {Dish} from '../model/dish';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  dishList: Dish[];
  // tslint:disable-next-line:variable-name
  constructor(private _dish: DishesService) { }

  ngOnInit(): void {
    this._dish.getDishes().subscribe(data => this.dishList = data);
  }

}
