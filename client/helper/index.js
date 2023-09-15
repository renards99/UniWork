function totalPriceItemInCart(value, quantity) {
  // status = 0 is -1 quantity
  // status = 1 is +1 quantity
  let integerValue = parseInt(value.replace(/\./g, ''), 10);
  quantity = parseInt(quantity);
  //   quantity = status == 1 ? (quantity += 1) : (quantity -= 1);
  integerValue *= quantity;
  value = integerValue.toLocaleString(integerValue).replace(/,/g, '.');
  return value;
}

function toatalInCart(cart_items, vart, status_price) {
  vart = vart ? vart : 0;
  let result = cart_items.reduce((accumulator, currentValue) => {
    return (
      accumulator +
      parseInt(currentValue.price.replace(/\./g, ''), 10) * parseInt(currentValue.quantity)
    );
  }, 0);
  if (status_price == 0) {
    result = result * vart;
    result = result.toLocaleString(result).replace(/,/g, '.');
    return result;
  }
  vart ? (result += (result * vart)) : null;
  result = result.toLocaleString(result).replace(/,/g, '.');
  return result;
}

export { totalPriceItemInCart, toatalInCart };
