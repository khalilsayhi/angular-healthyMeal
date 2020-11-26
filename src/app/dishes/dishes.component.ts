import { Component, OnInit } from '@angular/core';
import {DishesService} from '../services/dishes.service';
import {Dish} from '../model/dish';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  formState = false;
  dishList: Dish[];
  // tslint:disable-next-line:variable-name
  constructor(private _dish: DishesService) { }

  ngOnInit(): void {
    this._dish.getDishes().subscribe(data => this.dishList = data);
  }

  showForm(){
    this.formState = true;
  }
  AddOrRemoveFormEvent(d: Dish) {
    if (Object.keys(d).length === 0) {
      this.formState = false;
    }
    else {
      const index = this.dishList.length - 1;
      const randomId = this.dishList[index].id + 1;
      d.id = randomId;
      this._dish.addDish(d).subscribe(() => this.dishList.push(d));
      this.formState = false;
    }
  }
  deleteDish(id){
    this._dish.deleteDish(id).subscribe(() => this.dishList = this.dishList.filter((item) => item.id !== id) );
  }

}
