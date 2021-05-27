// this is the master toys list

const toys =[

 {
    id:1,
    make: "Sony",
    name: "Playstation",
    color: "black",
    price: 499.99,
    weight: 7.23,
    height: 10,
    width: 5,
    length: 13,
    quantity: 5
},

{
    id:2,
    make: "Microsoft",
    name: "X-box",
    color: "black",
    price: 399.99,
    weight: 23,
    height: 10,
    width: 5,
    length: 13,
    quantity: 23
},

 {
    id:3,
    make: "Wilson",
    name: "Basketball",
    color: "orange",
    price: 19.99,
    weight: 3.2,
    height: 10,
    width: 5,
    length: 13, 
    quantity: 23
}
]

// Consoles list of toys
console.log(toys);

// this loop goes thru list of Toys and console.logs the current price
for (const toy of toys) {
    console.log(`${toy.name} is currently on sale for $${toy.price}.`)
}


// This section is for .push method to add new items to the toys array

const gameboy = {

    id:4,
    make: "Nintendo",
    name: "Gameboy",
    color: "grey",
    price: 99.99,
    weight: 2.2,
    height: 8,
    width: 4,
    length: 13, 
    quantity: 10 
}

const skateboard = {

    id:5,
    make: "Hawk",
    name: "Skateboard",
    color: "grey",
    price: 79.99,
    weight: 2.2,
    height: 12,
    width: 5,
    length: 13, 
    quantity: 14
}

toys.push(gameboy, skateboard)



for (const toy of toys) {
    console.log(`The ${toy.make} ${toy.name} was $${toy.price}.`) 
}

// This section raises tbe price of the toys via loop

console.log(toys)
for (const toy of toys) {
    toy.price = toy.price + (toy.price * .05)

console.log(`The ${toy.make} ${toy.name} is now priced at $${toy.price.toFixed(2)}.`) 

}

// This section is finding a item by id then displaying that items data

