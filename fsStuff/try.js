const product = {
  name: "jobo",
  productType: "single123",
  desc: "good stuff"
};

const objectWithoutKey = (object, key) => {
  const { [key]: deletedKey, ...otherKeys } = object;
  // const { productType: name2 } = object;
  //   console.log({ [key]: deletedKey, ...otherKeys });
//   console.log("deletedKey", deletedKey);
//   console.log("otherKeys", otherKeys);
  return otherKeys;
};

// const result = objectWithoutKey(product, "productType");
// console.log(result);
const result = delete product.productType

console.log(product);