import { Request, Response } from 'express';
import { TransactionRepository } from '../repositories/transactionRepository';

const transactionRepository = new TransactionRepository();

export const getTransactions = async (req: Request, res: Response) => {
  try {
    const transactions = await transactionRepository.getAllTransactions();
    res.status(200).json(transactions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar transações' });
  }
};

export const addTransaction = async (req: Request, res: Response) => {
  const { id_user, id_product, time } = req.body;
  try {
    const transaction = await transactionRepository.addTransaction(id_user, id_product, time);
    res.status(201).json(transaction);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao adicionar transação' });
  }
};