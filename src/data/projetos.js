import livraria from '../assets/img/projetos/livraria.png'
import restaurante from '../assets/img/projetos/restaurante.png'
import sempreMei from '../assets/img/projetos/sempre_mei.png'
import {
   Java,
   Html5,
   Css3,
   Javascript,
   Postgresql,
} from '@devicons-pack/react/plain'
import { React, Spring, Tailwindcss } from '@devicons-pack/react/original'

export const projetos = [
   {
      projeto: 'sempre-mei',

      sobre: {
         titulo: 'Sempre MEI',

         descricao:
            'Página web institucional desenvolvida para a divulgação de serviços para Microempreendedores Individuais (MEI). O projeto apresenta uma interface moderna, clara e objetiva para destacar soluções.',

         linguagem: [Html5, Css3, Javascript],

         gitHub: 'https://github.com/Davi-Oliveira214/sempre-mei',

         imagem: sempreMei,

         visita: 'https://davi-oliveira214.github.io/sempre-mei/',
      },
   },

   {
      projeto: 'Livraria Java',

      sobre: {
         titulo: 'Livraria Back-End',

         descricao:
            'Projeto desenvolvido para aprender Spring Boot e PostgreSQL na prática. Uma API REST de gerenciamento de livros que permite cadastrar, buscar, atualizar e remover livros do acervo, com suporte a filtros por título, autor, gênero e outros campos, além de tratamento padronizado de erros e histórico de registros com ordenação flexível.',

         linguagem: [Java, Spring, Postgresql],

         gitHub: 'https://github.com/Davi-Oliveira214/livraria-java',

         imagem: livraria,

         visita: '',
      },
   },
   {
      projeto: 'Restaurante-FullStack',

      sobre: {
         titulo: 'Restaurante FullStack',

         descricao:
            'Aplicação full stack de gerenciamento de restaurante, desenvolvida para consolidar Spring Boot e aprender React e Tailwind CSS na prática. O backend oferece cadastro e login de usuários, gerenciamento de pratos e agendamento de mesas com verificação de conflitos de horário. O frontend apresenta a página inicial com carrossel de pratos, com as telas de cadastro, login e reserva ainda em desenvolvimento.',

         linguagem: [Java, Spring, Postgresql, React, Tailwindcss],

         gitHub: 'https://github.com/Davi-Oliveira214/Restaurante-Java-React',

         imagem: restaurante,

         visita: '',
      },
   },
]
