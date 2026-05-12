# Portfolio Profissional

Portfolio profissional com **frontend em React + Vite** e **backend em Node.js + Express**.

## Estrutura
- `client/`: frontend React
- `server/`: backend Node.js

## Funcionalidades
- Pagina de portfolio com secoes separadas em componentes
- Dados do perfil organizados em arquivos proprios
- Formulario de contato conectado ao backend
- API com validacao basica e tratamento de erros

## Desenvolvimento
1. Copie `server/.env.example` para `server/.env` e preencha as credenciais SMTP.
2. Em um terminal, rode `npm --prefix server run dev`.
3. Em outro terminal, rode `npm --prefix client run dev`.
4. Acesse a URL exibida pelo Vite, normalmente `http://127.0.0.1:5173/`.

No desenvolvimento, o Vite encaminha chamadas de `/api` para `http://127.0.0.1:3001`. Em producao, defina `VITE_API_URL` no ambiente do frontend quando a API estiver em outro dominio.

## Deploy no Render
Voce pode publicar como um unico **Web Service** no Render:

- Build command: `npm run build`
- Start command: `npm start`
- Root directory: deixe vazio, usando a raiz do repositorio

Nesse formato, o Express serve o frontend gerado em `client/dist` e a API no mesmo dominio. O formulario chama `/api/contact`, entao nao precisa configurar `VITE_API_URL`.

Configure tambem as variaveis de ambiente do backend no Render:

- `EMAIL_HOST`
- `EMAIL_PORT`
- `EMAIL_SECURE`
- `EMAIL_USER`
- `EMAIL_PASS`
- `EMAIL_FROM`
- `EMAIL_TO`

Se voce mantiver frontend e backend como servicos separados no Render, defina `VITE_API_URL` no servico do frontend com a URL publica do backend, por exemplo `https://seu-backend.onrender.com`, e faca um novo deploy do frontend depois de alterar essa variavel.
