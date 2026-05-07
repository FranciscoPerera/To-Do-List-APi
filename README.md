# 📋 To-Do List API + Front-end

Uma aplicação completa de gerenciamento de tarefas (To-Do List), com **API REST em Flask + PostgreSQL** e um **front-end em HTML, Bootstrap e JavaScript puro**.

O sistema permite criar, listar, atualizar, concluir e excluir tarefas com persistência em banco de dados.

---

# 🚀 Demonstração

Interface simples e responsiva para gerenciar tarefas:

* Criar tarefas
* Editar tarefas
* Concluir tarefas
* Excluir tarefas
* Visualizar status (pendente / concluída)

---

# 🧰 Tecnologias

## Backend

* Python 3
* Flask
* Flask-CORS
* psycopg2-binary
* PostgreSQL
* python-dotenv

## Frontend

* HTML5
* CSS3 (Bootstrap 5)
* JavaScript (Vanilla)

---

# 📁 Estrutura do Projeto

```
App-To_DoList/
│
├── backend/
│   ├── app.py
│   ├── db.py
│   ├── config.py
│   ├── models/
│   │   └── tarefa_model.py
│   ├── routes/
│   │   └── tarefa_routes.py
│   ├── requirements.txt
│   └── .env
│
├── banco.sql
│
├── frontend/
│   └── index.html
│
└── README.md
```

---

# ⚙️ Instalação e Execução

## 📦 1. Clone o projeto

```bash
git clone https://github.com/seu-usuario/todo-api.git
cd todo-api
```

---

## 🐍 2. Instale o backend

```bash
cd backend
pip install -r requirements.txt
```

---

## 🧪 3. Configure o banco de dados

Crie o banco no PostgreSQL:

```sql
CREATE DATABASE todo_api;
```

Depois execute o script:

```sql
banco.sql
```

---

## 🔐 4. Configure o `.env`

```env
DB_NAME=todo_api
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432
```

---

## 🚀 5. Execute a API

```bash
python app.py
```

---

## 🌐 6. Execute o front-end

Abra o arquivo:

```
frontend/index.html
```

---

# 🎯 Funcionalidades

* ✔ Criar tarefas
* ✔ Listar tarefas
* ✔ Editar tarefas
* ✔ Concluir tarefas
* ✔ Excluir tarefas
* ✔ Persistência em PostgreSQL
* ✔ Front-end responsivo com Bootstrap
* ✔ Consumo de API via fetch()

---

# 📈 Melhorias futuras

* 🔍 filtro por status
* 📊 dashboard de tarefas
* 🌙 dark mode
* ⚡ loading spinner
* 📱 versão React/Vue
* 🔔 notificações de tarefas

---

# Licença
Este projeto está sob a licença MIT.
Você pode usá-lo, estudá-lo e modificá-lo livremente.
