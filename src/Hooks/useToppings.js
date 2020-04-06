import {useState} from 'react';

export function useToppings(defaultTopping){
    const [toppings, setToppings] = useState(defaultTopping || getDefaultToppings());
    
    function checkTopping(index){
        const newToppings = [...toppings];
        newToppings[index].checked = !newToppings[index].checked;
        setToppings(newToppings);
    }
    return {
        checkTopping,
        toppings
    }
}


const toppingsList = [
    "Extra Cheese",
    "Pepperoni",
    "Sausage",
    "Meatball",
    "Grilled Chicken",
    "Beef",
    "Ham",
    "Bacon",
    "Anchovies",
    "Onions",
    "Banana Peppers",
    "Green Olives",
    "Black Olives",
    "Pineapple",
    "Jalapeno Peppers",
    "Tomatoes",
    "Spinach",
    "Artichokes",
    "Mushrooms"
];

function getDefaultToppings() {
    return toppingsList.map(topping => ({
        name: topping,
        checked: false
    }));
}