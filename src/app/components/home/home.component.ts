import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { CherskyUnit } from 'src/app/shared-model/classes';
import * as data from "../../../assets/m_data/m_data.json";


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
      unit.name = data.mobile_name;
      unit.price = data.price[1];
      unit.best_price = data.price[0];
      unit.chersky_rating = data.chersky_rating;
      unit.user_rating = data.user_rating;
      unit.value = "val" + i;
      this.cherskyUnits.push(unit);
    }
  }

  callBack(data: number) {  }

}
