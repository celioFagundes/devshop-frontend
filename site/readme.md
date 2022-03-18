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

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
Desenvolvido com NextJs e GraphQL, consiste na exibição dos produtos,categorias e e marcas cadastradas no banco de dados Postgres atraves do painel administrativo. </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
Permite a visualização de todos os produtos cadastrados na página inicial, exibição dos produtos filtrados pela categoria ou marca na página de categoria/marca associada e a exibição do produto na página de detalhes do produto, onde é exibido todas as imagens e é feita a seleção da cor, tamanho e voltagem do produto e o mesmo pode ser adicionado/removido ao carrinho. 
</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Possui duas formas de controlar o carrinho, através do cabeçalho pelo componente CartPreview, onde é possivel a alteração de quantidade do produto e navegação para a página do produto, ou pela página do carrinho , onde é mostrado todos  os produtos existentes no carrinho  e os detalhes sobre o preço dos produtos e preço total.

### Funcionalidades
- Visualização dos produtos, marcas e categorias cadastrados no banco de dados
- Filtragem dos produtos por marca ou categoria
- Pagina detalhada do produto com todas as informações do mesmo: nome, marca, descrição, imagens, preço, cores, tamanhos, tensão elétrica, estoque, peso
- Seleção de variações do produto. como tamanho para roupas(exemplo: P,M,G, 38,40) ou tensão elétrica para eletrônicos(110V, 120V ou Bivolt)
- Gerenciamento do carrinho pelo cabeçalho atraves do componente CartPreview, que sincroniza entre as abas abertas do site após alteração nos itens selecionados
- Gerenciamento do carrinho na página do carrinho, onde mostra todos os produtos selecionados e os detalhes de preços da compra

### Tecnologias utilizadas
- [NextJs](https://nextjs.org/) 
- [GraphQl](https://graphql.org/) 
- [useSWR](https://swr.vercel.app/)
- [TailwindCSS](https://tailwindcss.com/)
- [Embla Carousel](https://www.embla-carousel.com/)
- [Sharp](https://github.com/lovell/sharp)


