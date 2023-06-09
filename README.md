# Construção da API

## Processo de desenvolvimento

Primeiro se inicia instalando as dependências necessárias e realizando as configurações do ambiente.

Inicialização do arquivo package.json

```bash
npm init -y
```

Instalação das dependências iniciais

```bash
npm i express
```

```bash
npm i mongoose
```

```bash
npm i --save-dev typescript
```

Instalação das tipagens das frameworks para o uso delas com o typescript.

```bash
npm i --save-dev @types/express
```

```bash
npm i --save-dev @types/mongoose
```

Para a execução do ambiente pode-se instalar o ts-node-dev, ele funciona de forma semelhante ao nodemon do typescript, ou seja, ele aguarda por alterações nos arquivos e reinicia dinâmicamente a aplicação com o servidor.

```bash
npm i --save-dev ts-node-dev
```
