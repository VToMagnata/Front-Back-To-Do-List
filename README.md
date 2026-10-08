# 📝 Aplicativo de Gerenciamento de Tarefas

[![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

---

Um aplicativo moderno de gerenciamento de tarefas construído com **Next.js**, **TypeScript**, **Tailwind CSS** e componentes **shadcn/ui**. Conta com uma interface limpa, filtros dinâmicos, operações CRUD e uma barra de progresso visual para acompanhar as tarefas concluídas.

## 🚀 Funcionalidades
- Criar, ler, atualizar e excluir tarefas (CRUD)
- Alternar o status de conclusão da tarefa com um único clique
- Filtrar tarefas por **Todas**, **Pendentes** ou **Concluídas**
- Barra de progresso em tempo real mostrando a porcentagem de tarefas concluídas
- Edição de tarefas direto na lista
- Interface bonita com componentes **shadcn/ui**
- Design totalmente responsivo

## 🛠️ Tecnologias
- **Next.js** – Framework React para renderização no servidor e roteamento
- **TypeScript** – JavaScript com tipagem segura
- **Tailwind CSS** – Framework CSS utility-first
- **shadcn/ui** – Componentes de interface prontos e acessíveis
- **Prisma** – ORM para gerenciamento do banco de dados
- **PostgreSQL** – Banco de dados relacional para armazenar as tarefas

## ⚡ Como Funciona
1. **Adicionar Tarefas** – Digite uma tarefa no campo de texto e clique em "Add"
2. **Editar Tarefas** – Clique no **ícone de edição** ao lado da tarefa para atualizá-la
3. **Excluir Tarefas** – Clique no **ícone de lixeira** para remover a tarefa
4. **Marcar como Concluída** – Clique na linha da tarefa para alternar o status; tarefas concluídas ficam riscadas e atualizam a barra de progresso
5. **Filtrar Tarefas** – Use os selos (badges) no topo para filtrar:
   - **Todas** – Mostra todas as tarefas
   - **Pendentes** – Mostra apenas as tarefas incompletas
   - **Concluídas** – Mostra apenas as tarefas concluídas
6. **Barra de Progresso** – Mostra automaticamente a porcentagem de tarefas concluídas

## 🔧 Como rodar

**Pré-requisitos:** Node.js e um PostgreSQL rodando (local, Neon, Supabase, etc.)

```bash
# 1. Clone o repositório
git clone https://github.com/VToMagnata/Front-Back-To-Do-List.git
cd Front-Back-To-Do-List

# 2. Instale as dependências
npm install
```

**3. Crie um arquivo `.env` na raiz do projeto** com a conexão do seu PostgreSQL:

```env
DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/tasks?schema=public"
```

```bash
# 4. Crie as tabelas no banco
npx prisma migrate dev --name init

# 5. Gere o Prisma Client
npx prisma generate

# 6. Rode o projeto
npm run dev
```

Acesse em http://localhost:3000 🚀
