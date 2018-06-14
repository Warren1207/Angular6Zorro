import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = false;

  toggle () {
    this.isCollapsed = !this.isCollapsed;
    //调用方法，发射数据
    this.layoutService.setSide(this.isCollapsed);
  }
  constructor(private layoutService : LayoutService) {}

  ngOnInit() {
  }

}
