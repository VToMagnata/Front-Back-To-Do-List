// 🔹 Carrega automaticamente o arquivo `.env` antes de qualquer coisa rodar
// Sem isso, process.env.DATABASE_URL seria undefined quando usar Node/tsx
import "dotenv/config";

// 🔹 Importa o PrismaClient GERADO pelo Prisma (output customizado)
// Esse client NÃO sabe se conectar sozinho no Prisma 7
import { PrismaClient } from "@/generated/prisma";

// 🔹 Adapter oficial do Prisma para PostgreSQL
// Ele faz a ponte entre o Prisma e o driver `pg`
import { PrismaPg } from "@prisma/adapter-pg";

// 🔹 Driver oficial do PostgreSQL para Node.js
// Responsável pela conexão real com o banco
import { Pool } from "pg"; // Adapter para conectar ao banco de dados

// 🔹 Cria um pool de conexões com o PostgreSQL
// Aqui é onde o banco realmente é acessado
// A connectionString vem do `.env`
// Exemplo: postgresql://user:pass@localhost:5432/db
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// 🔹 Cria o adapter do Prisma usando o pool do PostgreSQL
// O Prisma NÃO fala direto com o banco, ele fala com o adapter
const adapter = new PrismaPg(pool);

// 🔹 Instancia o PrismaClient passando o adapter
// Agora o Prisma sabe:
// - qual banco usar
// - como conectar
// - como executar queries
export const prisma = new PrismaClient({
  adapter,
});
