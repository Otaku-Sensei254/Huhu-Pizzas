export const menuCategories = [
  {
    id: 'pizzas',
    name: 'Scrumptious Pizzas',
    icon: 'pizza',
    description: 'Hand-tossed, flame-grilled perfection with fresh toppings',
    items: [
      {
        id: 'p1',
        name: 'Chicken Peri-Peri',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk1h0QjntfH21C8OGe-PhqgKO-_EkanEpyUizvt18RVA&s=10',
        description: 'Spicy peri-peri chicken, bell peppers, red onions, mozzarella, peri-peri drizzle',
        prices: { Regular: 850, Medium: 1250, Large: 1650 },
        badge: 'hot',
        popular: true,
        type: 'pizza'
      },
      {
        id: 'p2',
        name: 'BBQ Chicken',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH30Vo8J_om8aarfyU6myKpSvzS2gPHu5W4CA_2Fk5dQ&s=10',
        description: 'Grilled BBQ chicken, caramelized onions, sweet corn, mozzarella, BBQ sauce base',
        prices: { Regular: 850, Medium: 1250, Large: 1650 },
        badge: 'popular',
        popular: true,
        type: 'pizza'
      },
      {
        id: 'p3',
        name: 'Beef Pepperoni',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-M8Mu2iOgvDwB8owqXWZ4SnlXceYBosXY_hkxNLTMkg&s=10',
        description: 'Premium beef pepperoni, mozzarella, oregano, classic tomato sauce',
        prices: { Regular: 800, Medium: 1200, Large: 1550 },
        badge: 'popular',
        type: 'pizza'
      },
      {
        id: 'p4',
        name: 'Margherita Classic',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ340yIAkYAvTxfpGG41kM8RbtEf11X54ii5WtB5UcoTg&s=10',
        description: 'Fresh mozzarella, tomato sauce, basil leaves, olive oil drizzle',
        prices: { Regular: 700, Medium: 1050, Large: 1350 },
        badge: 'new',
        type: 'pizza'
      },
      {
        id: 'p5',
        name: 'Hawaiian Delight',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK3gr9CeHJ6MSrtnwIHXRGVVH5-lb2k3eTv09RHUEgeQ&s=10',
        description: 'Honey-glazed ham, pineapple chunks, mozzarella, tomato sauce',
        prices: { Regular: 800, Medium: 1200, Large: 1550 },
        type: 'pizza'
      },
      {
        id: 'p6',
        name: 'Veggie Supreme',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-HROidqMHWEQwyutoFJV--QZOpLg1uZz9fHvwJL-snQ&s=10',
        description: 'Bell peppers, mushrooms, red onions, olives, sweet corn, cherry tomatoes, mozzarella',
        prices: { Regular: 750, Medium: 1150, Large: 1450 },
        badge: 'new',
        type: 'pizza'
      },
      {
        id: 'p7',
        name: 'Meat Lovers',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH30Vo8J_om8aarfyU6myKpSvzS2gPHu5W4CA_2Fk5dQ&s=10',
        description: 'Beef pepperoni, BBQ chicken, spicy sausage, bacon bits, mozzarella, BBQ sauce',
        prices: { Regular: 950, Medium: 1400, Large: 1800 },
        badge: 'hot',
        type: 'pizza'
      },
      {
        id: 'p8',
        name: 'Seafood Special',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS57Y3mamqoPt2RS9Pi32DsYe3F2CK3_C8tfTZFnhhG0Q&s=10',
        description: 'Shrimp, calamari, mussels, garlic, parsley, mozzarella, white wine sauce',
        prices: { Regular: 950, Medium: 1400, Large: 1800 },
        badge: 'new',
        type: 'pizza'
      },
    ]
  },
  {
    id: 'chicken',
    name: 'Flame-Grilled Chicken',
    icon: 'chicken',
    description: 'Marinated in secret herbs, flame-grilled to juicy perfection',
    items: [
      {
        id: 'c1',
        name: 'Quarter Chicken',
        description: 'Single portion with fries or ugali and kachumbari',
        prices: { Default: 450 },
        type: 'chicken'
      },
      {
        id: 'c2',
        name: 'Half Chicken',
        description: 'Perfect for one hungry person with fries/ugali and kachumbari',
        prices: { Default: 750 },
        badge: 'popular',
        type: 'chicken'
      },
      {
        id: 'c3',
        name: '3-Piece Chicken',
        description: 'Three succulent pieces with large fries/ugali and kachumbari',
        prices: { Default: 1050 },
        badge: 'hot',
        type: 'chicken'
      },
      {
        id: 'c4',
        name: '6-Piece Family Pack',
        description: 'Six pieces, large fries, large ugali, kachumbari, 2 sodas',
        prices: { Default: 1850 },
        badge: 'popular',
        popular: true,
        type: 'chicken'
      },
      {
        id: 'c5',
        name: '10-Piece Party Pack',
        description: 'Ten pieces, 2 large fries, 2 large ugali, kachumbari, 4 sodas',
        prices: { Default: 2950 },
        badge: 'hot',
        type: 'chicken'
      },
      {
        id: 'c6',
        name: 'Chicken Wings (6pcs)',
        description: 'Flame-grilled wings tossed in peri-peri or BBQ sauce',
        prices: { Default: 650 },
        badge: 'new',
        type: 'chicken'
      },
      {
        id: 'c7',
        name: 'Chicken Wings (12pcs)',
        description: 'Double portion, perfect for sharing',
        prices: { Default: 1150 },
        type: 'chicken'
      },
      {
        id: 'c8',
        name: 'Boneless Chicken Strips',
        description: 'Crispy strips with honey-mustard or spicy mayo dip',
        prices: { Default: 550 },
        type: 'chicken'
      },
    ]
  },
  {
    id: 'burgers',
    name: 'Burgers & Sides',
    icon: 'burger',
    description: 'Juicy patties, loaded fries, and crispy sides',
    items: [
      {
        id: 'b1',
        name: 'Beef Burger with Fries',
        description: '100% beef patty, cheese, lettuce, tomato, onion, special sauce, served with fries',
        prices: { Default: 550 },
        badge: 'popular',
        type: 'burger'
      },
      {
        id: 'b2',
        name: 'Chicken Burger with Fries',
        description: 'Crispy chicken fillet, cheese, lettuce, tomato, spicy mayo, served with fries',
        prices: { Default: 500 },
        type: 'burger'
      },
      {
        id: 'b3',
        name: 'Double Beef Burger',
        description: 'Two beef patties, double cheese, bacon, onion rings, special sauce, with fries',
        prices: { Default: 750 },
        badge: 'hot',
        type: 'burger'
      },
      {
        id: 'b4',
        name: 'Spicy Wings (4pcs)',
        description: 'Flame-grilled wings tossed in signature peri-peri sauce',
        prices: { Default: 450 },
        badge: 'hot',
        type: 'chicken'
      },
      {
        id: 'b5',
        name: 'Loaded Fries',
        description: 'Crispy fries topped with cheese sauce, bacon bits, jalapenos, spring onions',
        prices: { Default: 400 },
        badge: 'popular',
        type: 'fries'
      },
      {
        id: 'b6',
        name: 'Cheese Fries',
        description: 'Golden fries smothered in melted cheddar and mozzarella',
        prices: { Default: 350 },
        type: 'fries'
      },
      {
        id: 'b7',
        name: 'Onion Rings (8pcs)',
        description: 'Beer-battered crispy onion rings with ranch dip',
        prices: { Default: 300 },
        type: 'side'
      },
      {
        id: 'b8',
        name: 'Mozzarella Sticks (6pcs)',
        description: 'Breaded mozzarella with marinara sauce',
        prices: { Default: 400 },
        badge: 'new',
        type: 'side'
      },
    ]
  },
  {
    id: 'light-delights',
    name: 'Light Delights',
    icon: 'snack',
    description: 'Traditional Kenyan snacks and pastries',
    items: [
      {
        id: 'l1',
        name: 'Ndazi Portion (4pcs)',
        description: 'Freshly fried triangular doughnuts, golden and fluffy',
        prices: { Default: 100 },
        badge: 'popular',
        type: 'snack'
      },
      {
        id: 'l2',
        name: 'Ndazi Portion (8pcs)',
        description: 'Double portion for sharing',
        prices: { Default: 180 },
        type: 'snack'
      },
      {
        id: 'l3',
        name: 'Mahamri (4pcs)',
        description: 'Swahili coconut cardamom doughnuts, lightly sweetened',
        prices: { Default: 120 },
        badge: 'new',
        type: 'snack'
      },
      {
        id: 'l4',
        name: 'Samosas - Beef (4pcs)',
        description: 'Crispy pastry filled with spiced minced beef',
        prices: { Default: 200 },
        type: 'snack'
      },
      {
        id: 'l5',
        name: 'Samosas - Chicken (4pcs)',
        description: 'Crispy pastry filled with spiced shredded chicken',
        prices: { Default: 200 },
        type: 'snack'
      },
      {
        id: 'l6',
        name: 'Samosas - Vegetable (4pcs)',
        description: 'Crispy pastry filled with spiced potatoes and peas',
        prices: { Default: 160 },
        badge: 'new',
        type: 'snack'
      },
      {
        id: 'l7',
        name: 'Chapatis (2pcs)',
        description: 'Soft, flaky layered flatbreads',
        prices: { Default: 80 },
        type: 'snack'
      },
      {
        id: 'l8',
        name: 'Mandazi & Chai Combo',
        description: '4pcs ndazi with a cup of Kenyan tea',
        prices: { Default: 150 },
        badge: 'popular',
        type: 'drink'
      },
    ]
  },
  {
    id: 'beverages',
    name: 'Beverages',
    icon: 'drink',
    description: 'Refreshing shakes, sodas, and fresh juices',
    items: [
      {
        id: 'd1',
        name: 'Vanilla Shake',
        description: 'Creamy vanilla ice cream shake, topped with whipped cream',
        prices: { Default: 250 },
        badge: 'popular',
        popular: true,
        type: 'drink'
      },
      {
        id: 'd2',
        name: 'Chocolate Shake',
        description: 'Rich chocolate ice cream shake with chocolate syrup',
        prices: { Default: 250 },
        type: 'drink'
      },
      {
        id: 'd3',
        name: 'Strawberry Shake',
        description: 'Fresh strawberry shake with real fruit pieces',
        prices: { Default: 250 },
        badge: 'new',
        type: 'drink'
      },
      {
        id: 'd4',
        name: 'Oreo Shake',
        description: 'Vanilla shake blended with Oreo cookies, topped with cream',
        prices: { Default: 280 },
        badge: 'hot',
        type: 'drink'
      },
      {
        id: 'd5',
        name: 'Coca-Cola / Sprite / Fanta (500ml)',
        description: 'Ice-cold sodas',
        prices: { Default: 100 },
        type: 'drink'
      },
      {
        id: 'd6',
        name: 'Minute Maid Juice (300ml)',
        description: 'Orange, Mango, or Pineapple',
        prices: { Default: 120 },
        type: 'drink'
      },
      {
        id: 'd7',
        name: 'Mineral Water (500ml)',
        description: 'Pure refreshing water',
        prices: { Default: 80 },
        type: 'drink'
      },
      {
        id: 'd8',
        name: 'Fresh Passion Juice',
        description: 'Freshly squeezed passion fruit juice',
        prices: { Default: 150 },
        badge: 'new',
        type: 'drink'
      },
      {
        id: 'd9',
        name: 'Kenyan Tea / Coffee',
        description: 'Hot beverage of choice',
        prices: { Default: 80 },
        type: 'drink'
      },
    ]
  },
];

export const getAllMenuItems = () => {
  return menuCategories.flatMap(category => 
    category.items.map(item => ({ ...item, category: category.id, categoryName: category.name }))
  );
};

export const getItemById = (id, size) => {
  const allItems = getAllMenuItems();
  return allItems.find(item => item.id === id);
};
