# Cyber City

Feito com Docker, SASS e ES6/Typescript.

1) Rode **docker-compose up**, antes de tudo. Irá retornar um erro, relacionado ao npm.

1) Então, use **docker-compose run node npm install**. Em caso de erros, instale e use yarn.

2) Finalmente, **docker-compose up**.

## Produção

Se o Docker estiver rodando: **docker-compose exec node npm run build**.
Caso contrário: **docker-compose run node npm run build**.

## Observações

- Ao rodar um projeto com dependências como Sass e Pug sem instalação das mesmas, elas serão inclusas automaticamente durante a execução. No entanto, a instalação manual continua sendo boa prática.

- A porta padrão está definida como **localhost:1234**. Para alterar a mesma, aponte o arquivo de entrada junto da opção **-p <numero da porta>**.

- Caso surja um erro no console relacionado a WebSocket, aponte o arquivo de entrada junto da opção **--no-hmr**.

## Solução de erros

- 'css-loader.js' não encontrado: delete as pastas '.cache' e 'dist', levante novamente. Caso não resolva, remova 'node_modules' e reinstale.
Se ainda existir: https://github.com/parcel-bundler/parcel/issues/2936#issuecomment-620025705.

- O Parcel não permite definir pastas para cada tipo de arquivo em '.dist' out-of-the-box. É necessário um plugin "parcel-plugin-custom-dist-structure",
no entanto se estiver com '"development": true' ele causa conflitos com o comando "--hmr-port numero-da-porta"; logo para rodar a estrutura na primeira vez, remover essa parte e recolocar depois.
Pode ajudar: https://github.com/VladimirMikulic/parcel-plugin-custom-dist-structure/issues/9
