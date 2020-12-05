import { Component, OnInit } from '@angular/core';
import {Dish} from '../model/dish';
import {DishesService} from '../services/dishes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {

  dish = new Dish();
  // tslint:disable-next-line:variable-name
  constructor(private _dishService: DishesService, private _serviceRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._dishService.getDishById(this._serviceRoute.snapshot.params.id).subscribe(data => this.dish = data);
  }

}
