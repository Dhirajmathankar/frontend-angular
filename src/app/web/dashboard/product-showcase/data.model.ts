// src/app/product-showcase/data.model.ts

export interface ShowcaseItem {
  id: string;
  name: string;
  icon: string;
  isFavorite?: boolean;
  hasAction?: boolean;
  subFeatures?: { name: string; icon: string }[]; // 👈 yeh add karna hoga
}


export interface ShowcaseData {
  products: ShowcaseItem[];
  plugins: ShowcaseItem[];
  nonProductionReady: ShowcaseItem[];
}