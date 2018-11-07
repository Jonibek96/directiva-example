import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth-service";

@Injectable()
export  class AuthGuard implements CanActivate{
  constructor (private auth: AuthService){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
   return this.auth.isAuth().then((isLoggedIn: boolean) =>{
      if(isLoggedIn){
        return true
      }else {
        return
      }
    });
  }

}
