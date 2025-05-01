# 🎧 API-Podcast

Uma API simples para organização de episódios de podcast, desenvolvida com TypeScript puro, sem o uso de frameworks.

## 🚀 Funcionalidades

- Listagem de todos os episódios disponíveis.
- Filtragem de episódios com base em parâmetros específicos.

## 🛠️ Tecnologias Utilizadas

- Node.js (módulo `http`)
- TypeScript
- Variáveis de ambiente com `.env`

## 📁 Estrutura do Projeto

```
API-Podcast/
├── src/
│   ├── controllers/
│   │   └── podscasts-controller.ts
│   ├── routes/
│   │   └── routes.ts
│   ├── server.ts
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── tsconfig.json
```

## 📦 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/jonathasoficial/API-Podcast.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd API-Podcast
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto e defina a porta desejada:
   ```env
   PORT=3000
   ```

## ▶️ Execução

Para iniciar o servidor em modo de desenvolvimento:
```bash
npm run dev
```

Para compilar o TypeScript e executar o servidor:
```bash
npm run build
npm start
```

## 📡 Endpoints

- `GET /episodes` - Retorna a lista de todos os episódios.
- `GET /episode?parametro=valor` - Retorna episódios filtrados com base no parâmetro fornecido.

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

