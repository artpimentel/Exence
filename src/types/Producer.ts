export interface Producer {
  id: number;

  name: string;
  age: number;
  locality: string;
  description: string;

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
