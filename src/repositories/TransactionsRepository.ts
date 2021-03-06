import Transaction from '../models/Transaction';
import { v4 as uuid } from 'uuid';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    const { income, outcome } = this.transactions.reduce((accumulator: Balance, transaction: Transaction) => {
      switch(transaction.type)
      {
        case "income":
          accumulator.income += transaction.value;
        break;

        case "outcome":
          accumulator.outcome += transaction.value;
        break;

        default:
        break;
      }

      return accumulator;
    }, {
      income: 0,
      outcome: 0,
      total: 0,
    });

    const total = income - outcome;

    return { income, outcome, total };
  }

  public create(transaction: Transaction): Transaction {
    // TODO
    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
