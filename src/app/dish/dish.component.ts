import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Dish} from '../model/dish';
import {DishesService} from '../services/dishes.service';
declare var $: any;
@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {
  @Input() dish: Dish;
  @Output() delete = new EventEmitter<number>();
  // tslint:disable-next-line:variable-name
  constructor(private _dish: DishesService) { }

  ngOnInit(): void {
  }

  showEditModal(){

  }
  commitChanges(){
    $('#exampleModal').modal('hide');
  }
  deleteDish(id){
    this.delete.emit(id);
  }
}
