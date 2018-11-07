import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth-service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private rout: ActivatedRoute) { }

  ngOnInit() {
  }
  toPage(){
      this.router.navigate(['cars'], {relativeTo: this.rout});
  }
  changeAuthStatus(status: string){
    if(status === 'login'){
      this.auth.logIn();
    }else {
      this.auth.logOut();
    }
  }

}
