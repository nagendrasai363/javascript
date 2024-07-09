//Let's look at how we'll be using setTimeout() to construct asynchronous promises

const returnPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I resolved!");
    }, 1000);
  });
};

const prom = returnPromiseFunction();
console.log(prom);
console.log("I am last log");
