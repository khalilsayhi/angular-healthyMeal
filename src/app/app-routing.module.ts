import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FooComponent} from './foo/foo.component';
import {HomeComponent} from './home/home.component';
import {DishesComponent} from './dishes/dishes.component';
import {EditFormComponent} from './edit-form/edit-form.component';
import {DishDetailComponent} from './dish-detail/dish-detail.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthGuard} from './guards/auth.guard';


const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Home', component : HomeComponent},
  {path: 'Dishes', component : DishesComponent, canActivate: [AuthGuard]},
  {path: 'edit/:id', component : EditFormComponent},
  {path: 'Dishes/detail/:id', component : DishDetailComponent},
  {path: 'SignIn', component : SignInComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
