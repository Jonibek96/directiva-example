import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {RoutungComponent} from "app/routung/routung.component";
import {HomepageComponent} from "app/homepage/homepage.component";
import {PageCarComponent} from "./page-car/page-car.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AuthGuard} from "./auth-guard-service";
import {NewPageComponent} from "./new-page/new-page.component";

const appRoutes: Routes = [
  {path: 'cars', component: RoutungComponent, canActivate: [AuthGuard], children: [
      {path: ':id/:name', component: PageCarComponent},
    ]},
  {path: '', component: HomepageComponent},
  {path: 'new', component: NewPageComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
