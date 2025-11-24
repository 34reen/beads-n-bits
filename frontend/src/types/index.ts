export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;   // ✅ Must exist
  rating: number;  // or optional: rating?: number;
};
