import type { Producer } from "../types/Producer";

const producers: Producer[] = [
  {
    id: 1,
    role: "advertiser",

    metadata: {
      createdAt: "2025-07-05T14:30:00.000Z",
      lastLogin: "2025-09-30T10:00:00.000Z",
      email: "rubi@exemplo.com",
      password: "mocked_password_hash_1", // Lembre-se de remover do User se for para o Front
      status: "active",
      verified: true,
      reviewsCount: 15,
      rating: 4.8,
      tags: ["Destaque", "Centro"],
    },

    profile: {
      name: "Rubi",
      gender: "female",
      prefer: "male", // Assumindo um valor padrão
      images: [
        "https://veenaspa.com.br/wp-content/uploads/al_opt_content/IMAGE/veenaspa.com.br/wp-content/uploads/2025/08/ru-23.webp.bv.webp?bv_host=veenaspa.com.br",
        "https://veenaspa.com.br/wp-content/uploads/2025/08/ru-24.webp",
        "https://veenaspa.com.br/wp-content/uploads/2025/08/ru-27.webp",
      ],
      age: 40,
      nationality: "Brasileira",
      slogan: "A rainha dos traços marcantes.", // Adicionado
      description:
        "Com 40 anos, Rubi se destaca no Centro com seus traços marcantes. Possui Cabelo Preto, Olhos Verdes e Pele Preta. Sua silhueta é valorizada por Seios Grandes, manequim 36 e 55kg.",
      languages: [{ name: "Português", level: "Fluente" }],
    },

    appearance: {
      Tatuagens: false, // Adicionado
      Piercings: false, // Adicionado
      Cabelo: "Preto",
      Olhos: "Verdes", // Padronizado para o tipo definido
      Pele: "Preta",
      Seios: "Grandes", // Padronizado para o tipo definido
      Peso: 55,
      Altura: 1.7, // Usando formato numérico
      Manequim: 36,
      Pés: 37,
    },

    services: [
      // Adicionado
      { duration: "1 hora", price: 300 },
      { duration: "2 horas", price: 550 },
    ],

    local: {
      country: "Brasil",
      state: "RJ",
      city: "Rio de Janeiro",
      neighborhood: "Centro",
      hasLocal: true,
    },

    contact: {
      phone: "5521999998888",
      instagram: "rubioficial",
      telegram: undefined,
    },
  },
  {
    id: 2,
    role: "advertiser",

    metadata: {
      createdAt: "2025-09-28T10:05:00.000Z",
      lastLogin: "2025-09-30T10:00:00.000Z",
      email: "lais@exemplo.com",
      password: "mocked_password_hash_2",
      status: "active",
      verified: true,
      reviewsCount: 30,
      rating: 5.0,
      tags: ["Zona Sul", "Elegante"],
    },

    profile: {
      name: "Laís",
      gender: "female",
      prefer: "male",
      images: [
        "https://veenaspa.com.br/wp-content/uploads/2025/08/lai-23.webp",
        "https://veenaspa.com.br/wp-content/uploads/2025/08/lai-25.webp",
        "https://veenaspa.com.br/wp-content/uploads/2025/08/lai-26.webp",
      ],
      age: 32,
      nationality: "Brasileira",
      slogan: "Charme na Zona Sul.", // Adicionado
      description:
        "Laís, 32 anos, é uma presença charmosa na Zona Sul. Dona de Cabelos Pretos e Pele Morena, ela tem uma altura imponente e Seios Grandes. Veste manequim 38 e pesa 57kg.",
      languages: [{ name: "Português", level: "Fluente" }],
    },

    appearance: {
      Tatuagens: true,
      Piercings: false,
      Cabelo: "Preto",
      Olhos: "Castanhos",
      Pele: "Morena",
      Seios: "Grandes",
      Peso: 57,
      Altura: 1.75,
      Manequim: 38,
      Pés: 37,
    },

    services: [
      { duration: "1 hora", price: 400 },
      { duration: "3 horas", price: 900 },
    ],

    local: {
      country: "Brasil",
      state: "RJ",
      city: "Rio de Janeiro",
      neighborhood: "Zona-Sul",
      hasLocal: true,
    },

    contact: {
      phone: "5521988887777",
      instagram: "lais_model",
      telegram: undefined,
    },
  },
  {
    id: 3,
    role: "advertiser",

    metadata: {
      createdAt: "2025-08-15T18:10:00.000Z",
      lastLogin: "2025-09-29T15:00:00.000Z",
      email: "ursula@exemplo.com",
      password: "mocked_password_hash_3",
      status: "active",
      verified: false,
      reviewsCount: 5,
      rating: 4.2,
      tags: ["Novidade", "Discreta"],
    },

    profile: {
      name: "Úrsula",
      gender: "female",
      prefer: "male",
      images: [
        "https://veenaspa.com.br/wp-content/uploads/al_opt_content/IMAGE/veenaspa.com.br/wp-content/uploads/2025/08/ur-06.webp.bv.webp?bv_host=veenaspa.com.br",
        "https://veenaspa.com.br/wp-content/uploads/2025/07/ur-05.webp",
        "https://veenaspa.com.br/wp-content/uploads/2025/07/ur-02.webp",
      ],
      age: 28,
      nationality: "Brasileira",
      slogan: "O charme discreto da Zona Norte.", // Adicionado
      description:
        "Com 28 anos, Úrsula representa a Zona Norte. De Cabelos e Olhos Castanhos, ela tem Pele Branca e um porte mais baixo. Possui Seios Médios e veste o manequim 34, pesando 52kg.",
      languages: [{ name: "Português", level: "Fluente" }],
    },

    appearance: {
      Tatuagens: false,
      Piercings: false,
      Cabelo: "Castanho Escuro", // Ajustado para corresponder ao tipo
      Olhos: "Castanhos",
      Pele: "Branca",
      Seios: "Médios",
      Peso: 52,
      Altura: 1.6,
      Manequim: 34,
      Pés: 36,
    },

    services: [
      { duration: "30 minutos", price: 200 },
      { duration: "1 hora", price: 350 },
    ],

    local: {
      country: "Brasil",
      state: "RJ",
      city: "Rio de Janeiro",
      neighborhood: "Zona-Norte",
      hasLocal: true,
    },

    contact: {
      phone: "5521977776666",
      instagram: undefined,
      telegram: "ursula_oficial",
    },
  },
  {
    id: 4,
    role: "advertiser",

    metadata: {
      createdAt: "2025-09-02T09:15:00.000Z",
      lastLogin: "2025-09-30T10:00:00.000Z",
      email: "vanessa@exemplo.com",
      password: "mocked_password_hash_4",
      status: "active",
      verified: true,
      reviewsCount: 10,
      rating: 4.5,
      tags: ["Zona Sul", "Jovem"],
    },

    profile: {
      name: "Vanessa",
      gender: "female",
      prefer: "male",
      images: [
        "https://veenaspa.com.br/wp-content/uploads/2025/08/van-07.webp",
        "https://veenaspa.com.br/wp-content/uploads/2025/08/van-10.webp",
        "https://veenaspa.com.br/wp-content/uploads/2025/08/van-08.webp",
      ],
      age: 25,
      nationality: "Brasileira",
      slogan: "Beleza e juventude na Zona Sul.", // Adicionado
      description:
        "Vanessa, uma jovem de 25 anos na Zona Sul, é alta e de Pele Preta. Seus Cabelos e Olhos são Pretos, complementando seu visual. Tem Seios Pequenos e veste manequim 36 com 56kg.",
      languages: [{ name: "Português", level: "Fluente" }],
    },

    appearance: {
      Tatuagens: false,
      Piercings: false,
      Cabelo: "Preto",
      Olhos: "Pretos",
      Pele: "Preta",
      Seios: "Pequenos",
      Peso: 56,
      Altura: 1.72,
      Manequim: 36,
      Pés: 37,
    },

    services: [
      { duration: "1 hora", price: 350 },
      { duration: "1.5 horas", price: 500 },
    ],

    local: {
      country: "Brasil",
      state: "RJ",
      city: "Rio de Janeiro",
      neighborhood: "Zona-Sul",
      hasLocal: true,
    },

    contact: {
      phone: "5521966665555",
      instagram: "van_model",
      telegram: undefined,
    },
  },
  {
    id: 5,
    role: "advertiser",

    metadata: {
      createdAt: "2025-07-29T20:20:00.000Z",
      lastLogin: "2025-09-29T20:00:00.000Z",
      email: "perola@exemplo.com",
      password: "mocked_password_hash_5",
      status: "active",
      verified: true,
      reviewsCount: 25,
      rating: 4.7,
      tags: ["Blonde", "Exótica"],
    },

    profile: {
      name: "Pérola",
      gender: "female",
      prefer: "male",
      images: [
        "https://veenaspa.com.br/wp-content/uploads/2025/08/pe-35-1.webp",
        "https://veenaspa.com.br/wp-content/uploads/2025/08/pe-38.webp",
        "https://veenaspa.com.br/wp-content/uploads/2025/08/pe-36.webp",
      ],
      age: 30,
      nationality: "Brasileira",
      slogan: "A Pérola da Zona Oeste.", // Adicionado
      description:
        "Pérola, com 30 anos, atende na Zona Oeste. Ela tem Cabelos Loiros e Olhos Castanhos em contraste com sua Pele Branca. Apresenta Seios Grandes, tem 54kg e veste 36.",
      languages: [{ name: "Português", level: "Fluente" }],
    },

    appearance: {
      Tatuagens: false,
      Piercings: false,
      Cabelo: "Loiro",
      Olhos: "Castanhos",
      Pele: "Branca",
      Seios: "Grandes",
      Peso: 54,
      Altura: 1.7,
      Manequim: 36,
      Pés: 36,
    },

    services: [
      { duration: "1 hora", price: 320 },
      { duration: "2 horas", price: 600 },
    ],

    local: {
      country: "Brasil",
      state: "RJ",
      city: "Rio de Janeiro",
      neighborhood: "Zona-Oeste",
      hasLocal: true,
    },

    contact: {
      phone: "5521955554444",
      instagram: "perola_real",
      telegram: undefined,
    },
  },
  {
    id: 6,
    role: "advertiser",

    metadata: {
      createdAt: "2025-09-10T12:25:00.000Z",
      lastLogin: "2025-09-30T09:00:00.000Z",
      email: "clara@exemplo.com",
      password: "mocked_password_hash_6",
      status: "active",
      verified: true,
      reviewsCount: 12,
      rating: 4.9,
      tags: ["Ruiva", "Arte"],
    },

    profile: {
      name: "Clara",
      gender: "female",
      prefer: "male",
      images: [
        "https://veenaspa.com.br/wp-content/uploads/2025/09/cla-03.webp",
        "https://veenaspa.com.br/wp-content/uploads/2025/09/cla-05.webp",
        "https://veenaspa.com.br/wp-content/uploads/2025/09/cla-02.webp",
      ],
      age: 23,
      nationality: "Brasileira",
      slogan: "Jovem, ruiva e cheia de arte.", // Adicionado
      description:
        "Clara, a mais nova da lista com 23 anos, atende na Zona Oeste. Possui Cabelos Ruivos e Pele Branca, com Olhos Pretos. É alta, tem Seios Pequenos e veste manequim 36.",
      languages: [{ name: "Português", level: "Fluente" }],
    },

    appearance: {
      Tatuagens: true,
      Piercings: true,
      Cabelo: "Ruivo",
      Olhos: "Pretos",
      Pele: "Branca",
      Seios: "Pequenos",
      Peso: 55,
      Altura: 1.73,
      Manequim: 36,
      Pés: 37,
    },

    services: [
      { duration: "1 hora", price: 380 },
      { duration: "2 horas", price: 700 },
    ],

    local: {
      country: "Brasil",
      state: "RJ",
      city: "Rio de Janeiro",
      neighborhood: "Zona-Oeste",
      hasLocal: true,
    },

    contact: {
      phone: "5521944443333",
      instagram: "clara_art",
      telegram: "clara_art",
    },
  },
  {
    id: 7,
    role: "advertiser",

    metadata: {
      createdAt: "2025-08-08T11:30:00.000Z",
      lastLogin: "2025-09-30T10:00:00.000Z",
      email: "jayni@exemplo.com",
      password: "mocked_password_hash_7",
      status: "pendingApproval", // Exemplo de status diferente
      verified: false,
      reviewsCount: 8,
      rating: 4.1,
      tags: ["Olhos Azuis", "Zona Sul"],
    },

    profile: {
      name: "Jayni",
      gender: "female",
      prefer: "male",
      images: [
        "https://veenaspa.com.br/wp-content/uploads/al_opt_content/IMAGE/veenaspa.com.br/wp-content/uploads/2025/08/jay-04.webp.bv.webp?bv_host=veenaspa.com.br",
        "https://veenaspa.com.br/wp-content/uploads/2025/08/jay-05.webp",
        "https://veenaspa.com.br/wp-content/uploads/2025/08/jay-06.webp",
      ],
      age: 32,
      nationality: "Brasileira",
      slogan: "O olhar que hipnotiza na Zona Sul.", // Adicionado
      description:
        "Jayni, de 32 anos, atua na Zona Sul. Com Cabelos Castanhos e marcantes Olhos Azuis, possui Pele Branca e Seios Médios. É alta, veste manequim 34 e pesa 53kg.",
      languages: [{ name: "Português", level: "Fluente" }],
    },

    appearance: {
      Tatuagens: false,
      Piercings: false,
      Cabelo: "Castanho Escuro",
      Olhos: "Azuis",
      Pele: "Branca",
      Seios: "Médios",
      Peso: 53,
      Altura: 1.71,
      Manequim: 34,
      Pés: 36,
    },

    services: [
      { duration: "1 hora", price: 340 },
      { duration: "2 horas", price: 650 },
    ],

    local: {
      country: "Brasil",
      state: "RJ",
      city: "Rio de Janeiro",
      neighborhood: "Zona-Sul",
      hasLocal: true,
    },

    contact: {
      phone: "5521933332222",
      instagram: undefined,
      telegram: undefined,
    },
  },
];

export default producers;
