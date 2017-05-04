import {Component} from '@angular/core';
import {StockService} from './stock.service';
@Component({
    selector: 'stocks',
    template: `<h2>Stocks</h2>
    {{title}}
    
    <ul [ngStyle] = "{'color': myColor, 'font-size': mySize}">
        <li *ngFor="let stock of stocks">
            {{stock}}
        </li>
    </ul>

    <hr>

    <ul *ngIf="stockMarkets.length == 5" [ngClass]="{customClass:isColorBrown, centerClass:isCenter}">
        <li *ngFor="let stockMarket of stockMarkets">
            {{stockMarket}}
        </li>
    </ul>

    <hr>

    <div [ngSwitch] = "market">
        <div *ngSwitchCase="'NYSE'">New York Stock Exchange</div>
        <div *ngSwitchCase="'LSE'">London Stock Exchange</div>
        <div *ngSwitchCase="'HKSE'">Hong Kong Stock Exchange</div>
        <div *ngSwitchCase="'NASDAQ'">National Association of Securities Dealers Automated Quotations</div>

        <div *ngSwitchDefault>Could not find a match</div>
    </div>


    `, styles:[`

    .customClass{
        color:green; 
   }

    .centerClass{
        text-align: center;
    }


    `
    ]
})

export class StocksComponent{

    isCenter = true;
    isColorBrown = false;

    myColor = 'blue';
    mySize = '200%';
    market= 'HKSE';
    title = 'List of stocks: ';
    //stocks = ['AAPL', 'IBM', 'GOOG', 'UDEMY'];
    stocks;
    showStockMarkets=true;

    stockMarkets = ['NYSE', 'NASDAQ', 'EURONEXT', 'HKSE', 'LSE']
    constructor(stockService: StockService) {   
        this.stocks = stockService.getStocks();
    }
}