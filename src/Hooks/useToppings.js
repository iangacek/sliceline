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
    "Green Olives",
    "Black Olives",
    "Tomatoes",
    "Pineapple",
    "Spinach",
    "Artichokes",
    "Mushrooms",
    "Jalapeno Peppers",
    "Banana Peppers"
];

function getDefaultToppings() {
    return toppingsList.map(topping => ({
        name: topping,
        checked: false
    }));
}