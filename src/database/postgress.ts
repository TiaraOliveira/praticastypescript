import { Pool } from 'pg';

const connection = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'starfighters',
  password: '180822',
  port: 55456
})


export default connection;