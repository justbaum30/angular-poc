import {Injectable} from '@angular/core';
import {AccountRecord, AccountType} from "./models/account-record";
import {Observable, of} from "rxjs";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  getAccounts(): Observable<AccountRecord[]> {
    return of([
      {
        accountNumber: '98765',
        routingNumber: '00321',
        availableBalance: 123.45,
        presentBalance: 234.56,
        overdraftProtectionEnabled: true,
        type: AccountType.Checking,
      },
      {
        accountNumber: '76543',
        routingNumber: '00654',
        availableBalance: 2112.00,
        presentBalance: 2112.00,
        overdraftProtectionEnabled: false,
        type: AccountType.Savings,
      }
    ]).pipe(delay(4000))
  }
}
