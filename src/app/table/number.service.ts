import { Injectable } from "@angular/core";

@Injectable(
  {
    providedIn: 'root'
  }
)

export class NumberService {
  list: number[] = [1, 2, 3, 4, 5, 6]
  addElement(addNumber: number) {
    this.list.push(addNumber)
  }
}
