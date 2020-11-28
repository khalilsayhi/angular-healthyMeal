import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FooComponent} from './foo/foo.component';
import {HomeComponent} from './home/home.component';
import {DishesComponent} from './dishes/dishes.component';
import {EditFormComponent} from './edit-form/edit-form.component';


const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Home', component : HomeComponent},
  {path: 'Dishes', component : DishesComponent},
  {path: 'edit/:id', component : EditFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
