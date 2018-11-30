const orderTotal = speacialOrder => {
  const totalPrice = speacialOrder.items
    .filter(x => !x.shipping)
    .reduce((acc, item) => {
      return (acc = acc + item.price * item.quantity);
    }, 0);

  const shipingItem = speacialOrder.items
    .find(x => !!x.shipping)

    const shipping = totalPrice > 400 ? 0: shipingItem.price

    return totalPrice + shipping;
};

module.exports = {
  orderTotal
};
