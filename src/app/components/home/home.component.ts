import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { CherskyUnit } from 'src/app/shared-model/classes';
import * as data from "../../../assets/m_data/under20.json";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  rawData: any = (data as any).default;
  displayedColumns: string[] = ['position', 'name', 'details'];
  mobileName: string = "moto g6";
  color: ThemePalette = 'primary';
  value: number = 40;

  cherskyUnits: CherskyUnit[] = [];

  constructor() { }

  trackByItems(_index: number, item: CherskyUnit): number {
    return parseInt(item.id);
  }

  ngOnInit(): void {
    
    for (let i = 0; i<this.rawData.length; i++) {
      console.log(this.rawData[i])
      let data = this.rawData[i];
      let unit = new CherskyUnit();
      unit.id =  data.id ;
      unit.name = data.name;
      unit.price = data.price;
      unit.chersky_rating = data.user_rating;
      unit.user_rating = data.user_rating;
      unit.ram = data.ram;
      unit.battery = data.battery;
      unit.camera_front = data.camera_front;
      unit.camera_rear = data.camera_rear;
      unit.os = data.os;
      unit.colors = data.colors;
      unit.company_link = data.company_link;
      unit.amazon_link = data.amazon_link;
      unit.flipkart_link = data.flipkart_link;


      this.cherskyUnits.push(unit);
    }
  }

  callBack(data: number) {  }

}
