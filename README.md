# node-auth-system-ts

API de exemplo para autenticação de usuários escrita em TypeScript, usando Node.js, Express e SQLite (via Knex).

## ✅ Objetivo

Este projeto demonstra uma arquitetura limpa e modular para um sistema de autenticação: rotas, controllers, services, repositórios e migrações com Knex.

## 🚀 Tecnologias

- Node.js
- TypeScript
- Express
- Knex
- SQLite3
- JSON Web Tokens (JWT)
- bcryptjs

## 🔧 Scripts úteis (package.json)

- `npm run dev` — roda a aplicação em modo de desenvolvimento (nodemon, TypeScript via ts-node)
- `npm run build` — compila TypeScript para a pasta `dist`
- `npm start` — executa a build (após `build`)
- `npm run knex` — executa o CLI do Knex usando `knexfile.ts`

## ⚙️ Pré-requisitos

- Node.js (recomenda-se versão 16+)
- npm ou pnpm

## 📦 Instalação e execução (local)

1. Clone o repositório

```bash
git clone https://github.com/vauxgomes/node-auth-system-ts.git
cd node-auth-system-ts
```

2. Instale dependências

```bash
npm install
```

3. Configure variáveis de ambiente

Copie o arquivo `.env.example` para `.env` na raiz do projeto e preencha os valores das variáveis.

4. Rode migrações (se necessário)

```bash
# usando o script do package.json
npm run knex migrate:latest

# para criar seeds
npm run knex seed:run
```

5. Inicie em modo dev

```bash
npm run dev
```

Para produção:

```bash
npm run build
npm start
```

## Estrutura do projeto

Uma visão geral dos diretórios principais:

- `src/` — código fonte TypeScript
  - `controllers/` — controllers organizados por domínio
  - `services/` — regras de negócio
  - `repositories/` — abstração de acesso a dados (ex.: Knex)
  - `routes/` — rotas da API
  - `database/` — conexão e arquivos do banco (ex.: sqlite / migrations)
  - `dtos/` — interfaces/DTOs
  - `middlewares/` — middleware (ex.: autenticação)

## Exemplo de endpoints (padrão do projeto)

- POST /auth/login — autenticação (retorna token)
- POST /users — criação de usuário

Consulte `src/routes/*` e `src/controllers/*` para a definição completa.

## ✅ Padrão de commits (Conventional Commits — versão resumida)

Recomenda-se usar o padrão de Conventional Commits para mensagens de commit, por exemplo:

Tipo(scope): descrição curta

Tipos mais usados:

- feat: Uma nova funcionalidade
- fix: Correção de bug
- docs: Mudanças na documentação
- style: Formatação, espaçamento, ponto-e-vírgula — sem alteração no código (sem mudança de lógica)
- refactor: Mudança de código que não adiciona funcionalidade nem corrige bug
- perf: Mudança para melhorar performance
- test: Adição/ajuste de testes
- chore: Mudanças no build, configuração, tarefas auxiliares, etc

Exemplos:

```text
feat(auth): adicionar suporte a refresh-token
fix(users): corrigir validação de email duplicado
docs(readme): atualizar instruções de setup
chore(deps): atualizar dependências
```

Use escopo (`(scope)`) quando fizer sentido — por exemplo `auth`, `users`, `db` — para deixar o histórico mais claro.

Para projetos públicos maiores, combine convencionals commits com uma ferramenta de lint (ex.: commitlint) e um gancho de commit (husky) para garantir consistência.