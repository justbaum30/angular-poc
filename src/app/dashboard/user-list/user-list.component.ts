import {ChangeDetectionStrategy, Component, Input, EventEmitter, Output} from '@angular/core';
import {DashboardUser} from "../shared/models/dashboard";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {

  @Input() users: DashboardUser[];
  @Output() userDeleteClicked = new EventEmitter<string>();

  get columnHeaders(): string[] {
    return ['name', 'delete'];
  }

  deleteUser(id: string) {
    this.userDeleteClicked.emit(id);
  }
}
