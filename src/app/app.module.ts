import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BackgroundDirective} from "./directives/background.directive";
import { ExampComponent } from './examp/examp.component';
import { FilterComponent } from './filter/filter.component';
import { CarFilterPipe } from './car-filter.pipe';
import { FormComponent } from './form/form.component';
import { ReactivFComponent } from './reactiv-f/reactiv-f.component';
import { HttpServComponent } from './http-serv/http-serv.component';
import {CarService} from "./car.service";
import {HttpClientModule} from "@angular/common/http";
import { RoutungComponent } from './routung/routung.component';
import {Servicerout} from "./servicerout";
import {AppRoutingModule} from "./app.routing.module";
import {HomepageComponent} from "./homepage/homepage.component";
import {PageCarComponent} from "./page-car/page-car.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AuthService} from "./auth-service";
import {AuthGuard} from "./auth-guard-service";
import {NewPageComponent} from "./new-page/new-page.component";

@NgModule({
  declarations: [
    AppComponent,
    BackgroundDirective,
    ExampComponent,
    FilterComponent,
    CarFilterPipe,
    FormComponent,
    ReactivFComponent,
    HttpServComponent,
    RoutungComponent,
    HomepageComponent,
    PageCarComponent,
    NotFoundComponent,
    NewPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [
    CarService,
    Servicerout,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
