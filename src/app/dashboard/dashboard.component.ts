import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DashboardService} from "./shared/dashboard.service";
import {Observable} from "rxjs";
import {Dashboard} from "./shared/models/dashboard";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {

  dashboard$: Observable<Dashboard>;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboard$ = this.dashboardService.loadAndGetDashboard();
  }

  deleteUser(id: string) {
    this.dashboardService.deleteUser(id);
  }
}
