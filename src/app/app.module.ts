import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { FooComponent } from './foo/foo.component';
import { HomeComponent } from './home/home.component';
import { DishesComponent } from './dishes/dishes.component';
import { DishComponent } from './dish/dish.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginModalComponent,
    FooComponent,
    HomeComponent,
    DishesComponent,
    DishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
