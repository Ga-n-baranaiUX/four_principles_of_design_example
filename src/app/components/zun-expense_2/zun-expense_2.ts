import { Component } from '@angular/core';
import { Store } from 'src/app/store/store';
import { Zun } from '../../models/model';
import * as uuid from 'uuid';

@Component({
  selector: 'app-zun-expense-2',
  templateUrl: './zun-expense_2.html',
  styleUrls: ['./zun-expense_2.scss']
})
export class ZunExpense2Component {

  showCurrent: boolean = true

  selectedYYYYMM: string = this.yyyymmList[0]

  filterYYYYMM: string = this.yyyymmList[0]

  loginUser: Zun.User = {
    userId: 'ADMIN9999',
    userName: 'ずんだ　もん'
  }

  editingExpense: Zun.Expense = null

  get expenseListMap(): Map<string, Zun.Expense[]> {
    const result: Map<string, Zun.Expense[]> = new Map();
    this.store.expenses.forEach(e => {
      const yyyymm = `${e.date.getFullYear()}/${(e.date.getMonth() + 1).toFixed().padStart(2, '0')}申請分`;
      if (!result.has(yyyymm)) result.set(yyyymm, []);
      result.get(yyyymm)?.push(e);
    });
    return result;
  }

  get yyyymmList(): string[] {
    return Array.from(this.expenseListMap.keys());
  }

  get expenseListData(): Zun.Expense[] {
    return this.expenseListMap.get(this.filterYYYYMM) || [];
  }
  
  get fileSelected(): boolean {
    return this.editingExpense.files?.length > 0;
  }

  constructor(private store: Store) {}

  ngOnInit() {
    this.clear();
  }

  setShowCurrent(showCurrent: boolean): void {
    this.showCurrent = showCurrent;
  }

  formattedDate(date: Date): string {
    return `${date.getFullYear()}/${(date.getMonth() + 1).toFixed().padStart(2, '0')}/${(date.getDate()).toFixed().padStart(2, '0')}`
  }

  changeYYYYMM(): void {
    this.filterYYYYMM = this.selectedYYYYMM;
  }

  formattedYen(yen: number): string {
    let temp = yen.toFixed(0);
    const result: string[] = [];
    while (temp.length > 3) {
      result.push(temp.slice(-3));
      temp = temp.slice(0, -3);
    }
    result.push(temp);
    return `¥${result.reverse().join(',')}`;
  }

  editable(): boolean {
    return this.filterYYYYMM === this.yyyymmList[0];
  }

  edit(expense: Zun.Expense): void {
    this.editingExpense = Object.assign({}, expense);
  }

  delete(expense: Zun.Expense): void {
    this.store.expenses = this.store.expenses.filter(e => e.id !== expense.id);
  }

  add(expense: Zun.Expense): void {
    console.log('add', expense);
    if (typeof (expense.date as any) == 'string') {
      expense.date = new Date(expense.date + ' 00:00:00');
    }
    expense.status = '申請前';

    if (expense.id) {
      this.store.expenses = this.store.expenses.filter(e => e.id !== expense.id);
      this.store.expenses.push(expense);   
    } else {
      expense.id = uuid.v4();
      expense.no = Math.floor(Math.random()*10000).toFixed(0).padStart(6, '0');
      this.store.expenses.push(expense);  
    }
    this.clear();
  }

  clear(): void {
    this.editingExpense = {
      id: null,
      no: null,
      source: null,
      date: new Date(),
      ammountOfMoney: 0,
      himoku: '交通費'
    }  
  }

}
