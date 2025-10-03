import { type User } from "./User";

export interface Producer extends User {
  metadata: User["metadata"] & {
    verified: boolean;
    reviewsCount?: number;
    rating?: number;
    tags?: string[];
  };

  profile: User["profile"] & {
    images: string[];
    age: number;
    nationality: string;
    slogan: string;
    description: string;
    languages: {
      name: string;
      level: "Básico" | "Intermediário" | "Fluente";
    }[];
  };

  appearance: {
    Tatuagens: boolean;
    Piercings: boolean;
    Cabelo: "Loiro" | "Ruivo" | "Castanho Escuro" | "Castanho Claro" | "Preto";
    Olhos: "Azuis" | "Verdes" | "Castanhos" | "Pretos";
    Pele: "Branca" | "Parda" | "Morena" | "Preta";
    Seios: "Pequenos" | "Médios" | "Grandes";
    Peso: number;
    Altura: number;
    Manequim: number;
    Pés: number;
  };

  services: {
    duration:
      | "1 Hora"
      | "2 Horas"
      | "4 Horas"
      | "Pernoite"
      | "Diária"
      | "30 Min";
    price: number;
  }[];

  local: {
    country: string;
    state: string;
    city: string;
    neighborhood: string;
    hasLocal: boolean;
  };

  contact: {
    phone: string;
    instagram?: string;
    telegram?: string;
  };
}
