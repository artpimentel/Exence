export interface Producer {
  id: number;
  createdAt: string;
  gender: "male" | "female" | "femaletrans";

  name: string;
  description: string;
  age: number;
  nationality: string;
  locality: string;
  languages: { name: string; level: string }[];

  email: string;
  phone: string;
  instagram?: string;
  telegram?: string;

  appearance: {
    Cabelo: string;
    Olhos: string;
    Pele: string;
    Seios: string;
    Peso: number;
    Altura: string;
    Manequim: number;
    Pés: number;
  };

  images: string[];
}
