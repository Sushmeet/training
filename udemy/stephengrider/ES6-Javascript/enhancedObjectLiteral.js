function createBookshop(inventory) {
    return {
        inventory, 
        inventoryValue: function () {
           return this.inventory.reduce((acc, cur) => {
                return acc + cur.price;
            }, 0)
        },
        priceForTitle(title) {
            return this.inventory.find((inventory) => {
              return inventory.title === title;
            }).price;
        }};
}


const inventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'Eloquent Javascript', price: 15 }
];

const bookShop = createBookshop(inventory);

const value = bookShop.inventoryValue();
const titleAvail = bookShop.priceForTitle('Harry Potter')

console.log(value);
console.log(titleAvail);