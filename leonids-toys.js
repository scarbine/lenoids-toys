
const toys =[

 {
    id:1,
    name: "Playstation",
    color: "black",
    price: 499.99,
    weight: 7.23,
    height: 10,
    width: 5,
    length: 13
},

{
    id:2,
    name: "X-box",
    color: "black",
    price: 399.99,
    weight: 23,
    height: 10,
    width: 5,
    length: 13
},

 {
    id:3,
    name: "Basketball",
    color: "orange",
    price: 19.99,
    weight: 3.2,
    height: 10,
    width: 5,
    length: 13
}
]

console.log(toys);

for (const toy of toys) {
    console.log(`${toy.name} is currently on sale for $${toy.price}.`)
}
