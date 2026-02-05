# 📝 Task Management App

[![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

---

A modern task management application built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui** components. It features a clean UI, dynamic filters, CRUD operations, and a visual progress bar to track completed tasks.

## 🚀 Features
- Create, read, update, and delete tasks (CRUD)
- Toggle task completion status with a single click
- Filter tasks by **All**, **Pending**, or **Completed**
- Real-time progress bar showing completed task percentage
- Inline task editing
- Beautiful UI with **shadcn/ui** components
- Fully responsive design

## 🛠️ Tech Stack
- **Next.js** – React framework for server-side rendering and routing
- **TypeScript** – Type-safe JavaScript
- **Tailwind CSS** – Utility-first CSS framework
- **shadcn/ui** – Accessible prebuilt UI components
- **Prisma** – ORM for database management
- **PostgreSQL** – Relational database for storing tasks

## ⚡ How It Works
1. **Add Tasks** – Type a task in the input field and click "Add"
2. **Edit Tasks** – Click the **edit icon** next to a task to update it
3. **Delete Tasks** – Click the **trash icon** to remove a task
4. **Mark Complete** – Click the task row to toggle its done status; completed tasks get a strikethrough and update the progress bar
5. **Filter Tasks** – Use the top badges to filter:
   - **All** – Show all tasks
   - **Pending** – Show only incomplete tasks
   - **Completed** – Show only completed tasks
6. **Progress Bar** – Automatically shows the percentage of tasks completed

## 🔧 Installation
```bash
git clone https://github.com/your-username/task-management-app.git
cd task-management-app
npm install
npx prisma migrate dev
npm run dev
