export interface Dashboard {
  accounts: DashboardAccount[];
  users: DashboardUser[];
}

export interface DashboardAccount {
  name: string;
  availableBalance: number;
  shouldShowOverdraftProtectionEnabled: boolean;
}

export interface DashboardUser {
  id: string;
  name: string;
  canDelete: boolean;
}
