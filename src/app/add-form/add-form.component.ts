import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Dish} from '../model/dish';
import {Observable, Subscriber} from 'rxjs';
import {formatNumber} from '@angular/common';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  registreForm: FormGroup;
  dish: Dish;
  myImage: string;
  @Output() event = new EventEmitter<Dish>();
  constructor() {
  }

  ngOnInit(): void {
    this.dish = new Dish();
    this.registreForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      price: new FormControl('123', [Validators.required, Validators.min(0)])
    });
  }
  get name(){return this.registreForm.get('name'); }
  get description(){return this.registreForm.get('description'); }
  get image(){return this.registreForm.get('image'); }
  get price(){return this.registreForm.get('price'); }

  save(){
    this.dish.nom = this.registreForm.get('name').value;
    this.dish.description = this.registreForm.get('description').value;
    this.dish.image = this.myImage;
    this.dish.price = this.price.value;
    this.event.emit(this.dish);
    this.registreForm.reset();
  }
  cancel(){
    this.event.emit(this.dish);
    this.registreForm.reset();
  }

  onChange($event: Event){
    const file = ($event.target as HTMLInputElement).files[0];
    this.convertToBase64(file);
  }
  convertToBase64(file: File){
    const observavle = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observavle.subscribe((data) => this.myImage = data);
  }
  readFile(file: File, subscriber: Subscriber<any>){
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
