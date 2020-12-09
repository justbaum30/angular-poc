import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {DashboardAccount} from "../shared/models/dashboard";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountListComponent {

  @Input() accounts: DashboardAccount[];

  get columnHeaders(): string[] {
    return ['name', 'availableBalance', 'overdraftProtection'];
  }
}
