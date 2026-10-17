const dados = {
    "parques": [
    {
      "id": 1,
      "nome": "Parque Nacional da Chapada dos Veadeiros",
      "estado": "Goiás",
      "bioma": "Cerrado",
      "areaHa": 65514,
      "anoCriacao": 1961,
      "melhorEpoca": "Maio a setembro",
      "destaque": true,
      "descricao": "Cachoeiras, cânions e cristais no coração do Cerrado.",
      "conteudo": "Reúne paisagens de cânions, cachoeiras de águas cristalinas e planaltos de mais de 1.600 m. É Patrimônio Mundial da UNESCO e ideal para trilhas.",
      "imagemPrincipal": "assets/img/chapadaveadeiros.jpg",
      "fotos": [
        { "titulo": "Salto do Rio Preto", "imagem": "assets/img/salto-rio-preto.jpg" },
        { "titulo": "Vale da Lua", "imagem": "assets/img/vale-lua.jpg" },
        { "titulo": "Cânion", "imagem": "assets/img/canion-chapada.webp" }
      ]
    },
    {
      "id": 2,
      "nome": "Parque Nacional de Foz do Iguaçu",
      "estado": "Paraná",
      "bioma": "Mata Atlântica",
      "areaHa": 185262,
      "anoCriacao": 1939,
      "melhorEpoca": "Março a novembro",
      "destaque": true,
      "descricao": "Um dos maiores conjuntos de cataratas do planeta.",
      "conteudo": "Abriga as Cataratas do Iguaçu, com 275 quedas d'água, cercadas por floresta atlântica preservada e rica em fauna, como quatis e tucanos.",
      "imagemPrincipal": "assets/img/fozdoiguacu.jpg",
      "fotos": [
        { "titulo": "Garganta do Diabo", "imagem": "assets/img/garganta-iguacu.jpg" },
        { "titulo": "Passarela das Cataratas", "imagem": "assets/img/passarela-iguacu.webp" },
        { "titulo": "Tucano", "imagem": "assets/img/tucano.jpg" }
      ]
    },
    {
      "id": 3,
      "nome": "Parque Nacional dos Lençóis Maranhenses",
      "estado": "Maranhão",
      "bioma": "Restinga e dunas",
      "areaHa": 156562,
      "anoCriacao": 1981,
      "melhorEpoca": "Julho a setembro",
      "destaque": true,
      "descricao": "Dunas de areia branca com lagoas de água azul.",
      "conteudo": "Entre junho e setembro as chuvas formam lagoas cristalinas entre as dunas, criando uma das paisagens mais singulares do Brasil.",
      "imagemPrincipal": "assets/img/lencois-maranhenses.jpg",
      "fotos": [
        { "titulo": "Lagoa Azul", "imagem": "assets/img/lagoa-azul.jpg" },
        { "titulo": "Dunas ao pôr do sol", "imagem": "assets/img/duna-por-do-sol.jpg" },
        { "titulo": "Rio Preguiças", "imagem": "assets/img/rio-preguicas.jpg" }
      ]
    },
    {
      "id": 4,
      "nome": "Parque Nacional de Fernando de Noronha",
      "estado": "Pernambuco",
      "bioma": "Marinho e insular",
      "areaHa": 11270,
      "anoCriacao": 1988,
      "melhorEpoca": "Agosto a janeiro",
      "destaque": false,
      "descricao": "Arquipélago de praias paradisíacas e mergulho de classe mundial.",
      "conteudo": "Santuário de tartarugas e golfinhos-rotadores, com praias eleitas entre as mais belas do mundo e visitação controlada.",
      "imagemPrincipal": "assets/img/fernando-noronha.jpg",
      "fotos": [
        { "titulo": "Baía do Sancho", "imagem": "assets/img/baia-sancho.jpg" },
        { "titulo": "Golfinhos", "imagem": "assets/img/golfinho-noronha.jpg" },
        { "titulo": "Morro do Pico", "imagem": "assets/img/morro-pico-noronha.jpg" }
      ]
    },
    {
      "id": 5,
      "nome": "Parque Nacional do Itatiaia",
      "estado": "Rio de Janeiro",
      "bioma": "Mata Atlântica",
      "areaHa": 28000,
      "anoCriacao": 1937,
      "melhorEpoca": "Abril a outubro",
      "destaque": false,
      "descricao": "Primeiro parque nacional do Brasil, com picos e campos de altitude.",
      "conteudo": "Criado em 1937, tem as Agulhas Negras (2.791 m), trilhas, cachoeiras e grande biodiversidade de aves.",
      "imagemPrincipal": "assets/img/itatiaia.jpg",
      "fotos": [
        { "titulo": "Agulhas Negras", "imagem": "assets/img/agulhas-negras-itatiaia.jpeg" },
        { "titulo": "Cachoeira Véu da Noiva", "imagem": "assets/img/cachoeira-veu-itatiaia.jpeg" },
        { "titulo": "Campos de altitude", "imagem": "assets/img/campo-itatiaia.jpeg" }
      ]
    }
  ],
  "autor": {
    "nome": "Lucas Rezende Silva",
    "curso": "Ciências da Computação — PUC Minas",
    "descricao": "Estudante apaixonado por tecnologia e desenvolvimento de programas. Este site apresenta alguns dos mais belos parques nacionais do Brasil.",
    "foto": "https://avatars.githubusercontent.com/u/316929749?v=4"
  }
};

