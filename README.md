```markdown
# Adotei por Amor

Uma plataforma web voltada para a facilitação e fomento da adoção consciente de animais. O projeto foi arquitetado sob o conceito de SPA (Single Page Application) utilizando JavaScript Vanilla, promovendo uma experiência de usuário fluida, rápida e sem recarregamentos de página (refresh), integrada a uma identidade visual moderna e totalmente responsiva.

---

## Integrantes do Projeto

- Luiz Eduardo Lima Coimbra Vinhas
- Laryssa Eduarda Nascimento dos Santos
- Matheus de Andrade Pinheiro
- Vinicius Costa Simões Ferreira Lopes
- Pablo Henrique Ramos De Oliveira

---

## Funcionalidades Principais

- Mapeamento e Roteamento Dinâmico (SPA): Navegação instantânea e gerenciamento de ciclo de vida das telas (render e after_render) centralizados em um único ponto de entrada (main.js).
- Vitrine Institucional Reativa: Uma página inicial dinâmica que consome dados em tempo real para exibir o número exato de pets disponíveis na plataforma.
- Gerenciamento de Favoritos: Sistema integrado que permite favoritar e salvar animais de interesse diretamente no navegador utilizando a API do localStorage.
- Sessão e Dados do Usuário: Tela de perfil inteligente com renderização condicional que se adapta caso o usuário esteja logado ou precise se registrar.
- Design Moderno e Responsivo: Interface limpa construída com variáveis CSS (:root), Flexbox e CSS Grid com quebras automatizadas para dispositivos móveis (Mobile-First Core).

---

## Tecnologias Utilizadas

- Ambiente de Desenvolvimento: Vite (Build tool ultrarrápida para aplicações modernas)
- Linguagem Base: JavaScript (ES6+) em modo Vanilla (sem frameworks pesados)
- Estilização: CSS3 Avançado (Custom Properties, Flexbox, CSS Grid)
- Persistência de Dados Local: Web Storage API (localStorage)
- Biblioteca de Ícones: FontAwesome (via CDN e classes semânticas)

---

## Estrutura de Pastas do Projeto

```text
├── index.html          # Elemento contâiner principal (<div id="app">)
├── style.css           # Arquivo global de estilização, variáveis e responsividade
├── main.js             # Arquitetura do Roteador SPA e inicialização do sistema
└── src/
    ├── data.js         # Mock de dados e persistência dos pets cadastrados
    ├── home.js         # Módulo da tela inicial e pilares institucionais
    ├── listagem.js     # Módulo de exibição da galeria e filtros de busca dos pets
    ├── detalhes.js     # Módulo com informações expandidas de cada animal
    ├── cadastro.js     # Módulo do formulário de registro de usuários
    ├── perfil.js       # Módulo de perfil do tutor e painel de favoritos mini

```

---

## Configuração e Execução Local

Para clonar e rodar esta aplicação na sua máquina local, certifique-se de ter o Node.js instalado e siga os passos abaixo:

1. Clone o repositório:
```bash
git clone [https://github.com/seu-usuario/adoteiporamor.git](https://github.com/seu-usuario/adoteiporamor.git)

```


2. Entre na pasta do projeto:
```bash
cd adoteiporamor

```


3. Instale as dependências necessárias:
```bash
npm install

```


4. Inicie o servidor de desenvolvimento local (Vite):
```bash
npm run dev

```


5. Acesse a aplicação:
Abra o navegador e digite o endereço local indicado no seu terminal (geralmente http://localhost:5173/).

---

## Boas Práticas Implementadas

* Conventional Commits: Histórico do Git padronizado utilizando prefixos semânticos (ex: fix:, refactor:, style:) para facilitar o rastreamento e auditoria do código na branch develop e main.
* Clean Code no CSS: Substituição de valores soltos por variáveis no escopo :root, organizadas por seções e traduzidas de forma padronizada para o português.
* Segurança de Renderização: Uso do operador de encadeamento opcional do JavaScript (?.) ao vincular escutadores de eventos de clique em elementos dinâmicos, prevenindo quebras inesperadas no DOM.

---

## Licença

Este projeto é de caráter acadêmico e de livre distribuição para fins educacionais e de portfólio.

---

Desenvolvido para conectar corações e transformar vidas através da tecnologia.

```

```