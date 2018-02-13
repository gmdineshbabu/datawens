import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SalesComponent } from './sales/sales.component';
import { SalesDetailsComponent } from './sales/sales-details/sales-details.component';
import { AppRouting } from './app.routing';
import { ServiceService } from './service/service.service';


@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    SalesDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouting
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
