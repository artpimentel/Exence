export interface Producer {
  id: number;
  name: string;
  locality: string;
  images: string[];
  tags: {
    [key: string]: string;
  };
}
