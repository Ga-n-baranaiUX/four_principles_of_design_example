import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index';
import { ZunExpenseComponent } from './components/zun-expense/zun-expense';
import { ZunExpense2Component } from './components/zun-expense_2/zun-expense_2';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ZunExpenseComponent,
    ZunExpense2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
