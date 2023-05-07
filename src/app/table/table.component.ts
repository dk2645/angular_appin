import { Component } from "@angular/core";

@Component({
  selector: 'basic-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  products = [
    {
      id: 1,
      name: 'muz',
      price: 12
    }
  ]
  DeleteProduct(id: number) {
    this.products = this.products.filter(x => x.id !== id)
  }
  AddProduct(productName: string) {
    if (productName.length <= 0) {
      alert('lütfen bir ürün ismi giriniz')
    } else {
      let lastIndex = this.products[this.products.length - 1]
      let newObject = {
        id: lastIndex ? lastIndex.id + 1 : 1,
        name: productName,
        price: 12
      }
      this.products.push(newObject)
    }
  }

}
