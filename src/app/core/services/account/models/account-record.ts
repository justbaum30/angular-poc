export interface AccountRecord {
  accountNumber: string;
  routingNumber: string;
  availableBalance: number;
  presentBalance: number;
  overdraftProtectionEnabled: boolean;
  type: AccountType;
}

export enum AccountType {
  Checking = 'CHECKING',
  Savings = 'SAVINGS',
}
