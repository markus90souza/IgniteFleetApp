<h1 align="center">
    <img alt="Ignite Fleet" title="Ignite Fleet" src=".github/logo.svg" width="100px" height="100px" />
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
  <img alt="Happy" src=".github/cover.png" width="100%">
</p>

## Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Realm DB](https://realm.io/)
- [Mongo DB Atlas](https://www.mongodb.com/atlas/database)
- [Google - Maps e Autenticação ](https://console.cloud.google.com/)

## 💻 Projeto

O IgniteFleet é uma aplicação que registra o ponto de entrada de um veiculo e a
saida,

## 🔖 Layout

Nos links abaixo você encontra o layout do projeto web e também do mobile. Lembrando que você precisa ter uma conta no [Figma](http://figma.com/) para acessá-lo.

- [Layout Mobile](<https://www.figma.com/file/JcISrx1oUFJm9UiKSXR39Q/Ignite-Fleet-(Community)>)

## Funcionalidades 🚀

Algumas funcionalidades do sistema

### Funcionalidades 1.0 (MVP):

- [ ] **Autenticação**

  - Autenticar o usuario usando uma conta google.
  - Buscar informações do usuario como nome e foto de perfil

- [ ] **Veiculo | Entrada e Saida**

  - Cadastrar placa do veiculo e descrição
  - Registrar chegada do veiculo no ponto final
  - Listar historico de Entrada e saida de veiculos
  - Deletar Historico do veiculos

- [ ] **Sincronização de Informações - (Offline)**

  - Armazenar dados do veiculo no dispositivo do usuario
  - Sincronizar dados com a base de dados remota

## Executando o projeto

Abaixo seguem as instruções para você executar o projeto na sua máquina.

Comece clonando o repositório e instalando suas dependências:

```sh
git clone https://github.com/markus90souza/IgniteFleetApp

cd IgniteFleetApp

cp .env.example .env

npm install

```

### Mobile

Para executar o app mobile do IgniteFleet utilizamos o Expo, uma ferramenta incrível da comunidade React Native. Além do Expo, é necessário que você utilize algum emulador local ou um dispositivo físico pra visualizar a aplicação.

> Você pode instalar o Expo e os emuladores seguindo [esse guia](https://react-native.rocketseat.dev/).

Após configurar o ambiente mobile, você pode abrir o emulador e executar o projeto de acordo com a plataforma que estiver utilizando:

```sh
# Caso esteja usando Android
npx expo run:android

# Caso esteja usando iOS
npx expo run:ios

# Caso esteja usando um dispositivo físico
npm start
```

### Extrutura de pastas e arquivos

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
