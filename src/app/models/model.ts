export namespace Zun {

    /** ユーザー情報 */
    export interface User {
        userId: string
        userName: string
    }

    /** 経費 */
    export interface Expense {
        /** ID */
        id: string
        /** 申請番号 */
        no: string
        /** 請求元 */
        source: string
        /** 金額 */
        ammountOfMoney: number
        /** 発生日 */
        date: Date
        /** 費目 */
        himoku: Himoku
        /** 添付ファイル */
        files?: File[]
        /** 特記事項 */
        memo?: string

        status?: string
    }

    /** 経費一覧データ */
    export interface expenseListData extends Expense {
        /** 申請年月 */
        yyyymm: string
    }

    /** 費目 */
    export type Himoku = '交通費' | '出張手当' | '宿泊費' | '消耗品' | 'その他'
}
