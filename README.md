<h1 align="center">
<br>
  <img src="https://i.ibb.co/S39DWgL/LOGO-ADVEC-1-1-1.png" alt="Landing page">
</h1>

<p align="center">Uma plataforma de vídeos para inserir novos membros nas atividades da igreja Assembleia de Deus Vitória em Cristo de Campina Grande</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

<div align="center">
  <img src="https://i.ibb.co/7znxX2t/Page-Home1.png" alt="Home Page" >
  <img src="https://i.ibb.co/rkvSrw9/Page-Home.png" alt="Departaments Page" >
  <img src="https://i.ibb.co/Gcbdqt3/Page-Admin.png" alt="Departaments Admin Page" >
  <img src="https://i.ibb.co/ysnxmFT/Page-Lesson.png" alt="Lessons Page" >
</div>

<hr />

## Visão Geral

Esta é uma aplicação web que permite aos membros da Assembleia de Deus Vitória em Cristo de Campina Grande realizarem seu cadastro na plataforma, vincularem-se com departamentos e assistirem vídeos tutoriais que ensinam a realizar atividades que são realizadas nas obras dos departamentos da igreja.

## Tecnologias Utilizadas

- **NodeJS**: Motor v8 que executa a api na parte do servidor do serviço da advec
- **Prisma**: ORM que irá fazer toda a lógica de mapeamento dos objetos javascript para as tabelas do banco de dados
- **PostgreSQL**: Banco de dados que serve a plataforma
- **ReactJS**: Framework JavaScript para construção de interfaces singepage de usuário
- **NextJS**: Estrutura de código para web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos
- **Shadcn UI**: Coleção de componentes reutilizáveis e personalizáveis que permite a padronização no design da aplicação
- **Typescript**: Linguagem de programação que oferece tipagem estática para o Javascript

## Funcionalidades

- **Cadastro de Usuário**: Permite criar uma nova conta de usuário.
- **Login de Usuário**: Permite que um usuário existente faça login.
- **Associação com departamentos**: Permite o usuário solicitar vínculo com departamentos, o lider terá de aceitar a solicitação e o usuário terá acesso aos conteúdos de aulas daquele departamento
- **Aulas**: Um usuário poderá acessar todas as vídeo aulas e conteúdos disponíveis de um departamento

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/pelucs/advec.git
    ```

## Web
    
2. Navegue até o diretório do projeto web:
    ```bash
    cd web
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Execute a aplicação
   ```bash
   npm start
   ```

## Api
    
2. Navegue até o diretório do servidor:
    ```bash
    cd api
    ```
3. Instale as dependências:
   
   Configure o arquivo .env conforme a seção [Configuração](#configuração)
    ```bash
    npm install
    npx prisma migrate dev --name init
    ```
5. Execute a aplicação
   ```bash
   npm start
   ```

## Configuração

Crie um arquivo `.env` na raiz do projeto e configure as seguintes variáveis de ambiente, se necessário:

```
DATABASE_URL="<HOST>:<PORT>"
```

## Contribuição

Contribuições são bem-vindas! Por favor, abra um pull request ou relate um problema.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](https://opensource.org/licenses/MIT) para mais detalhes.

## Contato

Para mais informações, entre em contato pelo email: [dhouglasbn@gmail.com](mailto:dhouglasbn@gmail.com)
