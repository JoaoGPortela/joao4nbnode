import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString = "postgresql://auladehoje_user:q21T1q6pApkYsMSwHkekDqrziI7IIzQ6@dpg-cr6h5prv2p9s7393ba0g-a.oregon-postgres.render.com/auladehoje";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
