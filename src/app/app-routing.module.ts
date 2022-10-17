import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index';
import { ZunExpenseComponent } from './components/zun-expense/zun-expense';
import { ZunExpense2Component } from './components/zun-expense_2/zun-expense_2';

const routes: Routes = [
  { 
    path: '', 
    component: IndexComponent 
  },
  { 
    path: 'zun-expense', 
    component: ZunExpenseComponent 
  },
  { 
    path: 'zun-expense_v2', 
    component: ZunExpense2Component 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
