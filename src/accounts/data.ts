import { Account } from './account.model';

const uniqid = require('uniqid');
const moment = require('moment');

export const EXCHANGE_RATE = 9879.2;

export const ACCOUNT_DATA: Account[] = [
  {
    id: 1,
    name: 'Main account',
    category: 'personal',
    tag: 'active',
    balance: 1.23,
    availableBalance: 1.00,
    transactions: [
      {
        id: uniqid(),
        confirmedDate: `${moment().format('l')}  ${moment().format('H:mm')}`,
        type: 'settlement',
        credit: 0.1,
        balance: 0.9
      }
    ]
  },
  {
    id: 2,
    name: 'Payslip account',
    category: 'payslip',
    tag: 'shared',
    balance: 1.14,
    availableBalance: 1.02,
    transactions: [
      {
        id: uniqid(),
        confirmedDate: `${moment().format('l')}  ${moment().format('H:mm')}`,
        type: 'settlement',
        credit: 0.1,
        balance: 0.9
      }
    ]
  },
  {
    id: 3,
    name: 'Investment account',
    category: 'stockmarket',
    tag: 'frozen',
    balance: 1.213,
    availableBalance: 1.0,
    transactions: [
      {
        id: uniqid(),
        confirmedDate: `${moment().format('l')}  ${moment().format('H:mm')}`,
        type: 'settlement',
        credit: 0.1,
        balance: 0.9
      }
    ]
  },
  {
    id: 4,
    name: 'Main account',
    category: 'personal',
    tag: 'active',
    balance: 1.23,
    availableBalance: 0.9,
    transactions: [
      {
        id: uniqid(),
        confirmedDate: `${moment().format('l')}  ${moment().format('H:mm')}`,
        type: 'settlement',
        credit: 0.1,
        balance: 0.9
      }
    ]
  },
  {
    id: 5,
    name: 'Payslip account',
    category: 'payslip',
    tag: 'shared',
    balance: 1.14,
    availableBalance: 1.02,
    transactions: [
      {
        id: uniqid(),
        confirmedDate: `${moment().format('l')}  ${moment().format('H:mm')}`,
        type: 'settlement',
        credit: 0.1,
        balance: 0.9
      }
    ]
  },
  {
    id: 6,
    name: 'Investment account',
    category: 'stockmarket',
    tag: 'frozen',
    balance: 1.21,
    availableBalance: 1.01,
    transactions: [
      {
        id: uniqid(),
        confirmedDate: `${moment().format('l')}  ${moment().format('H:mm')}`,
        type: 'settlement',
        credit: 0.1,
        balance: 0.9
      }
    ]
  },
  {
    id: 7,
    name: 'Main account',
    category: 'personal',
    tag: 'active',
    balance: 0.81,
    availableBalance: 0.81,
    transactions: [
      {
        id: uniqid(),
        confirmedDate: `${moment().format('l')}  ${moment().format('H:mm')}`,
        type: 'settlement',
        credit: 0.1,
        balance: 0.9
      }
    ]
  },
  {
    id: 8,
    name: 'Payslip account',
    category: 'payslip',
    tag: 'shared',
    balance: 0.71,
    availableBalance: 0.5,
    transactions: [
      {
        id: uniqid(),
        confirmedDate: `${moment().format('l')}  ${moment().format('H:mm')}`,
        type: 'settlement',
        credit: 0.1,
        balance: 0.9
      }
    ]
  },
  {
    id: 9,
    name: 'Investment account',
    category: 'stockmarket',
    tag: 'frozen',
    balance: 0.99,
    availableBalance: 0.55,
    transactions: [
      {
        id: uniqid(),
        confirmedDate: `${moment().format('l')}  ${moment().format('H:mm')}`,
        type: 'settlement',
        credit: 0.1,
        balance: 0.9
      }
    ]
  },
  {
    id: 10,
    name: 'Main account',
    category: 'personal',
    tag: 'active',
    balance: 1.23,
    availableBalance: 1.11,
    transactions: [
      {
        id: uniqid(),
        confirmedDate: `${moment().format('l')}  ${moment().format('H:mm')}`,
        type: 'settlement',
        credit: 0.1,
        balance: 0.9
      }
    ]
  },
  {
    id: 11,
    name: 'Payslip account',
    category: 'payslip',
    tag: 'shared',
    balance: 1.3,
    availableBalance: 1.02,
    transactions: [
      {
        id: uniqid(),
        confirmedDate: `${moment().format('l')}  ${moment().format('H:mm')}`,
        type: 'settlement',
        credit: 0.1,
        balance: 0.9
      }
    ]
  },
  {
    id: 12,
    name: 'Investment account',
    category: 'stockmarket',
    tag: 'frozen',
    balance: 0.213,
    availableBalance: 0.1,
    transactions: [
      {
        id: uniqid(),
        confirmedDate: `${moment().format('l')}  ${moment().format('H:mm')}`,
        type: 'settlement',
        credit: 0.1,
        balance: 0.9
      }
    ]
  },
  {
    id: 13,
    name: 'Main account',
    category: 'personal',
    tag: 'active',
    balance: 0.12,
    availableBalance: 0.01,
    transactions: [
      {
        id: uniqid(),
        confirmedDate: `${moment().format('l')}  ${moment().format('H:mm')}`,
        type: 'settlement',
        credit: 0.1,
        balance: 0.9
      }
    ]
  },
  {
    id: 14,
    name: 'Payslip account',
    category: 'payslip',
    tag: 'shared',
    balance: 1.7,
    availableBalance: 1.6,
    transactions: [
      {
        id: uniqid(),
        confirmedDate: `${moment().format('l')}  ${moment().format('H:mm')}`,
        type: 'settlement',
        credit: 0.1,
        balance: 0.9
      }
    ]
  },
  {
    id: 15,
    name: 'Investment account',
    category: 'stockmarket',
    tag: 'frozen',
    balance: 1.11,
    availableBalance: 1.07,
    transactions: [
      {
        id: uniqid(),
        confirmedDate: `${moment().format('l')}  ${moment().format('H:mm')}`,
        type: 'settlement',
        credit: 0.1,
        balance: 0.9
      }
    ]
  }
];
