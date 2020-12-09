import {createSelector} from "@ngrx/store";
import {selectAccounts} from "../../core/store/account/account.selectors";
import {selectUsers} from "../../core/store/user/user.selectors";
import {AccountRecord, AccountType} from "../../core/services/account/models/account-record";
import {UserRecord} from "../../core/services/user/models/user-record";
import {Dashboard, DashboardAccount, DashboardUser} from "./models/dashboard";

export const selectDashboard = createSelector(
  selectAccounts,
  selectUsers,
  transformDashboard
);

function transformDashboard(accountRecords: AccountRecord[], userRecords: UserRecord[]): Dashboard {
  const accounts: DashboardAccount[] = accountRecords?.map(record => {
    const accountNamePrefix = record.type === AccountType.Checking ? 'Checking - ' : 'Savings - ';
    return {
      name: accountNamePrefix + record.accountNumber,
      availableBalance: record.availableBalance,
      shouldShowOverdraftProtectionEnabled: record.type === AccountType.Checking && record.overdraftProtectionEnabled
    }
  });

  const users: DashboardUser[] = userRecords?.map(record => {
    return {
      id: record.id,
      name: record.name,
      canDelete: !record.isAdmin
    }
  });

  return {
    accounts,
    users
  };
}
