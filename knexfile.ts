import path from 'path'
import { Knex } from 'knex'

export const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'sqlite3', // ou 'pg', 'mysql', etc.
    connection: {
      filename: './src/db/database.sqlite',
    },
    migrations: {
      directory: path.resolve(__dirname, '../db/migrations'), // 👈 caminho absoluto resolvido corretamente
      extension: 'ts', // ou 'js' se for JavaScript
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './src/db/database.sqlite',
    },
    migrations: {
      directory: path.resolve(__dirname, '../db/migrations'), // 👈 mesmo caminho
      extension: 'ts',
    },
    useNullAsDefault: true,
  },
}
