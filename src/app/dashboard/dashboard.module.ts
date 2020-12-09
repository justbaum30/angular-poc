import { NgModule } from '@angular/core';
import {DashboardComponent} from "./dashboard.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { AccountListComponent } from './account-list/account-list.component';
import { UserListComponent } from './user-list/user-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
  declarations: [
    DashboardComponent,
    AccountListComponent,
    UserListComponent,
    AccountListComponent
  ],
})
export class DashboardModule {}
