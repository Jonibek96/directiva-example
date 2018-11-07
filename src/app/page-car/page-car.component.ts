import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-page-car',
  templateUrl: './page-car.component.html',
  styleUrls: ['./page-car.component.css']
})
export class PageCarComponent implements OnInit {
   id:string;
   name: string;
   color: string;
   year: string;
  constructor(private rout: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.rout.snapshot.params['id'];
    this.name = this.rout.snapshot.params['name'];
    this.color = this.rout.snapshot.queryParams['color'];
    this.year = this.rout.snapshot.queryParams['year'];

    this.rout.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.name = params['name'];
    });

    this.rout.queryParams.subscribe((params: Params) => {
      this.color = params['color'];
      this.year = params['year'];
    });

  }

  openCarPageMazda(){
    this.router.navigate(['/cars', 8, 'Mazda'], {
      queryParams: {
        color: 'pink',
        year: 2005
      },
      fragment: 'pic'
    });
  }

}
