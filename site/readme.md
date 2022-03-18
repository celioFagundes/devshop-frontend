# DevShop site frontend em NextJS
- Acesse o repositório da API Backend do DevShop [API DevShop](https://github.com/celioFagundes/devshop-api)
- Acesse o repositório do Painel administrativo do DevShop [Painel Administrativo](https://github.com/celioFagundes/devshop-frontend/tree/master/panel).

### Pagina inicial do DevShop
![localhost_3002_ (1)](https://user-images.githubusercontent.com/77676047/159062488-48d4383c-1957-46b9-8e78-54184dedaa08.png)

### Sobre o projeto
  Projeto DevShop , criação e gerenciamento de produtos utilizando NextJs, NestJs, Typescript, Javascript, TypeORM ,Postgres e AWS S3. Este é um projeto FullStack que conta com  3 repositórios :
  - Site DevShop, com exibição dos produtos, marcas e categorias cadastrados, com opções de escolha dos produtos de acordo com o tamanho ou tensão elétrica
  - Uma API Backend desenvolvida com NestJs, Typescript , GraphQL, TypeORM , Postgres e AWS S3.
    - Acesse o repositório da API Backend do DevShop [API DevShop](https://github.com/celioFagundes/devshop-api)
    
  - Painel administrativo desenvolvido com NextJs para criação e gerenciamento dos produtos, incluindo cadastro e validação dos usuários que possuem permissão para usar o painel utilizando JWT Tokens e inserção de imagens dos produtos e marcas utilizando AWS S3.  
    - Acesse o repositório do Painel administrativo do DevShop [Painel Administrativo](https://github.com/celioFagundes/devshop-frontend/tree/master/panel).

### Sobre o site DevShop
 Desenvolvido com NextJs e GraphQL, consiste na exibição dos produtos,categorias e e marcas cadastradas banco de dados Postgres atraves do painel administrativo. Permite a visualização de todos os produtos cadastrados na página inicial, exibição dos produtos filtrados pela categoria ou marca na página de categoria/marca associada e a
 exibição do produto na página de detalhes do produto, onde é exibido todas as imagens e é feita a seleção da cor, tamanho e voltagem do produto e o mesmo pode ser adicionado/removido ao carrinho. Possui duas formas de controlar o carrinho, através do cabeçalho pelo componente CartPreview, onde é possivel a alteração de quantidade do produto e navegação para a página do produto, ou pela página do carrinho , onde é mostrado todos  os produtos existentes no carrinho  e os detalhes sobre o preço dos produtos e preço total.
  
### Funcionalidades
- Criar, deletar e editar um mes, criando movimentações e previsoes de entrada e saida
- Sistema de login e autenticação utilizando Firebase authentication
- Banco de dados utilizando Firebase Real time Database
- Comunicação com o banco de dados utilizandoa SDK9 modular do firebase
- Context API usada para validação do usuario
- Sistema de login e criação de um novo usuario
- Design criado com Bootstrap e React Bootstrap

## Pre requisitos

- NodeJs
- Yarn ``npm install --global yarn``
- React ``npm install -g create-react-app ``
- Bootstrap and React-bootstrap``npm install react-bootstrap@next bootstrap@5.1.1
- Firebase ``npm install firebase``


