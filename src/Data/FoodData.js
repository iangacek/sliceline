export function formatPrice(price){
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}

export const foodItems = [
  {
    name: "Cheese Pizza",
    img: "/img/pizza.png",
    section: "Pizzas",
    price: 2
  },
  {
    name: "Pepperoni Pizza",
    img: "/img/pizza2.jpeg",
    section: "Pizzas",
    price: 2.5
  },
  {
    name: "Chicken Pizza",
    img: "/img/chicken-pizza.jpeg",
    section: "Pizzas",
    price: 3
  },
  {
    name: "Veggie Pizza",
    img: "/img/healthy-pizza.jpeg",
    section: "Pizzas",
    price: 2.5
  },
  {
    name: "Burger",
    img: "/img/burger.jpeg",
    section: "Sandwiches",
    price: 5
  },
  {
    name: "Gyro",
    img: "/img/gyro.jpeg",
    section: "Sandwiches",
    price: 5
  },
  {
    name: "Shrimp PoBoy",
    img: "/img/sandwich.jpeg",
    section: "Sandwiches",
    price: 5
  },
  {
    name: "Fries",
    img: "/img/fries.jpeg",
    section: "Sides",
    price: 2
  },
  {
    price: 1.5,
    name: 'Soda',
    section: 'Drinks',
    choices: ['Coke', 'Sprite', 'Root Beer']
  }
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
