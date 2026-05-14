# Portfólio Profissional - José Yure

Este projeto é o meu portfólio pessoal como desenvolvedor de software. Mais do que uma página para reunir links, eu quis construir uma experiência que mostrasse um pouco da minha forma de pensar: organização, cuidado visual, clareza na comunicação e uma base técnica simples de manter.

A proposta foi criar um portfólio full stack com frontend em React e backend em Node.js, reunindo minha trajetória, tecnologias, projetos, currículo e um formulário de contato funcional.

## O que eu quis demonstrar com este projeto

Ao desenvolver este portfólio, meu objetivo foi mostrar que consigo ir além de uma página estática. Eu queria uma aplicação com estrutura real de projeto, separação entre frontend e backend, conteúdo bem organizado e um fluxo de contato funcionando de ponta a ponta.

Alguns pontos que trabalhei com mais intenção:

- uma interface com identidade própria, responsiva e confortável de navegar;
- conteúdo em português e inglês, pensando também em oportunidades fora do Brasil;
- tema claro e escuro com preferência salva no navegador;
- seções organizadas para apresentar perfil, stack, projetos, experiência e contato;
- formulário conectado a uma API própria, com validação e envio de e-mail;
- deploy no Render servindo frontend e backend no mesmo domínio.

## Visão geral

O projeto está dividido em duas partes principais:

- `client/`: aplicação React criada com Vite;
- `server/`: API em Node.js com Express.

No ambiente de produção, o backend também serve os arquivos gerados do frontend. Isso permite publicar o portfólio como um único Web Service no Render, mantendo o site e a API no mesmo domínio.

## Principais funcionalidades

- Página inicial com apresentação profissional e links de contato.
- Seção "Sobre mim" com resumo da minha formação e foco atual.
- Lista de tecnologias separadas por área: backend, dados, banco de dados, frontend e ferramentas.
- Projetos em destaque, incluindo este portfólio e projetos orientados a dados.
- Linha de experiência profissional e acadêmica.
- Alternância entre português e inglês.
- Alternância entre tema claro e escuro.
- Formulário de contato integrado ao backend.
- Envio de e-mail com Nodemailer.
- Validação básica dos dados enviados pelo formulário.
- Tratamento de erros na API.

## Tecnologias utilizadas

**Frontend**

- React
- Vite
- JavaScript
- CSS

**Backend**

- Node.js
- Express
- Nodemailer
- CORS

**Deploy e organização**

- Render
- Git e GitHub
- Estrutura full stack com `client` e `server`

## Decisões técnicas

Uma das escolhas principais foi manter o conteúdo do site separado da estrutura visual. Os textos, projetos, experiências e informações do perfil ficam organizados em arquivos próprios, o que facilita atualizar o portfólio sem precisar mexer diretamente na lógica dos componentes.

Também optei por criar o formulário de contato com uma API própria, em vez de usar apenas um link externo. Isso me permitiu trabalhar validação, tratamento de erro, configuração de variáveis de ambiente e envio de e-mail no backend.

No deploy, escolhi um formato em que o Express serve tanto a API quanto o frontend gerado pelo Vite. Para um portfólio pessoal, isso simplifica a publicação e evita a necessidade de manter dois serviços separados.
