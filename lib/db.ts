import { Pool, QueryResult } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

// Define what kind of data is allowed in a query
type SqlParam = string | number | boolean | null | undefined;

export const query = (
  text: string,
  params?: SqlParam[]
): Promise<QueryResult> => {
  return pool.query(text, params);
};

export default pool;
