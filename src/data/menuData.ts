export interface MenuItem {
  name: string;
  description?: string;
  price?: string;
  prices?: { label: string; price: string }[];
  note?: string;
}

export interface PizzaItem {
  name: string;
  description?: string;
  prices: [string, string, string, string];
}

export interface MenuCategory {
  name: string;
  note?: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    name: 'Appetizers',
    items: [
      { name: 'Artichoke & Spinach Dip', price: '$8.95' },
      { name: 'Calamari Fritti', price: '$8.95' },
      { name: 'Garlic Bread', price: '$3.50', note: 'Add cheese +$1.00' },
      {
        name: 'Bruschetta',
        description: 'Marinated diced tomatoes, basil, garlic, olive oil, onion & Parmesan cheese on freshly baked bread',
        price: '$6.95',
      },
      {
        name: 'Chicken Wings',
        description: 'Choice of Buffalo sauce or lemon pepper',
        prices: [
          { label: '6pc', price: '$9.95' },
          { label: '12pc', price: '$13.95' },
        ],
        note: 'Add ranch or blue cheese $0.75 ea.',
      },
      { name: 'Stuffed Mushrooms', description: '6 pieces', price: '$8.95' },
      { name: 'Fried Mushrooms', description: '12 pieces', price: '$7.95' },
      { name: 'Fried Ravioli', description: '8 pieces', price: '$6.95' },
      { name: 'Mozzarella Sticks', description: '6 pieces', price: '$6.95' },
    ],
  },
  {
    name: 'Salads',
    items: [
      { name: 'Tossed Salad', price: '$2.95' },
      {
        name: "Tavi's Salad",
        description: 'Mozzarella cheese, black olives, tomatoes, mushrooms',
        price: '$7.95',
      },
      {
        name: 'Chef Salad',
        description: 'Grilled chicken, roasted red peppers, tomatoes, fresh Mozzarella',
        price: '$11.95',
      },
      {
        name: 'Greek Salad Special',
        description: 'Onions, olives, Feta cheese, tomatoes, roasted red peppers in olive oil & red vinegar dressing',
        price: '$7.95',
      },
      {
        name: 'Antipasta Salad',
        description: 'Ham, salami, Provolone cheese, black olives, tomatoes, mushrooms, Mozzarella cheese',
        price: '$8.95',
      },
      {
        name: "Grilled Chicken Meli's Salad",
        description: 'Black olives, onions, mushrooms, artichoke hearts, olive oil & vinegar dressing',
        price: '$11.95',
      },
      {
        name: 'Caesar Salad',
        price: '$6.95',
        note: 'With chicken $10.95',
      },
    ],
  },
  {
    name: 'Fresh Homemade Soups',
    items: [
      {
        name: 'Minestrone',
        description: 'Italian soup with vegetables & pasta',
        price: '$6.50',
      },
      {
        name: 'Chicken Noodle',
        description: 'Homemade traditional recipe',
        price: '$6.50',
      },
    ],
  },
  {
    name: 'Homemade Baked Pastas',
    note: 'All entrees served with homemade rolls & house salad. Upgrade to Alfredo sauce for $2.95.',
    items: [
      {
        name: 'Pasta Combo',
        description: 'Manicotti, Lasagna & Cannelloni',
        price: '$9.95',
      },
      { name: 'Lasagna', price: '$8.95' },
      { name: 'Cannelloni', price: '$8.95' },
      { name: 'Manicotti', price: '$8.95' },
      { name: 'Cheese Ravioli', price: '$8.95' },
      { name: 'Baked Ziti', price: '$8.95' },
      {
        name: 'Sausage & Peppers',
        description: 'Italian sausage & bell peppers sauteed in red sauce, topped with Mozzarella over spaghetti',
        price: '$11.95',
      },
      { name: 'Eggplant Parmigiana', price: '$7.95' },
      {
        name: 'Eggplant Rollatini',
        description: 'Fresh eggplant filled with Ricotta and Romana cheese, topped with Mozzarella',
        price: '$11.95',
      },
    ],
  },
  {
    name: 'Chicken & Veal Entrees',
    note: 'All entrees served with homemade rolls & house salad.',
    items: [
      {
        name: 'Parmigiana',
        description: 'Lightly breaded, fried, topped with marinara & mozzarella, served with spaghetti',
        prices: [
          { label: 'Chicken', price: '$12.95' },
          { label: 'Veal', price: '$14.95' },
        ],
      },
      {
        name: 'Florentine',
        description: 'Mushroom & spinach sauteed in creamy Alfredo with Fettuccine',
        prices: [
          { label: 'Chicken', price: '$14.95' },
          { label: 'Veal', price: '$16.95' },
        ],
      },
      {
        name: 'Cacciatore',
        description: 'Sauteed mushrooms, green peppers, roasted red peppers, onions in Sherry wine Marinara over spaghetti',
        prices: [
          { label: 'Chicken', price: '$13.95' },
          { label: 'Veal', price: '$15.95' },
        ],
      },
      {
        name: 'Marsala',
        description: 'Sauteed with fresh mushrooms and sweet Marsala wine sauce over spaghetti',
        prices: [
          { label: 'Chicken', price: '$12.95' },
          { label: 'Veal', price: '$14.95' },
        ],
      },
      {
        name: 'Piccata',
        description: 'Sauteed with lemon, butter & capers in white wine sauce over spaghetti',
        prices: [
          { label: 'Chicken', price: '$12.95' },
          { label: 'Veal', price: '$14.95' },
        ],
      },
      {
        name: 'Scar Pella',
        description: 'Sauteed with roasted red peppers, onions, mushrooms in creamy pink sauce, topped with Provolone over spaghetti',
        prices: [
          { label: 'Chicken', price: '$14.95' },
          { label: 'Veal', price: '$16.95' },
        ],
      },
      {
        name: 'Carciofi',
        description: 'Sauteed with mushrooms & artichoke hearts in pink sauce over linguine',
        prices: [
          { label: 'Chicken', price: '$13.95' },
          { label: 'Veal', price: '$15.95' },
        ],
      },
      {
        name: 'Aristocrat',
        description: 'Sauteed in creamy white wine sauce, topped with eggplant & Provolone over spaghetti',
        prices: [
          { label: 'Chicken', price: '$13.95' },
          { label: 'Veal', price: '$15.95' },
        ],
      },
      {
        name: 'Calabrese',
        description: 'Sauteed with mushrooms, artichoke hearts, roasted red pepper in creamy sauce over spaghetti',
        prices: [
          { label: 'Chicken', price: '$14.95' },
          { label: 'Veal', price: '$16.95' },
        ],
      },
      {
        name: 'Fettuccine Alfredo',
        description: 'Parmesan cream sauce with garlic over fettuccine',
        prices: [
          { label: 'Chicken', price: '$12.95' },
          { label: 'Veal', price: '$14.95' },
        ],
      },
      {
        name: "Tavi's",
        description: 'Sauteed with mushrooms, tomatoes, artichoke hearts in white wine sauce over spaghetti',
        prices: [
          { label: 'Chicken', price: '$14.95' },
          { label: 'Veal', price: '$16.95' },
        ],
      },
      {
        name: 'Francese',
        description: 'Egg-battered with lemon butter sauce on linguine',
        prices: [
          { label: 'Chicken', price: '$14.95' },
          { label: 'Veal', price: '$16.95' },
        ],
      },
    ],
  },
  {
    name: 'Seafood',
    items: [
      { name: 'Lobster Ravioli', price: '$14.95' },
      {
        name: 'Shrimp Marinara',
        description: 'Sauteed shrimp in garlic & marinara over linguine',
        price: '$14.95',
      },
      {
        name: 'Shrimp Scampi',
        description: 'Sauteed shrimp with garlic in white wine lemon sauce over linguine',
        price: '$15.95',
      },
      {
        name: 'Shrimp Alfredo',
        description: 'Sauteed shrimp with fettuccine in fresh Alfredo sauce',
        price: '$15.95',
      },
      {
        name: 'Frutti di Mare',
        description: 'Shrimp, scallops, clams, mussels & calamari on linguine',
        price: '$17.95',
      },
      {
        name: 'Tilapia & Shrimp',
        description: 'Sauteed in white wine & lemon butter with capers, served with spaghetti',
        price: '$17.95',
      },
      {
        name: 'Salmon Verona',
        description: 'Sauteed with lemon, butter & capers in white wine sauce over spaghetti',
        price: '$16.95',
      },
      {
        name: 'Linguine with Clam Sauce',
        description: 'Red or white',
        price: '$13.95',
      },
      {
        name: 'Linguine Seafood',
        description: 'Shrimp, scallops & clams in creamy Alfredo sauce',
        price: '$16.95',
      },
      {
        name: 'Herb-Grilled Salmon',
        description: 'Italian herbs & extra virgin oil, sauteed broccoli & carrots in pesto sauce with tortellini',
        price: '$16.95',
      },
      {
        name: 'Seafood Primavera',
        description: 'Mussels, shrimp & scallops with mushrooms, carrots & broccoli in creamy Alfredo',
        price: '$18.95',
      },
    ],
  },
  {
    name: 'House Specialties',
    note: 'All entrees served with homemade rolls & house salad. Upgrade to Caesar or Greek salad for $3.75.',
    items: [
      {
        name: 'Spaghetti or Ziti',
        description: 'Choice of Marinara, meat sauce, meatballs, Italian sausage, or mushrooms',
        price: '$7.95',
      },
      {
        name: 'Fettuccine Carbonara',
        description: 'Sauteed ham, mushrooms & black olives in creamy sauce',
        price: '$12.95',
      },
      {
        name: 'Tortellini alla Panna',
        description: 'Cheese filled pasta in pink sauce',
        price: '$11.95',
      },
      {
        name: 'Penne Alla Vodka',
        description: 'Light pink cream sauce with Vodka',
        price: '$11.95',
      },
      {
        name: 'Pasta Primavera',
        description: 'Broccoli, carrots & mushrooms in creamy Alfredo over fettuccine',
        price: '$12.95',
      },
      {
        name: 'Spaghetti the "Works"',
        description: 'Meat sauce with meatballs, Italian sausage & mushrooms',
        price: '$12.95',
      },
      {
        name: 'Roma Special',
        description: 'Sauteed roasted red peppers, mushrooms, black olives, Italian sausage in creamy pink sauce over spaghetti',
        prices: [
          { label: 'Chicken', price: '$15.95' },
          { label: 'Veal', price: '$18.95' },
        ],
      },
      {
        name: 'House Trio',
        description: 'Homemade lasagna, chicken parmigiana & fettuccine Alfredo',
        price: '$14.95',
      },
      {
        name: 'Linguine Broccoli with Chicken',
        description: 'Broccoli in garlic & olive oil sauce over linguine',
        price: '$13.95',
      },
    ],
  },
  {
    name: 'Baked Specialties',
    items: [
      {
        name: 'Sausage Calzone',
        description: 'Sausage, Ricotta & Mozzarella cheese',
        price: '$7.95',
      },
      {
        name: 'Stromboli Meat',
        description: 'Pepperoni, sausage, hamburger, Canadian bacon',
        price: '$7.95',
      },
    ],
  },
  {
    name: 'Hot & Cold Subs',
    items: [
      {
        name: 'Philly Cheese Steak',
        description: 'Mushrooms, bell peppers & onions',
        price: '$7.95',
      },
      { name: 'Chicken Parmigiana Sub', price: '$7.95' },
      { name: 'Meatball Parmigiana Sub', price: '$7.95' },
      { name: 'Sausage & Pepper Parmigiana Sub', price: '$7.95' },
      {
        name: 'Ham & Provolone Sub',
        description: 'Served with lettuce & tomatoes',
        price: '$7.95',
      },
    ],
  },
  {
    name: "Kid's Menu",
    items: [
      {
        name: 'Baked Pasta',
        description: 'Choice of Lasagna, Cannelloni, Manicotti, Cheese Ravioli, or Baked Ziti',
        price: '$5.99',
      },
      {
        name: 'Spaghetti & Marinara',
        description: 'Or mushrooms, meat sauce, Italian sausage, meatball',
        price: '$5.99',
      },
      { name: 'Fettuccine Alfredo', price: '$6.99' },
    ],
  },
  {
    name: 'Sides',
    items: [
      { name: 'Marinara Sauce', price: '$1.75' },
      { name: 'Alfredo Sauce', price: '$4.45' },
      { name: 'Alla Panna Sauce (Pink Sauce)', price: '$4.45' },
      { name: 'Garlic & Olive Oil', price: '$2.00' },
      { name: 'Grilled Chicken Breast', price: '$3.95' },
      { name: 'Meatballs or Sausage', price: '$4.95' },
    ],
  },
  {
    name: 'Desserts',
    items: [
      { name: 'Tiramisu', price: '$5.25' },
      { name: 'Three Layer Chocolate Mousse', price: '$5.25' },
      { name: 'Italian Cream Cake', price: '$5.25' },
      { name: 'Cannoli', price: '$5.50' },
      {
        name: 'New York Style Cheesecake',
        description: 'Plain or strawberry',
        price: '$4.50',
      },
    ],
  },
  {
    name: 'Beverages',
    items: [
      {
        name: 'Fountain Drinks',
        description: 'Coca Cola, Diet Coke, Sprite, Dr Pepper, Diet Dr Pepper, Orange Fanta, Iced Tea, Sweet Tea',
        price: '$2.50',
      },
      { name: 'Bottled Water', price: '$2.50' },
      { name: 'Coffee / Hot Tea', price: '$2.50' },
      { name: 'Bottled Root Beer', price: '$2.50' },
    ],
  },
];

