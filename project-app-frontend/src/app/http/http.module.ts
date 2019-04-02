import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//маршрутизация модуля
import { HttpRoutingModule } from './http-routing.module';

//сервисы модуля
import { HttpService } from './http.service';
import { ReactiveFormsModule } from '@angular/forms';

//подключаемые компоненты
import { C1MainComponent } from './c1-main/c1-main.component';
import { C2PostComponent } from './c2-post/c2-post.component';
import { C3GetComponent } from './c3-get/c3-get.component';
import { C4PutComponent } from './c4-put/c4-put.component';
import { C5DeleteComponent } from './c5-delete/c5-delete.component';
import { C3GetIdComponent } from './c3-get-id/c3-get-id.component';
import { C3GetChildrenComponent } from './c3-get-children/c3-get-children.component';


@NgModule({
  declarations: [
    C1MainComponent,
    C2PostComponent,
    C3GetComponent,
    C4PutComponent,
    C5DeleteComponent,
    C3GetIdComponent,
    C3GetChildrenComponent,
   ],
  imports: [
    CommonModule,
    HttpRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    C1MainComponent
  ],
  providers:[HttpService]
})
export class HttpModule { }
