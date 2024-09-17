import { Pool } from 'pg';
import pool from '../config/database';
import { Transaction } from '../models/transactionModel';

export class TransactionRepository {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }

  // Método para buscar todos os usuários
  async getAllTransactions(): Promise<Transaction[]> {
    const { rows } = await this.pool.query('SELECT id, id_user, id_product, time FROM transaction');
    return rows;
  }

  // Método para adicionar um novo usuário
  async addTransaction(id_user: number, id_product: number, time: Date): Promise<Transaction> {
    const queryText = 'INSERT INTO transaction(id_user, id_product, time) VALUES($1, $2, $3) RETURNING *';
    const { rows } = await this.pool.query(queryText, [id_user, id_product, time]);
    return rows[0];
  }
}