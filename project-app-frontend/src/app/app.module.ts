import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//httpClient
import { HttpClientModule } from '@angular/common/http';

//storeModule
import { StoreModule } from '@ngrx/store';

//reducers
import { phoneBookReducer } from './redux/app.reducer';

//подключаемые компоненты 
import { AppComponent } from './app.component';

//подключаемые модули
import { HttpModule } from './http/http.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    StoreModule.forRoot({ title: phoneBookReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
  
export class AppModule { }
