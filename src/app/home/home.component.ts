import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { NumberService } from "../table/number.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  numberList: number[] = [];
  number = 0;
  private _numberService: NumberService;


  constructor(nmbrService: NumberService) {
    this._numberService = nmbrService;
  }


  ngOnInit() {
    this.numberList = this._numberService.list;

  }

  addElement() {

    var lastnumber: number = this.numberList[this.numberList.length - 1];
    if (lastnumber) {
      this._numberService.addElement(lastnumber + 1)
      // this.myList.push(lastnumber + 1)
    }
  }
  increment() {
    this.number = this.number + 1
  }
  decrement() {
    if (this.number !== 0)
      this.number = this.number - 1
  }
}
