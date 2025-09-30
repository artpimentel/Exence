import type { Producer } from "../types/Producer";

const producers: Producer[] = [
  {
    id: 1,
    name: "Rubi",
    age: 40,
    locality: "Centro",
    description:
      "Com 40 anos, Rubi se destaca no Centro com seus traços marcantes. Possui Cabelo Preto, Olhos Verdes e Pele Preta. Sua silhueta é valorizada por Seios Grandes, manequim 36 e 55kg.",
    phone: "",
    at: "",
    images: [
      "https://veenaspa.com.br/wp-content/uploads/al_opt_content/IMAGE/veenaspa.com.br/wp-content/uploads/2025/08/ru-23.webp.bv.webp?bv_host=veenaspa.com.br",
      "https://veenaspa.com.br/wp-content/uploads/2025/08/ru-24.webp",
      "https://veenaspa.com.br/wp-content/uploads/2025/08/ru-27.webp",
    ],
    appearance: {
      Cabelo: "Preto",
      Olhos: "Verde",
      Pele: "Preta",
      Seios: "Grande",
      Peso: 55,
      Altura: "Alta",
      Manequim: 36,
      Pés: 37,
    },
  },
  {
    id: 2,
    name: "Laís",
    age: 32,
    locality: "Zona-Sul",
    description:
      "Laís, 32 anos, é uma presença charmosa na Zona Sul. Dona de Cabelos Pretos e Pele Morena, ela tem uma altura imponente e Seios Grandes. Veste manequim 38 e pesa 57kg.",
    phone: "",
    at: "",
    images: [
      "https://veenaspa.com.br/wp-content/uploads/2025/08/lai-23.webp",
      "https://veenaspa.com.br/wp-content/uploads/2025/08/lai-25.webp",
      "https://veenaspa.com.br/wp-content/uploads/2025/08/lai-26.webp",
    ],

    appearance: {
      Cabelo: "Preto",
      Olhos: "",
      Pele: "Morena",
      Seios: "Grande",
      Peso: 57,
      Altura: "Alta",
      Manequim: 38,
      Pés: 37,
    },
  },
  {
    id: 3,
    name: "Úrsula",
    age: 28,
    locality: "Zona-Norte",
    description:
      "Com 28 anos, Úrsula representa a Zona Norte. De Cabelos e Olhos Castanhos, ela tem Pele Branca e um porte mais baixo. Possui Seios Médios e veste o manequim 34, pesando 52kg.",
    phone: "",
    at: "",
    images: [
      "https://veenaspa.com.br/wp-content/uploads/al_opt_content/IMAGE/veenaspa.com.br/wp-content/uploads/2025/08/ur-06.webp.bv.webp?bv_host=veenaspa.com.br",
      "https://veenaspa.com.br/wp-content/uploads/2025/07/ur-05.webp",
      "https://veenaspa.com.br/wp-content/uploads/2025/07/ur-02.webp",
    ],

    appearance: {
      Cabelo: "Castanho",
      Olhos: "Castanho",
      Pele: "Branca",
      Seios: "Médio",
      Peso: 52,
      Altura: "Baixa",
      Manequim: 34,
      Pés: 36,
    },
  },
  {
    id: 4,
    name: "Vanessa",
    age: 25,
    locality: "Zona-Sul",
    description:
      "Vanessa, uma jovem de 25 anos na Zona Sul, é alta e de Pele Preta. Seus Cabelos e Olhos são Pretos, complementando seu visual. Tem Seios Pequenos e veste manequim 36 com 56kg.",
    phone: "",
    at: "",
    images: [
      "https://veenaspa.com.br/wp-content/uploads/2025/08/van-07.webp",
      "https://veenaspa.com.br/wp-content/uploads/2025/08/van-10.webp",
      "https://veenaspa.com.br/wp-content/uploads/2025/08/van-08.webp",
    ],

    appearance: {
      Cabelo: "Preto",
      Olhos: "Preto",
      Pele: "Preta",
      Seios: "Pequeno",
      Peso: 56,
      Altura: "Alta",
      Manequim: 36,
      Pés: 37,
    },
  },
  {
    id: 5,
    name: "Pérola",
    age: 30,
    locality: "Zona-Oeste",
    description:
      "Pérola, com 30 anos, atende na Zona Oeste. Ela tem Cabelos Loiros e Olhos Castanhos em contraste com sua Pele Branca. Apresenta Seios Grandes, tem 54kg e veste 36.",
    phone: "",
    at: "",
    images: [
      "https://veenaspa.com.br/wp-content/uploads/2025/08/pe-35-1.webp",
      "https://veenaspa.com.br/wp-content/uploads/2025/08/pe-38.webp",
      "https://veenaspa.com.br/wp-content/uploads/2025/08/pe-36.webp",
    ],

    appearance: {
      Cabelo: "Loiro",
      Olhos: "Castanho",
      Pele: "Branca",
      Seios: "Grande",
      Peso: 54,
      Altura: "Alta",
      Manequim: 36,
      Pés: 36,
    },
  },
  {
    id: 6,
    name: "Clara",
    age: 23,
    locality: "Zona-Oeste",
    description:
      "Clara, a mais nova da lista com 23 anos, atende na Zona Oeste. Possui Cabelos Ruivos e Pele Branca, com Olhos Pretos. É alta, tem Seios Pequenos e veste manequim 36.",
    phone: "",
    at: "",
    images: [
      "https://veenaspa.com.br/wp-content/uploads/2025/09/cla-03.webp",
      "https://veenaspa.com.br/wp-content/uploads/2025/09/cla-05.webp",
      "https://veenaspa.com.br/wp-content/uploads/2025/09/cla-02.webp",
    ],

    appearance: {
      Cabelo: "Ruivo",
      Olhos: "Preto",
      Pele: "Branca",
      Seios: "Pequeno",
      Peso: 55,
      Altura: "Alta",
      Manequim: 36,
      Pés: 37,
    },
  },
  {
    id: 7,
    name: "Jayni",
    age: 32,
    locality: "Zona-Sul",
    description:
      "Jayni, de 32 anos, atua na Zona Sul. Com Cabelos Castanhos e marcantes Olhos Azuis, possui Pele Branca e Seios Médios. É alta, veste manequim 34 e pesa 53kg.",
    phone: "",
    at: "",
    images: [
      "https://veenaspa.com.br/wp-content/uploads/al_opt_content/IMAGE/veenaspa.com.br/wp-content/uploads/2025/08/jay-04.webp.bv.webp?bv_host=veenaspa.com.br",
      "https://veenaspa.com.br/wp-content/uploads/2025/08/jay-05.webp",
      "https://veenaspa.com.br/wp-content/uploads/2025/08/jay-06.webp",
    ],

    appearance: {
      Cabelo: "Castanho",
      Olhos: "Azul",
      Pele: "Branca",
      Seios: "Médio",
      Peso: 53,
      Altura: "Alta",
      Manequim: 34,
      Pés: 36,
    },
  },
];

export default producers;
