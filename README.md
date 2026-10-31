# Davi Oliveira — Portfólio

Portfólio pessoal de **Davi Oliveira**, estudante de Desenvolvimento de Software Multiplataforma e desenvolvedor em formação com foco em FullStack, especialmente em Java no back-end e React no front-end.

O site apresenta conhecimentos técnicos, projetos, formação, informações pessoais e canais de contato. Também demonstra a construção de uma interface responsiva com React, componentes reutilizáveis, Tailwind CSS, navegação por âncoras e animações CSS.

## Portfólio online

Acesse a versão hospedada do projeto: [davioliveira-portifolio.vercel.app](https://davioliveira-portifolio.vercel.app)

## Conteúdo do portfólio

- **Início:** apresentação, disponibilidade para projetos e tecnologias em destaque.

- **Conhecimentos:** carrossel interativo com Java, PHP, JavaScript, HTML5, CSS3, MySQL, PostgreSQL, React JS, Tailwind CSS, Spring Boot, Git e GitHub.

- **Projetos:** cards com descrição, tecnologias utilizadas, link para o GitHub e link de visita quando disponível.

- **Formação:** cards expansíveis com dados da Etec Itaquera I e da Fatec Itaquera.

- **Sobre mim:** informações sobre perfil, objetivos, experiência e hobbies.

- **Contato:** formulário para elogio, crítica, sugestão ou outra mensagem, além de links para WhatsApp, Instagram, LinkedIn e e-mail.

Os projetos atualmente cadastrados são:

- **Sempre MEI:** página institucional para divulgação de serviços destinados a Microempreendedores Individuais.

- **Livraria Back-End:** API REST desenvolvida com Java, Spring Boot e PostgreSQL para gerenciamento de livros.

- **Restaurante FullStack:** aplicação de gestão de restaurante com Java, Spring Boot, PostgreSQL, React e Tailwind CSS.

O conteúdo é mantido nos arquivos de dados em `src/data/`.

## Tecnologias

- React 19.2.8 e React DOM.

- Vite 8.2.2.

- Tailwind CSS 4.3.3 com `@tailwindcss/vite`.

- `@tabler/icons-react` para ícones da interface.

- `@devicons-pack/react` para ícones de tecnologias.

- `@fontsource/outfit` e `@fontsource/exo-2` para tipografia.

- ESLint para análise estática.

O repositório contém apenas o frontend. Não há um back-end próprio implementado no projeto; o formulário de contato faz requisições HTTP para endpoints configurados por variáveis de ambiente.

## Estrutura do projeto

```
.
├── public/
│   └── metaTag.png
├── src/
│   ├── assets/
│   │   ├── img/hero/           # Imagens rotativas da seção inicial
│   │   └── img/projetos/        # Imagens dos projetos
│   ├── components/
│   │   ├── Sessoes/             # Seções de conhecimentos, projetos, formação e sobre
│   │   ├── cards/               # Cards reutilizáveis
│   │   ├── ContatoForm.jsx      # Formulário de contato
│   │   ├── Header.jsx           # Menu lateral por âncoras
│   │   ├── Hero.jsx             # Apresentação e banner rotativo
│   │   └── Rodape.jsx           # Contatos e rodapé
│   ├── data/                    # Conteúdos renderizados no site
│   ├── App.jsx                  # Composição principal da página
│   ├── index.css                # Tema, utilitários e animações
│   └── main.jsx                 # Ponto de entrada
├── index.html
├── package.json
└── vite.config.js
```

A página principal é montada por `App.jsx` na seguinte ordem: `Hero`, menu, conhecimentos, projetos, formação, sobre mim e rodapé. A navegação usa as âncoras `#inicio`, `#projetos`, `#sobre` e `#contato`. A seção de formação também possui o id `#formacao`, mas não é exibida como item no menu lateral.

## Como executar

### Pré-requisitos

- Node.js.

- npm.

### Instalação

```bash
git clone https://github.com/Davi-Oliveira214/Davioliveira-portifolio.git
cd Davioliveira-portifolio
npm ci
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação.

### Scripts disponíveis

```bash
npm run dev      # inicia o servidor de desenvolvimento
npm run build    # gera o build de produção
npm run preview  # visualiza o build gerado
npm run lint     # executa o ESLint
```

## Formulário de contato

O componente `src/components/ContatoForm.jsx` valida nome, e-mail e mensagem no navegador e envia o formulário diretamente para `VITE_API_URL` usando uma requisição `POST` com `FormData`.

O payload inclui `name`, `email`, `subject`, `message` e `type`. Os tipos disponíveis no formulário são `elogio`, `critica`, `sugestao` e `outro`.

O campo `subject` recebe automaticamente o formato `[Tipo] Contato pelo site` quando não é preenchido. A chave `VITE_KEY_FORM` é enviada no campo `access_key`.

Crie um arquivo `.env.local` na raiz do projeto quando for utilizar o formulário:

```bash
VITE_API_URL=https://seu-servico-de-formulario.example/submit
VITE_KEY_FORM=sua-chave
```

## Dados e assets

- `src/data/techs.js`: tecnologias e descrições exibidas na seção de conhecimentos.

- `src/data/projetos.js`: projetos, imagens, tecnologias e links externos.

- `src/data/formacao.js`: instituições, cursos, períodos e aprendizados.

- `src/data/sobre.js`: textos da seção “Sobre mim”.

- `src/data/contato.js`: links e ícones dos canais de contato.

- `src/assets/img/hero/`: imagens usadas no banner inicial e na seção sobre.

- `src/assets/img/projetos/`: imagens dos cards de projetos.

- `public/metaTag.png`: imagem usada nos metadados de compartilhamento definidos no `index.html`.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE). Consulte o arquivo [`LICENSE`](LICENSE) para conhecer os termos completos de uso, cópia, modificação e distribuição.
