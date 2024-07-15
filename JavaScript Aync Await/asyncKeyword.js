function withConstructor(num) {
  return new Promise((resolve, reject) => {
    if (num === 0) {
      resolve("zero");
    } else {
      reject("not zero");
    }
  });
}

withConstructor(0).then((resolveValue) => {
  console.log(
    `withConstructor(0) returned a promise with resolved to ${resolveValue}`
  );
});

async function withAsync(num) {
  if (num === 0) {
    resolve("zero");
  } else {
    reject("not zero");
  }
}

withAsync(100).then((resolveValue) => {
  console.log(
    `withAsync(100) return a promise which resolved to ${resolveValue}`
  );
});
