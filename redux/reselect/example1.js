/**
 * Basic example for the reselect library
 * @see https://github.com/reduxjs/reselect
 */

const { createSelector } = require("reselect");

/*
So lets say you have a shop object in Redux State which has 
an array of items, and a tax percent.
*/

const shopItemsSelector = (state) => state.shop.items; // get all the items of the shop, so items array
const taxPercentSelector = (state) => state.shop.taxPercent; // get the taxPercent for the shop

const subtotalSelector = createSelector(shopItemsSelector, (items) => {
  console.log("shopItemsSelector---", shopItemsSelector);
  console.log("items---", items);
  return items.reduce((acc, item) => acc + item.value, 0);
});

const taxSelector = createSelector(
  subtotalSelector,
  taxPercentSelector,
  (subtotal, taxPercent) => subtotal * (taxPercent / 100)
);

const totalSelector = createSelector(
  subtotalSelector,
  taxSelector,
  (subtotal, tax) => ({ total: subtotal + tax })
);

let exampleState = {
  shop: {
    taxPercent: 8,
    items: [
      { name: "apple", value: 1.2 },
      { name: "orange", value: 0.95 },
    ],
  },
};

console.log("shopItemSelector", shopItemsSelector(exampleState)); // return array of items.
console.log("taxSelector--", taxPercentSelector(exampleState)); // return tax rate.
console.log(subtotalSelector(exampleState)); // 2.15
console.log(taxSelector(exampleState)); // 0.172
console.log(totalSelector(exampleState)); // { total: 2.322 }
