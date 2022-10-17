import { Zun } from "../models/model";
import * as uuid from 'uuid';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Store {

    /** 費用 */
    expenses: Zun.Expense[] = [
        {
            id: uuid.v4(),
            no: Math.floor(Math.random()*10000).toFixed(0).padStart(6, '0'),
            source: '****ホテル',
            ammountOfMoney: 15000,
            date: new Date(2022, 11, 1),
            himoku: '出張手当'
        },
        {
            id: uuid.v4(),
            no: Math.floor(Math.random()*10000).toFixed(0).padStart(6, '0'),
            source: 'ア**ル',
            ammountOfMoney: 8000,
            date: new Date(2022, 11, 5),
            himoku: '消耗品'
        },
        {
            id: uuid.v4(),
            no: Math.floor(Math.random()*10000).toFixed(0).padStart(6, '0'),
            source: 'ア**ル',
            ammountOfMoney: 7000,
            date: new Date(2022, 11, 8),
            himoku: '消耗品'
        },
        {
            id: uuid.v4(),
            no: Math.floor(Math.random()*10000).toFixed(0).padStart(6, '0'),
            source: '神**OA',
            ammountOfMoney: 1200,
            date: new Date(2022, 11, 12),
            himoku: '消耗品'
        },
        {
            id: uuid.v4(),
            no: Math.floor(Math.random()*10000).toFixed(0).padStart(6, '0'),
            source: 'オフィス家具オ**カ',
            ammountOfMoney: 53500,
            date: new Date(2022, 11, 12),
            himoku: 'その他'
        },
        {
            id: uuid.v4(),
            no: Math.floor(Math.random()*10000).toFixed(0).padStart(6, '0'),
            source: 'J**日本',
            ammountOfMoney: 13500,
            date: new Date(2022, 11, 30),
            himoku: '交通費'
        },
        {
            id: uuid.v4(),
            no: Math.floor(Math.random()*10000).toFixed(0).padStart(6, '0'),
            source: 'XXXXホテル',
            ammountOfMoney: 15000,
            date: new Date(2022, 10, 1),
            himoku: '出張手当'
        },
        {
            id: uuid.v4(),
            no: Math.floor(Math.random()*10000).toFixed(0).padStart(6, '0'),
            source: 'XXXXホテル',
            ammountOfMoney: 15000,
            date: new Date(2022, 9, 1),
            himoku: '出張手当'
        },
        {
            id: uuid.v4(),
            no: Math.floor(Math.random()*10000).toFixed(0).padStart(6, '0'),
            source: 'XXXXホテル',
            ammountOfMoney: 15000,
            date: new Date(2022, 8, 1),
            himoku: '出張手当'
        },
        {
            id: uuid.v4(),
            no: Math.floor(Math.random()*10000).toFixed(0).padStart(6, '0'),
            source: 'XXXXホテル',
            ammountOfMoney: 15000,
            date: new Date(2022, 7, 1),
            himoku: '出張手当'
        },
    ]

    constructor() {
        this.expenses.forEach(e => {
            e.status = e.date.getMonth() === 11 ? '申請前' : '承認済み';
        });
    }

}