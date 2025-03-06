const restaurants = [
  {
    name: 'Burger Palace',
    description: 'The best burgers in town with fresh ingredients and homemade sauces.',
    address: '123 Main St, Anytown, USA',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    cuisine: 'American',
    rating: 4.5,
    menu: [
      {
        name: 'Classic Burger',
        description: 'Beef patty with lettuce, tomato, onion, and our special sauce',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Burgers'
      },
      {
        name: 'Cheese Burger',
        description: 'Classic burger with American cheese',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Burgers'
      },
      {
        name: 'Bacon Burger',
        description: 'Classic burger with crispy bacon strips',
        price: 10.99,
        image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Burgers'
      },
      {
        name: 'BBQ Burger',
        description: 'Burger with BBQ sauce, onion rings, and cheddar cheese',
        price: 11.99,
        image: 'https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Burgers'
      },
      {
        name: 'Mushroom Swiss Burger',
        description: 'Burger topped with sautéed mushrooms and Swiss cheese',
        price: 11.99,
        image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Burgers'
      },
      {
        name: 'French Fries',
        description: 'Crispy golden fries with sea salt',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Sides'
      },
      {
        name: 'Onion Rings',
        description: 'Crispy battered onion rings',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1581410388640-cbe53d77c7f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Sides'
      },
      {
        name: 'Coleslaw',
        description: 'Fresh cabbage slaw with creamy dressing',
        price: 3.49,
        image: 'https://images.unsplash.com/photo-1600850056064-a8b380df8395?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Sides'
      },
      {
        name: 'Sweet Potato Fries',
        description: 'Crispy sweet potato fries with honey mustard',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1635030103096-fc11d6c16b2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Sides'
      },
      {
        name: 'Chocolate Milkshake',
        description: 'Rich and creamy chocolate milkshake',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Drinks'
      },
      {
        name: 'Vanilla Milkshake',
        description: 'Classic vanilla bean milkshake',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1585500134359-2542931a611e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Drinks'
      },
      {
        name: 'Strawberry Milkshake',
        description: 'Fresh strawberry milkshake with whipped cream',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Drinks'
      }
    ]
  },
  {
    name: 'Pizza Heaven',
    description: 'Authentic Italian pizzas made with traditional recipes and fresh ingredients.',
    address: '456 Oak St, Anytown, USA',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    cuisine: 'Italian',
    rating: 4.2,
    menu: [
      {
        name: 'Margherita Pizza',
        description: 'Classic pizza with tomato sauce, mozzarella, and basil',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Pizzas'
      },
      {
        name: 'Pepperoni Pizza',
        description: 'Margherita pizza topped with pepperoni slices',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Pizzas'
      },
      {
        name: 'Vegetarian Pizza',
        description: 'Pizza topped with bell peppers, mushrooms, onions, and olives',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1511689660979-10d2b1aada49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Pizzas'
      },
      {
        name: 'Supreme Pizza',
        description: 'Loaded with pepperoni, sausage, bell peppers, onions, and mushrooms',
        price: 16.99,
        image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Pizzas'
      },
      {
        name: 'BBQ Chicken Pizza',
        description: 'BBQ sauce base with chicken, red onions, and cilantro',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Pizzas'
      },
      {
        name: 'Hawaiian Pizza',
        description: 'Ham and pineapple on tomato sauce with mozzarella',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Pizzas'
      },
      {
        name: 'Garlic Bread',
        description: 'Toasted bread with garlic butter and herbs',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Sides'
      },
      {
        name: 'Caesar Salad',
        description: 'Fresh romaine lettuce with Caesar dressing, croutons, and parmesan',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Salads'
      },
      {
        name: 'Caprese Salad',
        description: 'Fresh mozzarella, tomatoes, and basil with balsamic glaze',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Salads'
      },
      {
        name: 'Tiramisu',
        description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Desserts'
      },
      {
        name: 'Cannoli',
        description: 'Crispy pastry shells filled with sweet ricotta cream',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1624001934657-440a2ad0b1f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Desserts'
      },
      {
        name: 'Panna Cotta',
        description: 'Italian cream dessert with berry compote',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Desserts'
      }
    ]
  },
  {
    name: 'Sushi World',
    description: 'Fresh and authentic Japanese sushi prepared by expert chefs.',
    address: '789 Maple Ave, Anytown, USA',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    cuisine: 'Japanese',
    rating: 4.7,
    menu: [
      {
        name: 'California Roll',
        description: 'Crab, avocado, and cucumber roll',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Rolls'
      },
      {
        name: 'Salmon Nigiri',
        description: 'Fresh salmon over pressed vinegared rice',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Nigiri'
      },
      {
        name: 'Spicy Tuna Roll',
        description: 'Spicy tuna and cucumber roll',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Rolls'
      },
      {
        name: 'Dragon Roll',
        description: 'Eel and cucumber roll topped with avocado',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Rolls'
      },
      {
        name: 'Rainbow Roll',
        description: 'California roll topped with assorted sashimi',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Rolls'
      },
      {
        name: 'Philadelphia Roll',
        description: 'Smoked salmon, cream cheese, and cucumber',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Rolls'
      },
      {
        name: 'Miso Soup',
        description: 'Traditional Japanese soup with tofu and seaweed',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1578020190125-f4f7c11f6cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Soups'
      },
      {
        name: 'Edamame',
        description: 'Steamed soybean pods with sea salt',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Appetizers'
      },
      {
        name: 'Tempura',
        description: 'Assorted vegetables and shrimp in light batter',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1581436073261-78548e06f60f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Appetizers'
      },
      {
        name: 'Gyoza',
        description: 'Pan-fried pork and vegetable dumplings',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Appetizers'
      },
      {
        name: 'Green Tea Ice Cream',
        description: 'Creamy green tea flavored ice cream',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Desserts'
      },
      {
        name: 'Mochi Ice Cream',
        description: 'Japanese rice cake filled with ice cream',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Desserts'
      }
    ]
  },
  {
    name: 'Taco Fiesta',
    description: 'Authentic Mexican street food with fresh ingredients and homemade salsas.',
    address: '321 Pine St, Anytown, USA',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    cuisine: 'Mexican',
    rating: 4.4,
    menu: [
      {
        name: 'Street Tacos',
        description: 'Three corn tortillas with choice of meat, onions, and cilantro',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Tacos'
      },
      {
        name: 'Fish Tacos',
        description: 'Battered fish with slaw and chipotle mayo',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Tacos'
      },
      {
        name: 'Burrito',
        description: 'Large flour tortilla filled with meat, rice, beans, and toppings',
        price: 10.99,
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Burritos'
      },
      {
        name: 'Quesadilla',
        description: 'Grilled flour tortilla with cheese and choice of meat',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Quesadillas'
      },
      {
        name: 'Nachos Supreme',
        description: 'Tortilla chips loaded with beans, cheese, meat, and toppings',
        price: 11.99,
        image: 'https://images.unsplash.com/photo-1582169296194-e4d644c48063?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Appetizers'
      },
      {
        name: 'Guacamole & Chips',
        description: 'Fresh made guacamole with crispy tortilla chips',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Appetizers'
      },
      {
        name: 'Mexican Rice',
        description: 'Traditional Mexican rice with vegetables',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Sides'
      },
      {
        name: 'Refried Beans',
        description: 'Traditional Mexican style refried pinto beans',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Sides'
      },
      {
        name: 'Churros',
        description: 'Mexican fried-dough pastry with cinnamon sugar',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1624471458733-b87d7dd3c8f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Desserts'
      },
      {
        name: 'Flan',
        description: 'Traditional Mexican caramel custard',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1624471458733-b87d7dd3c8f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Desserts'
      }
    ]
  },
  {
    name: 'Curry House',
    description: 'Authentic Indian cuisine with traditional spices and flavors.',
    address: '567 Spice Lane, Anytown, USA',
    image: 'https://glebekitchen.com/wp-content/uploads/2020/05/green-chili-chicken-curry-indian-hotel-front-close-high.jpg',
    cuisine: 'Indian',
    rating: 4.6,
    menu: [
      {
        name: 'Butter Chicken',
        description: 'Tender chicken in rich tomato-butter sauce',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Main Courses'
      },
      {
        name: 'Chicken Tikka Masala',
        description: 'Grilled chicken in spiced tomato-cream sauce',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Main Courses'
      },
      {
        name: 'Palak Paneer',
        description: 'Cottage cheese cubes in spiced spinach gravy',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Vegetarian'
      },
      {
        name: 'Dal Makhani',
        description: 'Creamy black lentils simmered overnight',
        price: 11.99,
        image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Vegetarian'
      },
      {
        name: 'Naan Bread',
        description: 'Traditional Indian flatbread',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Breads'
      },
      {
        name: 'Garlic Naan',
        description: 'Naan bread with garlic and herbs',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Breads'
      },
      {
        name: 'Samosas',
        description: 'Crispy pastries with spiced potato filling',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Appetizers'
      },
      {
        name: 'Mango Lassi',
        description: 'Sweet yogurt drink with mango',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Drinks'
      },
      {
        name: 'Gulab Jamun',
        description: 'Deep-fried milk solids in sugar syrup',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Desserts'
      }
    ]
  }
];

export default restaurants;