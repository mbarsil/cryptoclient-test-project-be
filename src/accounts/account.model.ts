export interface Account {
  id: number;
  name: string;
  category: string;
  tag: string;
  balance: number;
  availableBalance: number;
  transactions: Transaction[];
}

export interface Transaction {
  id: string;
  confirmedDate: string;
  type: string;
  credit: number;
  balance: number;
}
