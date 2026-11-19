# floricultura# 🌻 Floricultura da Resenha

> **Transformando o cuidado com o jardim em uma experiência interativa e divertida.**

---

## 🎯 Sobre o Projeto

A **Floricultura da Resenha** é uma aplicação web completa desenvolvida para simular uma loja virtual temática inspirada no universo de *Plants vs. Zombies*. O objetivo do projeto é unir design moderno, organização de catálogo e interatividade no navegador utilizando tecnologias web fundamentais.

---

## 💡 O Problema vs. A Solução

* **O Desafio:** Criar um e-commerce funcional sem depender de frameworks pesados, garantindo navegação intuitiva, cálculo rápido de pedidos e filtragem dinâmica de produtos.
* **A Solução:** Desenvolvimento de uma arquitetura limpa em **HTML5, CSS3 e JavaScript puro**, com identidade visual unificada e scripts dedicados para automatizar a experiência do usuário.

---

## ✨ Funcionalidades Principais (Roteiro de Demonstração)

### 1. Página Inicial (`index.html`)
* Apresentação da identidade visual da loja com banner temático.
* Vitrine rápida destacando os carros-chefe da floricultura (*Girassol, Rosa e Cacto*).

### 2. Catálogo Dinâmico (`catalogo.html`)
* **Renderização Automática:** Os produtos são carregados diretamente de um array de objetos em JavaScript, facilitando a adição de novas plantas.
* **Filtro por Categorias:** Botões interativos que filtram instantaneamente entre *Todas*, *Flores*, *Cactos e Suculentas* e *Exóticas*.
* **Resumo em Tempo Real:** Contador automático de itens exibidos e soma total dos valores filtrados na tela.

### 3. Simulador de Orçamento (`simulador.html`)
* Cálculo prático do valor final da compra.
* Opções extras como **Entrega Expressa** (+ R\$ 15,00) e **Desconto de Data Especial** (5% off).

### 4. Cadastro de Clientes (`cadastro.html`)
* Formulário estruturado para captação de leads e preferências de cultivo.
* Validação de campos e retorno visual imediato ao usuário (`cadastro.js`).

### 5. Institucional e FAQ (`sobre.html`)
* Tabela semântica com horários de atendimento.
* Passo a passo simplificado de como comprar.
* Seção de Perguntas Frequentes interativa construída nativamente com HTML5 (`<details>` e `<summary>`).

---

## 🛠️ Tecnologias e Conceitos Aplicados

| Tecnologia | Aplicação no Projeto |
| :--- | :--- |
| **HTML5 Semântico** | Uso correto de `<header>`, `<nav>`, `<main>`, `<section>`, `<table>` e `<details>`. |
| **CSS3 Moderno** | Folha de estilo externa única (`style.css`), layout responsivo com **Flexbox**, transições suaves e paleta de cores temática. |
| **JavaScript (ES6+)** | Manipulação do DOM, métodos de array (`.filter()`, `.forEach()`), formatação de moeda e validação de formulários. |

---

## 📂 Arquitetura do Projeto

```text
floricultura-da-resenha/
├── index.html          # Página inicial e destaques
├── catalogo.html       # Catálogo com filtros e soma dinâmica
├── simulador.html      # Calculadora de pedidos e descontos
├── cadastro.html       # Formulário de registro de clientes
├── sobre.html          # Horários, tutorial e FAQ
├── style.css           # Estilização global unificada
├── cadastro.js         # Lógica e validação do cadastro
├── script.js           # Scripts gerais do sistema
└── img/                # Banco de imagens das plantas e banners
```

---

## 🚀 Como Executar

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` em qualquer navegador web.
3. Navegue pelo menu superior para testar os filtros do catálogo, o simulador e o cadastro.

---

## 👨‍💻 Autor

Desenvolvido por **Geovane**.
