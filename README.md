Podcast Manager
Descrição
Podcast Manager é uma aplicação inspirada no estilo Netflix, onde os usuários podem centralizar e organizar episódios de podcasts, separados por categorias, tornando a experiência de encontrar e acessar podcasts mais fácil e intuitiva. O aplicativo suporta principalmente podcasts feitos em vídeo.

Funcionalidades
Listagem de Episódios por Categoria:
Os podcasts são organizados em categorias, facilitando a navegação e a descoberta. As categorias atualmente suportadas são:

Saúde
Fitness
Mentalidade
Humor
Filtragem de Episódios por Nome:
É possível pesquisar podcasts específicos ou episódios por nome, permitindo aos usuários encontrar rapidamente o que desejam ouvir.

Informações do Episódio:
Para cada episódio, serão fornecidas as seguintes informações:

Nome do podcast
Nome do episódio
Imagem de capa
Link para o episódio
Categoria associada
API
A aplicação utiliza uma API REST para retornar os dados dos podcasts e episódios em formato JSON.

Endpoint: /api/podcasts
Método: GET
Exemplo de Resposta (JSON):
json
Copiar código
[
  {
    "podcast_name": "Podcast Saúde",
    "episode_name": "Dicas de Bem-Estar",
    "cover_image": "https://exemplo.com/capa-bem-estar.jpg",
    "episode_link": "https://exemplo.com/dicas-de-bem-estar",
    "category": "Saúde"
  },
  {
    "podcast_name": "Humor Show",
    "episode_name": "Rir é o Melhor Remédio",
    "cover_image": "https://exemplo.com/capa-humor.jpg",
    "episode_link": "https://exemplo.com/rir-e-melhor",
    "category": "Humor"
  }
]
Como Usar
Clone este repositório:

bash
Copiar código
git clone https://github.com/seuusuario/podcast-manager.git
Instale as dependências:

bash
Copiar código
npm install
Inicie o servidor de desenvolvimento:

bash
Copiar código
npm start
Acesse o app em http://localhost:3000.
