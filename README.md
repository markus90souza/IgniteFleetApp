<h1 align="center">
    <img alt="Happy" title="Happy" src=".github/logo.svg" />
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=15C3D6&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=15C3D6&labelColor=000000">
</p>

<br>

<p align="center">
  <img alt="Happy" src=".github/happy.png" width="100%">
</p>

## Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Realm DB](https://realm.io/)
- [Mongo DB Atlas](https://www.mongodb.com/atlas/database)

## 💻 Projeto

O Happy é uma aplicação que conecta pessoas à casas de acolhimento institucional para fazer o dia de muitas crianças mais feliz 💜

## 🔖 Layout

Nos links abaixo você encontra o layout do projeto web e também do mobile. Lembrando que você precisa ter uma conta no [Figma](http://figma.com/) para acessá-lo.

- [Layout Mobile](https://www.figma.com/file/X27FfVxAgy9f5IFa7ONlph/Happy-Mobile)

## Funcionalidades 🚀

Até o momento, levando em consideração o prazo de 2 semanas _(Due: 11/04/2023)_, listamos algumas funcionalidades básicas que devemos entregar. Caso sobre tempo, podemos trabalhar em funcionalidades secundárias, _backlog_.

### Funcionalidades 1.0 (MVP):

- [ ] **Autenticação**
      Autenticar o usuario usando uma conta google.

- [ ] **Visualizar meu ingresso**
      Uma vez que tenha o código localizador do ingresso emitido pelo Sympla, o usuário poderá conectar seu ingresso à sua conta no app e, dessa forma, terá acesso pelo app.

- [ ] **Compartilhar ingresso nas redes sociais**
      Como uma forma de hypar o evento, o usuário poderá gerar uma imagem - _thumbnail_ com sua foto para divulgar nas redes! `#VouNaRSXP! 🚀💜`

### Funcionalidades 2.0:

- [ ] **Autenticação**
- [ ] **Sistema de convites**
  - Desconto p/ convidar
  - Brindes p/ quem mais convidar
- [ ] **Countdown pro evento**
- [ ] **Dados gerais do evento**
  - Localização
  - Data & Hora
- [ ] **FAQ** - (_Frequently Asked Questions / Perguntas Frequentes_)

- [ ] **Feed de notícias**
      Criar algo tipo um Twitter interno para evento. Tal aba será dedicada aos palestrantes ou organizadores para enviar avisos para os membros.

- [ ] **Lista dos palestrantes**

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by Rocketseat :wave: [Participe da nossa comunidade!](https://discordapp.com/invite/gCRAFhc)

<!--START_SECTION:footer-->

<br />
<br />

<p align="center">
  <a href="https://discord.gg/rocketseat" target="_blank">
    <img align="center" src="https://storage.googleapis.com/golden-wind/comunidade/rodape.svg" alt="banner"/>
  </a>
</p>

<!--END_SECTION:footer-->

![image](https://user-images.githubusercontent.com/50504050/228393842-d5ebe930-d3ae-4fc8-a18a-f1d91a2b98e2.png)

# Rocketseat Experience 2023 - Mobile App

Repositório do app construído pela comunidade para o [maior evento de programação do Brasil](https://www.rocketseat.com.br/eventos/rsxp)! :brazil:

## Executando o projeto

Abaixo seguem as instruções para você executar o projeto na sua máquina.

Comece clonando o repositório e instalando suas dependências:

```sh
git clone https://github.com/diego3g/rsxp-2023
cd rsxp-2023
npm install
```

### Back-end

O back-end desse projeto é construído em Node.js, mais especificamente sua versão LTS.

> Você pode instalar o Node.js seguindo [esse guia](https://efficient-sloth-d85.notion.site/Instalando-o-Node-js-d40fdabe8f0a491eb33b85da93d90a2f).

Além do Node.js, utilizamos o banco de dados PostgreSQL e **recomendamos** o uso do Docker para executar o banco em sua máquina.

> Você pode instalar o Docker seguindo [esse guia](https://efficient-sloth-d85.notion.site/Instalando-o-Docker-6290d9994b0b4555a153576a1d97bee2).

Nesse projeto, usamos o serviço de autenticação [Clerk](https://clerk.com/), e você precisará configurá-lo para rodar o projeto em sua máquina.

> Você pode configurar o Clerk seguindo [esse guia](./docs/getting-started-with-clerk.md).

Após instalar o Node.js e o Docker, vamos acessar a pasta do projeto back-end, subir o serviço do banco de dados, configurar nossas variáveis ambiente e, então, subir o servidor HTTP.

```sh
cd apps/server

# Copiar o arquivo com os dados de conexão e demais variáveis ambiente
cp .env.example .env

# Subir o serviço do PostgreSQL via docker (caso não tenha instalado o PostgreSQL em seu computador)
docker-compose up -d

# Rodar as migrations do prisma
npx prisma migrate dev

# Subir o servidor HTTP
npm run start:dev
```

### Mobile

Para executar o app mobile do RS/XP utilizamos o Expo, uma ferramenta incrível da comunidade React Native. Além do Expo, é necessário que você utilize algum emulador local ou um dispositivo físico pra visualizar a aplicação.

> Você pode instalar o Expo e os emuladores seguindo [esse guia](https://react-native.rocketseat.dev/).

Após configurar o ambiente mobile, você pode abrir o emulador e executar o projeto de acordo com a plataforma que estiver utilizando:

```sh
# Caso esteja usando Android
npm run android

# Caso esteja usando iOS
npm run ios

# Caso esteja usando um dispositivo físico
npm start
```

```plainText
Ignite Fleet
.
.
|-- android                    # Native android files
|-- ios                        # Native ios files
|-- assets                     # Icons and Splash assets
|-- src                        # Source files
│    |-- @types                # Contains all global definitions of types and interfaces
│    |-- assets                # Contains Js bundles assets. e.g: icons, images etc...
|    |-- components            # Components do app
│    |-- libs                  # Arquivos de configuração de bibliotecas
|    |-- routes                # Navegação do app
|    |-- screens               # Telas do app
|    |-- theme                 # Tema de cores/Tamanhos/Fontes
|    |-- utils                 # Arquivo de funções uteis
|- .env-example                # Variaveis de ambiente
|- .eslint.json                # Configurações de lint do app
|- .gitignore                  # Arquivos ignorados pelo git
|- app.json                    # Configurações do app
|- App.tsx                     # Arquivo inicial do nosso app
|- babel.config.js
|- index.js                    # Arquivo principal do app
|- metro.config.js
|- package.json
|- README.md
|- tsconfig.json
```
