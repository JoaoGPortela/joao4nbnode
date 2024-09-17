import pool from "../config/database";

const createTransactionTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS transaction (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        product_id INTEGER NOT NULL,
        time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
    `;
    await client.query(queryText);
    console.log('Tabela "transaction" criada com sucesso!');
  } catch (err) {
    console.error("Erro ao criar tabela:", err);
  } finally {
    client.release();
  }
};

createTransactionTable().then(() => process.exit(0));
