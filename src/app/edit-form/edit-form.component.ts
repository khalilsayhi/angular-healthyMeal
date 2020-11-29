import {Component, OnInit} from '@angular/core';
import {Dish} from '../model/dish';
import {ActivatedRoute, Router} from '@angular/router';
import {DishesService} from '../services/dishes.service';
import {Observable, Subscriber} from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  dish = new Dish();

  // tslint:disable-next-line:variable-name
  constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _dishService: DishesService) {
  }

  ngOnInit(): void {
    const dishId = this._activatedRoute.snapshot.params.id;
    this._dishService.getDishById(dishId).subscribe(data => this.dish = data);
  }

  commitEdit() {
    this._dishService.modifyDish(this.dish).subscribe(() => this._router.navigate(['/Dishes']) );
  }

  onChange($event: Event) {
    const file = ($event.target as HTMLInputElement).files[0];
    this.convertToBase64(file);
  }

  convertToBase64(file: File) {
    const observavle = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observavle.subscribe((data) => this.dish.image = data);
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }
}
