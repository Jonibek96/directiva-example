import { Component, OnInit } from '@angular/core';
import {Model, TodoItem} from "../models";

@Component({
  selector: 'app-examp',
  templateUrl: './examp.component.html',
  styleUrls: ['./examp.component.css']
})
export class ExampComponent implements OnInit {
  model = new Model();

  constructor() { }

  ngOnInit() {

  }
  getName(){
    return this.model.user;
  }

  getTodoItem(){
    return this.model.items.filter(item => !item.done);
  }
  addItem(newItem){
    if(newItem != ''){
      return this.model.items.push(new TodoItem(newItem, false));
    }
  }

}