export const pizzaMenu: PizzaItem[] = [
  {
    name: 'Neapolitan',
    description: 'Thin crust cheese pizza',
    prices: ['$8.95', '$9.95', '$10.95', '$11.95'],
  },
  {
    name: "Verona's White",
    description: 'Ricotta & Mozzarella cheese',
    prices: ['$10.95', '$11.95', '$12.95', '$13.95'],
  },
  {
    name: "Tavi's Special",
    description: 'Pepperoni, Canadian bacon, sausage, hamburger, mushrooms, green peppers, onions & black olives',
    prices: ['$14.95', '$15.95', '$16.95', '$17.95'],
  },
  {
    name: "Tavi's Meat Lover's",
    description: 'Pepperoni, Canadian bacon, sausage & hamburger',
    prices: ['$13.95', '$14.95', '$15.95', '$16.95'],
  },
  {
    name: "Tavi's Veggie",
    description: 'Mushrooms, green peppers, onions & black olives',
    prices: ['$12.95', '$13.95', '$14.95', '$15.95'],
  },
  {
    name: 'Alfredo Pizza',
    description: 'Alfredo sauce & Mozzarella cheese',
    prices: ['$11.95', '$12.95', '$13.95', '$14.95'],
  },
  {
    name: 'Margarita Pizza',
    description: 'Fresh tomatoes, garlic, basil, olive oil & Mozzarella cheese',
    prices: ['$12.95', '$13.95', '$14.95', '$15.95'],
  },
];

