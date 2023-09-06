export type CategoryIndex =
  | 'to-order'
  | 'classic'
  | 'wedding'
  | 'desserts'
  | 'bread'
  | 'bakery'
  | 'dietary';

export interface Category {
  index: CategoryIndex;
  name: string;
  image: string;
}

export const CategoryList: Category[] = [
  { index: 'classic', name: 'Классические торты', image: 'classic.png' },
  { index: 'to-order', name: 'Торты на заказ', image: 'to-order.png' },
  { index: 'wedding', name: 'Свадебные торты', image: 'wedding.png' },
  { index: 'desserts', name: 'Десерты', image: 'desserts.png' },
  { index: 'bread', name: 'Хлеб', image: 'bread.png' },
  { index: 'bakery', name: 'Выпечка', image: 'bakery.png' },
  { index: 'dietary', name: 'Диетическая продукция', image: 'dietary.png' },
];
