// Let's construct a promise object

const executorFunction = (resolve, reject) => {
  if (someCondition === true) {
    resolve("Condition is met & resolved");
  } else {
    reject("Condition failed & rejected");
  }
};

let someCondition = true;
const prom = new Promise(executorFunction);
console.log(prom);
