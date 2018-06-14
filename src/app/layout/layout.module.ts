import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { TabNavComponent } from './tab-nav/tab-nav.component';
import { LayoutService } from './layout.service';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    TabNavComponent
  ],
  providers:[LayoutService]
})
export class LayoutModule { }
