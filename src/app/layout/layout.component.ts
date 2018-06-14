import { Component, OnInit } from '@angular/core';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isCollapsed: false;
  subscription: any;

  constructor(private layoutService : LayoutService) {
    this.subscription = this.layoutService.getSide().subscribe(
      isCollapsed => { 
        this.isCollapsed = isCollapsed; 
    });
   }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
