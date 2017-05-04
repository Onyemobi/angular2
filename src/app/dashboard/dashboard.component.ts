import { Component, OnInit } from '@angular/core';

import { StockService } from '../stock.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stocks : string[]; 

  selectedStock : any;
  updateEnabled = false;

  ngOnInit() {
    this.getAllStocks();
}

    constructor(private stockservice: StockService) {
   }

   getAllStocks(){
     this.stockservice.getStocksAPI()
     .subscribe(
       data => this.stocks = data,
       error => console.log("Server Error")
     );
   }


   createStock(newStockCode : string, newName : string) {
     this.stockservice.createStock(newStockCode, newName).subscribe(
          data => {
            this.getAllStocks();
          }
     );
   }

   updateStock(newStockCode: string, newName: string) {
     this.stockservice.updateStock(this.selectedStock.id, newStockCode, newName).subscribe(
          data => {
            this.getAllStocks();
          }

     );
   }

   deleteStock(stockId: string){
      this.stockservice.deleteStock(stockId).subscribe(
         data => {
            this.getAllStocks();
          }
      );
   }

   loadDetails(stock : any) {
     this.updateEnabled = true;
     this.selectedStock = stock;
   }

}
