# Firebase Hosting:

1 - Colocar o seguinte código depois de "production" no angular.json (linha 35):
"fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ],
2 - Criar uma conta (caso necessário) no Firebase hosting e criar um projeto
3 - Criar pasta environments com 3 ficheiros: environment.keys.ts | environment.prod.ts | environment.ts
4 - Adicionar Firebase á aplicação.
    4.1 - correr "npm install firebase" no cmder
    4.2 - colocar a configuração do firebase no ficheiro environtment.ts e environment.prod.ts (com a exceção da key, que é colocada em environment.keys.ts)
    4.3 - Adicionar uma linha de código á configuração onde indica production: false (environment.ts) ou production: true (environment.prod.ts)
    4.4 - Exportar a chave de API para ambos os ficheiros anteriores
5 - Instalar a CLI do Firebase (Se ainda não foi feito).
6 - Colocar 2 comandos novos em package.json:     "serveprod": "ng serve --configuration production",
                                                    "buildprod": "ng build --configuration production"
7 - Fazer login no firebase com o Cmder (firebase login) (Se ainda não foi feito)
8 - Fazer a inicialização (firebase init) e escolher Hosting (Colocar o output como dist/starting/brower(<-exemplo))
9 - Correr o comando "npm run buildprod" para fazer uma build da aplicação
10 - Realizar o deploy