import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Dish} from '../model/dish';
import {DishesService} from '../services/dishes.service';
import {Router} from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {
  @Input() dish: Dish;
  @Output() delete = new EventEmitter<number>();
  @Input() priceInput: number;
  // tslint:disable-next-line:variable-name
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  goToEdit(){
      this._router.navigate([`edit/${this.dish.id}`]);
  }

  deleteDish(id){
    this.delete.emit(id);
  }
}
