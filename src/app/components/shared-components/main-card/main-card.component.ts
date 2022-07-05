import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CherskyUnit } from 'src/app/shared-model/classes';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent implements OnInit {
  @Input() unit!: CherskyUnit;
  @Output() blinkerPos = new EventEmitter<number>();

  ngOnInit(): void {
    
  }
 
}
