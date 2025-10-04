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
    Altura: number;
    Peso: number;
    Pele: "Branca" | "Parda" | "Morena" | "Preta";
    Cabelo: "Loiro" | "Ruivo" | "Castanho Escuro" | "Castanho Claro" | "Preto";
    Olhos: "Azuis" | "Verdes" | "Castanhos" | "Pretos";
    Seios: "Pequenos" | "Médios" | "Grandes";
    Tatuagens: boolean;
    Piercings: boolean;
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

  local: User["local"] & {
    neighborhood: string;
    hasLocal: boolean;
  };

  contact: {
    phone: string;
    instagram?: string;
    telegram?: string;
  };
}
