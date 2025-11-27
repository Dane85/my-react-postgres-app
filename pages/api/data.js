// /pages/api/data.js
import queryDatabase from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Example: Fetch users table
    const { rows } = await queryDatabase('SELECT * FROM users', []);
    
    try {
      return res.status(200).json(rows);
    } catch {
      return res.status(500).end();
    }
  }

  if (req.method === 'POST') {
    // Example: Insert new user
    const { name, email } = req.body;

    try {
      await queryDatabase(
        'INSERT INTO users(name, email) VALUES($1, $2)',
        [name, email]
      );
      return res.status(201).end();
    } catch (error) {
      console.error('Insert failed:', error);
      return res.status(500).json({ message: 'Database insert error' });
    }
  }

  // Handle other HTTP methods
}