import { Request, Response } from 'express';
import { ProductRepository } from '../repositories/productRepository';

const productRepository = new ProductRepository();

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productRepository.getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
};

export const addProduct = async (req: Request, res: Response) => {
  const { name, price } = req.body;
  try {
    const product = await productRepository.addProduct(name, price);
    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao adicionar produto' });
  }
};