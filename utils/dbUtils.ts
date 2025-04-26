import { Client } from 'pg';
import { config } from './envLoader';

export async function executeQuery(query: string) {
  const client = new Client({
    host: config.dbHost,
    user: config.dbUser,
    password: config.dbPass,
    database: 'your_database_name', // Update accordingly
  });

  await client.connect();
  const res = await client.query(query);
  await client.end();
  return res.rows;
}