export const pizzaToppings: PizzaItem[] = [
  {
    name: 'Additional Toppings',
    description: 'Pepperoni, Canadian bacon, sausage, hamburger, mushrooms, green peppers, onions, black olives, jalapenos, fresh garlic, green olives',
    prices: ['$1.25', '$1.50', '$1.75', '$2.00'],
  },
  {
    name: 'Special Toppings',
    description: 'Extra cheese, Feta, sliced Italian sausage, meatballs, chicken, artichoke hearts, pineapple, spinach, fresh tomatoes, anchovies',
    prices: ['$2.25', '$2.50', '$2.75', '$3.00'],
  },
];

export const reviews = [
  {
    name: 'Steve Joplin',
    text: 'My wife and I took our granddaughter here for dinner for our first experience... We are so very glad we did! The food was excellent, the staff was awesome and the atmosphere was pleasant. I had the lobster ravioli and it was outstanding... We will definitely be back!',
    ratings: { food: 5, service: 5, atmosphere: 5 },
  },
  {
    name: 'Allison Doyle',
    text: "If I could give more stars I would. This place isn't just a restaurant, it's home. They are so welcoming and sweet.",
    ratings: { food: 5, service: 5, atmosphere: 5 },
  },
  {
    name: 'Ryan Clifford',
    text: 'This place is a hidden gem! Definitely the best Italian food on Cedar Creek Lake. From homemade Italian dressing to awesome marinara. The fresh bread was excellent.',
    ratings: { food: 5 },
  },
  {
    name: 'RuthiC',
    text: 'The food is delicious, the service is so nice and warm hearted. Run like a family. The Chicken Scar Pella is hands down by far their best dish.',
    ratings: { food: 5, service: 5 },
  },
  {
    name: 'Karadi Kairn',
    text: 'Fantastic service \u2014 I felt like I was being waited on hand and foot! The owner is delightful with a bright smile and came out and greeted our table.',
    ratings: { food: 5, service: 5, atmosphere: 5 },
  },
];
