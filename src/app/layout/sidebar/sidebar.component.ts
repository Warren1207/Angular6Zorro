import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  appMenu = [{
    title : '菜单一',
    href : '#',
    children : [{
       title : '子菜单一',
       href : '#'
      },{
        title : '子菜单二',
        href : '#'
      },{
        title : '子菜单三',
        href : '#'
    }]
  },{
    title : '菜单二',
    href : '#',
    children : [{
       title : '子菜单一',
       href : '#'
      },{
        title : '子菜单二',
        href : '#'
      },{
        title : '子菜单三',
        href : '#'
    }]
  },{
    title : '菜单三',
    href : '#',
    children : [{
       title : '子菜单一',
       href : '#'
      },{
        title : '子菜单二',
        href : '#'
      },{
        title : '子菜单三',
        href : '#'
    }]
  },{
    title : '菜单四',
    href : '#',
    children : [{
       title : '子菜单一',
       href : '#'
      },{
        title : '子菜单二',
        href : '#'
      },{
        title : '子菜单三',
        href : '#'
    }]
  },{
    title : '菜单五',
    href : '#',
    children : [{
       title : '子菜单一',
       href : '#'
      },{
        title : '子菜单二',
        href : '#'
      },{
        title : '子菜单三',
        href : '#'
    }]
  }];
  isCollapsed: false;
  subscription: any;

  constructor(private layoutService : LayoutService) { 
    this.subscription = this.layoutService.getSide().subscribe(isCollapsed => { this.isCollapsed = isCollapsed; });
  }

  ngOnInit() {
    
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
