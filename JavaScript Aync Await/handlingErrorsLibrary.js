//This function returns true 50% of the time
let randomSuccess = () => {
  let num = Math.random();
  if (num < 0.5) {
    return true;
  } else {
    return false;
  }
};

//This function returns a promise that resolves half of the time and rejects half of te time
let cookBeanSouffle = () => {
  console.log("Fingers crossed... Putting the Bean Souffle in the overn");
  setTimeout(() => {
    let success = randomSuccess();
    if (success) {
      resolve("Bean Souffle");
    } else {
      reject("Dinner is ruined!");
    }
  }, 1000);
};

module.exports = cookBeanSouffle;
