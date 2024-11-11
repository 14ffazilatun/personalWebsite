import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'side-bar-component',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,MatDividerModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})

export class SideBarComponent  implements OnInit  {

showContent: boolean = false;
@Output() clickedTab = new EventEmitter<any>();
  ngOnInit() {
    
  }

  openNav(){
    this.showContent = !this.showContent;
    console.log("This is the current value of showContent",this.showContent)
    
  }
  switchTab(pageName:string) {
    console.log("Clicked on side tab")
    this.clickedTab.emit(pageName);
    }
}
