import {
  checkInventory,
  processPayment,
  shipOrder,
} from "./libraryForChainingPromises";

const order = {
  items: [
    ["sunglasses", 1],
    ["bags", 2],
  ],
  giftCardBalance: 79.82,
};

checkInventory(order)
  .then((resolvedValueArr) => {
    return processPayment(resolvedValueArr);
  })
  .then((resolvedValueArr) => {
    return shipOrder(resolvedValueArr);
  })
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((err) => {
    return err;
  });
