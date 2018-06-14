import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    NgZorroAntdModule.forRoot()
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
