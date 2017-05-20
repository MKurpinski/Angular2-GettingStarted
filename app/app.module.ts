import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StarComponent }  from './shared/star.component'
import { AppComponent }  from './app.component';
import { ProductListComponent }  from './products/product-list.component'
import { ProductFilterPipe }  from './products/product-filter.pipe'
import { FormsModule }  from '@angular/forms';
import { HttpModule }  from '@angular/http';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, ProductListComponent, ProductFilterPipe, StarComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