const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const fmt = n => n.toLocaleString('pt-BR');

function montarIndex() {
  const dest = dados.parques.filter(p => p.destaque);

  document.getElementById('indicadores').innerHTML = dest.map((p, i) =>
    `<button type="button" data-bs-target="#carrossel" data-bs-slide-to="${i}" class="${i === 0 ? 'active' : ''}" aria-label="Slide ${i + 1}"></button>`).join('');

  document.getElementById('slides').innerHTML = dest.map((p, i) => `
    <div class="carousel-item ${i === 0 ? 'active' : ''}">
      <img src="${p.imagemPrincipal}" alt="${esc(p.nome)}">
      <div class="carousel-caption">
        <h5><a href="detalhes.html?id=${p.id}">${esc(p.nome)}</a></h5>
        <p class="mb-0">${esc(p.descricao)}</p>
      </div>
    </div>`).join('');

  document.getElementById('cards').innerHTML = dados.parques.map(p => `
    <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
      <div class="card card-parque border-0 shadow-sm">
        <a href="detalhes.html?id=${p.id}">
          <img src="${p.imagemPrincipal}" class="card-img-top" alt="${esc(p.nome)}">
          <div class="card-body">
            <h5 class="card-title fs-6">${esc(p.nome)}</h5>
            <p class="card-text small text-muted">${esc(p.descricao)}</p>
            <span class="badge text-bg-success">${esc(p.estado)}</span>
            ${p.destaque ? '<span class="badge text-bg-warning">Destaque</span>' : ''}
          </div>
        </a>
      </div>
    </div>`).join('');

  const a = dados.autor;
  document.getElementById('autorFoto').src = a.foto;
  document.getElementById('autorInfo').innerHTML =
    `<h4>${esc(a.nome)}</h4><p class="text-success fw-semibold">${esc(a.curso)}</p><p class="mb-0">${esc(a.descricao)}</p>`;
}

function montarDetalhes() {
  const id = parseInt(new URLSearchParams(location.search).get('id'));
  const p = dados.parques.find(x => x.id === id);

  if (!p) {
    document.getElementById('conteudo').innerHTML =
      '<div class="alert alert-warning">Parque não encontrado. <a href="index.html">Voltar</a></div>';
    return;
  }

  document.title = p.nome;

  document.getElementById('info').innerHTML = `
    <div class="row g-4">
      <div class="col-12 col-md-5"><img class="info-img" src="${p.imagemPrincipal}" alt="${esc(p.nome)}"></div>
      <div class="col-12 col-md-7">
        <h1 class="h3">${esc(p.nome)}</h1>
        <p class="lead fs-6">${esc(p.descricao)}</p>
        <p>${esc(p.conteudo)}</p>
        <dl class="ficha row mb-0">
          <dt class="col-5 col-sm-4">Estado</dt><dd class="col-7 col-sm-8">${esc(p.estado)}</dd>
          <dt class="col-5 col-sm-4">Bioma</dt><dd class="col-7 col-sm-8">${esc(p.bioma)}</dd>
          <dt class="col-5 col-sm-4">Área</dt><dd class="col-7 col-sm-8">${fmt(p.areaHa)} hectares</dd>
          <dt class="col-5 col-sm-4">Criação</dt><dd class="col-7 col-sm-8">${p.anoCriacao}</dd>
          <dt class="col-5 col-sm-4">Melhor época</dt><dd class="col-7 col-sm-8 mb-0">${esc(p.melhorEpoca)}</dd>
        </dl>
      </div>
    </div>`;

  document.getElementById('fotos').innerHTML = p.fotos.map(f =>
    `<figure><img src="${f.imagem}" alt="${esc(f.titulo)}"><figcaption>${esc(f.titulo)}</figcaption></figure>`).join('');
}

if (document.getElementById('carrossel')) montarIndex();
if (document.getElementById('info')) montarDetalhes();